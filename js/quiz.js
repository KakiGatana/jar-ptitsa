// Moteur d’exercices plein écran : choix, saisie, remise en ordre, prononciation.
import { $, $$, esc, acc, tr, say, norm, shuffle, similarity, listenRu, SR, sparks } from "./util.js";
import { S } from "./store.js";

const KB = ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбюё"];

export function keyboardHTML() {
  return `<div class="vkb" hidden>${KB.map((r) => `<div>${[...r].map((k) => `<button type="button" data-k="${k}">${k}</button>`).join("")}</div>`).join("")}
  <div><button type="button" data-k=" " class="wide">espace</button><button type="button" data-k="⌫">⌫</button></div></div>`;
}
export function bindKeyboard(root, input) {
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-k]"); if (!b) return;
    const k = b.dataset.k;
    const s = input.selectionStart ?? input.value.length, en = input.selectionEnd ?? s;
    if (k === "⌫") {
      const p = s === en ? Math.max(0, s - 1) : s;
      input.value = input.value.slice(0, p) + input.value.slice(en); input.setSelectionRange(p, p);
    } else { input.value = input.value.slice(0, s) + k + input.value.slice(en); input.setSelectionRange(s + 1, s + 1); }
    input.focus();
  });
}

export function runQuiz(items, { title = "", onDone } = {}) {
  const queue = items.map((it, i) => ({ ...it, _id: i }));
  const total = items.length;
  const firstTry = new Set(), failed = new Set();
  let idx = 0, state = "ask", current = null, answerFn = null;

  const el = document.createElement("div");
  el.className = "player";
  el.innerHTML = `<header><button class="icon-btn" data-close aria-label="Quitter">✕</button>
    <div class="bar"><i></i></div><span class="pcount"></span></header>
    <main class="pq"></main><footer class="fb"></footer>`;
  document.body.appendChild(el);
  document.body.classList.add("noscroll");
  const main = $(".pq", el), foot = $(".fb", el);

  const close = (res) => { document.removeEventListener("keydown", onKey); el.remove(); document.body.classList.remove("noscroll"); window.speechSynthesis?.cancel(); if (res) onDone?.(res); };
  $("[data-close]", el).onclick = () => { if (confirm("Quitter l’exercice ? Ta progression sur cette série sera perdue.")) close(); };

  function progress() {
    const doneUnique = new Set([...firstTry, ...failed]).size;
    $(".bar i", el).style.width = (doneUnique / total) * 100 + "%";
    $(".pcount", el).textContent = `${Math.min(doneUnique + 1, total)} / ${total}`;
  }

  function footer(kind, html = "") {
    foot.className = "fb " + kind;
    if (kind === "check") foot.innerHTML = `<button class="btn ghost" data-skip>Je ne sais pas</button><button class="btn gold" data-check disabled>Vérifier</button>`;
    else foot.innerHTML = `<div class="fbmsg">${html}</div><button class="btn ${kind === "ok" ? "gold" : "red"}" data-next>Continuer</button>`;
    $("[data-check]", foot)?.addEventListener("click", () => answerFn?.());
    $("[data-skip]", foot)?.addEventListener("click", () => verdict(false));
    $("[data-next]", foot)?.addEventListener("click", next);
  }
  const enableCheck = (on = true) => { const b = $("[data-check]", foot); if (b) b.disabled = !on; };

  function verdict(ok, extra = "") {
    if (state !== "ask") return;
    state = "fb";
    const it = current;
    if (ok) { if (!failed.has(it._id)) firstTry.add(it._id); }
    else if (!failed.has(it._id)) { failed.add(it._id); queue.push({ ...it, retry: true }); }
    const ans = it.type === "speak" ? it.ru : Array.isArray(it.answer) ? it.answer[0] : it.answer;
    const ruAns = it.type !== "choice" || it.ruOpts;
    if (ok) footer("ok", `<b>Верно !</b> ${pickPraise()}${extra}`);
    else footer("bad", `<b>Réponse :</b> <span class="${ruAns ? "ru" : ""}">${ruAns ? acc(ans) : esc(ans)}</span>${extra}`);
    if (ruAns && ans) say(ans);
    progress();
  }

  function next() {
    idx++;
    if (idx >= queue.length) return finish();
    render();
  }

  function finish() {
    const score = Math.round((firstTry.size / total) * 100);
    main.innerHTML = `<div class="finish"><div class="medal">${score >= 90 ? "★★★" : score >= 70 ? "★★☆" : "★☆☆"}</div>
      <h2>${score >= 90 ? "Великолепно !" : score >= 70 ? "Хорошо !" : "Продолжай !"}</h2>
      <p class="muted">${title}</p>
      <div class="score">${score}<small>%</small></div>
      <p>${firstTry.size} bonnes réponses du premier coup sur ${total}.</p></div>`;
    foot.className = "fb"; foot.innerHTML = `<button class="btn gold wide" data-end>Terminer</button>`;
    const r = main.getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + 140, 40);
    $("[data-end]", foot).onclick = () => close({ score, correct: firstTry.size, total });
  }

  function render() {
    state = "ask"; answerFn = null;
    current = queue[idx];
    const it = current;
    progress();
    footer("check");
    const tag = it.retry ? `<span class="chip red">À revoir</span>` : "";
    const big = it.big ? `<div class="qbig ru" data-say="${esc(it.big)}">${acc(it.big)}</div>${S.settings.translit ? `<div class="tl">${tr(it.big)}</div>` : ""}` : "";
    const audio = it.audio && !it.big ? `<button class="play-big" data-play aria-label="Écouter">${ICON_SOUND}</button>` : "";
    main.innerHTML = `<div class="qhead">${tag}<h2 class="qprompt">${esc(it.prompt)}</h2>${it.q ? `<p class="qsent">${esc(it.q)}</p>` : ""}${big}${audio}</div><div class="qbody"></div>`;
    const body = $(".qbody", main);
    if (it.audio) { $("[data-play]", main)?.addEventListener("click", () => say(it.audio)); setTimeout(() => say(it.audio), 250); }

    if (it.type === "choice") {
      body.innerHTML = `<div class="opts">${it.options.map((o, i) => `<button class="opt ${it.ruOpts ? "ru-o" : ""}" data-v="${esc(o)}"><kbd>${i + 1}</kbd><span>${it.ruOpts ? acc(o) : esc(o)}</span></button>`).join("")}</div>`;
      $$(".opt", body).forEach((b) => b.addEventListener("click", () => {
        if (state !== "ask") return;
        const ok = b.dataset.v === it.answer;
        b.classList.add(ok ? "good" : "bad");
        if (!ok) $$(".opt", body).find((x) => x.dataset.v === it.answer)?.classList.add("good");
        if (it.ruOpts && ok) say(it.answer);
        verdict(ok);
      }));
      $("[data-check]", foot)?.remove();
    }

    if (it.type === "type") {
      body.innerHTML = `<input class="tin" autocomplete="off" autocapitalize="off" spellcheck="false" lang="ru" placeholder="Écris en cyrillique…">
        <button class="btn ghost sm" data-kb type="button">⌨ Clavier russe</button>${keyboardHTML()}`;
      const inp = $(".tin", body);
      bindKeyboard($(".vkb", body), inp);
      $("[data-kb]", body).onclick = () => { const k = $(".vkb", body); k.hidden = !k.hidden; };
      inp.addEventListener("input", () => enableCheck(inp.value.trim().length > 0));
      setTimeout(() => inp.focus(), 50);
      const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
      answerFn = () => {
        const v = inp.value;
        const ok = answers.some((a) => norm(a) === norm(v));
        const close = !ok && answers.some((a) => similarity(a, v) >= 0.8);
        inp.classList.add(ok ? "good" : "bad"); inp.disabled = true;
        verdict(ok, close ? `<br><small>Presque ! Vérifie l’orthographe.</small>` : "");
      };
    }

    if (it.type === "order") {
      const words = it.answer.split(/\s+/);
      let pool = shuffle(words.map((w, i) => ({ w, i })));
      if (pool.map((p) => p.w).join(" ") === it.answer && words.length > 1) pool = pool.reverse();
      const built = [];
      body.innerHTML = `<div class="built"></div><div class="pool"></div>`;
      const draw = () => {
        $(".built", body).innerHTML = built.map((p, k) => `<button class="word ru-o" data-b="${k}">${esc(p.w)}</button>`).join("") || `<span class="muted">Touche les mots dans l’ordre</span>`;
        $(".pool", body).innerHTML = pool.map((p, k) => `<button class="word ru-o" data-p="${k}">${esc(p.w)}</button>`).join("");
        enableCheck(pool.length === 0);
      };
      body.addEventListener("click", (e) => {
        if (state !== "ask") return;
        const p = e.target.closest("[data-p]"), b = e.target.closest("[data-b]");
        if (p) { const [x] = pool.splice(+p.dataset.p, 1); built.push(x); say(x.w, { rate: 1 }); draw(); }
        if (b) { const [x] = built.splice(+b.dataset.b, 1); pool.push(x); draw(); }
      });
      draw();
      answerFn = () => verdict(norm(built.map((p) => p.w).join(" ")) === norm(it.answer));
    }

    if (it.type === "speak") {
      body.innerHTML = `<div class="speak"><div class="qbig ru" data-say="${esc(it.ru)}">${acc(it.ru)}</div>
        ${S.settings.translit ? `<div class="tl">${tr(it.ru)}</div>` : ""}<p class="muted">${esc(it.fr)}</p>
        <button class="mic" data-mic aria-label="Parler">${ICON_MIC}</button><p class="heard muted"></p></div>`;
      $("[data-mic]", body).onclick = async (e) => {
        const btn = e.currentTarget; btn.classList.add("rec");
        $(".heard", body).textContent = "Je t’écoute…";
        try {
          const alts = await listenRu();
          btn.classList.remove("rec");
          if (!alts.length) { $(".heard", body).textContent = "Je n’ai rien entendu. Réessaie."; return; }
          const best = Math.max(...alts.map((a) => similarity(a, it.ru)));
          $(".heard", body).innerHTML = `Entendu : « <span class="ru">${esc(alts[0])}</span> »`;
          if (best >= 0.7) verdict(true, ` <small>(${Math.round(best * 100)} %)</small>`);
          else $(".heard", body).innerHTML += `<br>Pas tout à fait (${Math.round(best * 100)} %). Écoute et réessaie.`;
        } catch (err) { btn.classList.remove("rec"); $(".heard", body).textContent = "Micro indisponible. Tu peux passer."; }
      };
      foot.innerHTML = `<button class="btn ghost" data-pass>Passer</button><button class="btn ghost" data-listen>Écouter</button>`;
      $("[data-pass]", foot).onclick = () => { state = "fb"; firstTry.add(it._id); next(); };
      $("[data-listen]", foot).onclick = () => say(it.ru);
    }
  }

  function onKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const n = $("[data-next]", foot) || $("[data-end]", foot); if (n) return n.click();
      const c = $("[data-check]", foot); if (c && !c.disabled) c.click();
    } else if (/^[1-9]$/.test(e.key) && state === "ask" && current?.type === "choice" && document.activeElement?.tagName !== "INPUT") {
      $$(".opt", main)[+e.key - 1]?.click();
    }
  }
  document.addEventListener("keydown", onKey);
  render();
}

const PRAISE = ["Молодец !", "Отлично !", "Так держать !", "Супер !", "Здорово !"];
const pickPraise = () => `<span class="ru">${PRAISE[Math.floor(Math.random() * PRAISE.length)]}</span>`;

export const ICON_SOUND = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
export const ICON_MIC = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

// ── Génération des exercices d’une leçon ──
export function buildLessonQuiz(L, allVocab) {
  const ex = [];
  const v = L.vocab;
  const others = allVocab.filter((w) => !v.includes(w));
  const distract = (w, k) => {
    const pool = shuffle(v.filter((x) => x !== w && x[k] !== w[k])).concat(shuffle(others));
    const opts = [w[k]];
    for (const x of pool) { if (opts.length >= 4) break; if (!opts.includes(x[k])) opts.push(x[k]); }
    return shuffle(opts);
  };
  const isA0 = L.level === "A0";
  shuffle(v).slice(0, isA0 ? 5 : 6).forEach((w, i) => {
    const kind = i % 3;
    if (kind === 0) ex.push({ type: "choice", prompt: "Que signifie ce mot ?", big: w[0], audio: w[0], options: distract(w, 1), answer: w[1] });
    else if (kind === 1) ex.push({ type: "choice", prompt: `Comment dit-on « ${w[1]} » ?`, options: distract(w, 0), answer: w[0], ruOpts: true });
    else ex.push({ type: "choice", prompt: "Écoute et choisis ce que tu entends", audio: w[0], options: distract(w, 0), answer: w[0], ruOpts: true });
  });
  if (!isA0) {
    shuffle(v.filter((w) => !/[\/,…]/.test(w[0]) && w[0].split(" ").length <= 2)).slice(0, 2)
      .forEach((w) => ex.push({ type: "type", prompt: `Écris en russe : « ${w[1]} »`, answer: [w[0]] }));
    shuffle(L.dialogue.filter((d) => { const n = d[1].split(/\s+/).length; return n >= 3 && n <= 8; })).slice(0, 2)
      .forEach((d) => ex.push({ type: "order", prompt: `Remets dans l’ordre : « ${d[2]} »`, answer: d[1] }));
  }
  for (const d of L.drills) {
    const isRu = /[а-яё]/i.test(d.a);
    if (d.opts) ex.push({ type: "choice", prompt: d.q.includes("___") ? "Complète la phrase" : d.q, q: d.q.includes("___") ? d.q : "", options: shuffle(d.opts), answer: d.a, ruOpts: isRu });
    else ex.push({ type: "type", prompt: d.q.includes("___") ? "Complète en russe" : d.q, q: d.q.includes("___") ? d.q : "", answer: [d.a] });
  }
  if (SR && S.settings.speak && !isA0) {
    const line = shuffle(L.dialogue.filter((d) => d[1].split(/\s+/).length <= 7))[0];
    if (line) ex.push({ type: "speak", prompt: "Prononce cette phrase", ru: line[1], fr: line[2] });
  }
  // On garde les exercices de vocabulaire en premier, puis on mélange le reste.
  const head = ex.slice(0, isA0 ? 5 : 6), tail = shuffle(ex.slice(isA0 ? 5 : 6));
  return head.concat(tail);
}
