import { $, $$, esc, acc, plain, tr, say, shuffle, pick, toast, sparks, stressify, initVoices, ruVoices, setVoice, canSpeak, hasRuVoice } from "./util.js";
import { S, save, addXP, addCards, hasCard, dueCards, grade, today, addDays, liveStreak, goal, todayXP, exportData, importData, resetAll, MAX_IMPORT_BYTES } from "./store.js";
import { runQuiz, buildLessonQuiz, ICON_SOUND } from "./quiz.js";
import { logoSVG } from "./logo.js";
import { LEVELS, HONEST_NOTE } from "./data/curriculum.js";
import { LESSONS_A } from "./data/lessons-a.js";
import { LESSONS_B } from "./data/lessons-b.js";
import { ALPHABET, GROUPS } from "./data/alphabet.js";
import { GRAMMAR } from "./data/grammar.js";
import { CONVERSATIONS } from "./data/conversations.js";
import { PHRASES } from "./data/phrases.js";

const LESSONS = [...LESSONS_A, ...LESSONS_B];
const byId = Object.fromEntries(LESSONS.map((l) => [l.id, l]));
const ALL_VOCAB = LESSONS.flatMap((l) => l.vocab);
const view = $("#view");
window.__rate = S.settings.rate;

// ───────────────────────── Icônes ─────────────────────────
const I = {
  home: '<path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  path: '<path d="M5 20c0-4 3-5 7-5s7-1 7-5-3-5-7-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="5" cy="20" r="2"/><circle cx="12" cy="5" r="2"/>',
  cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12" fill="none" stroke="currentColor" stroke-width="2"/>',
  chat: '<path d="M4 4h16v11H9l-5 4z"/>',
  book: '<path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-5a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5z"/>',
  map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6z"/>',
  abc: '<text x="12" y="17" text-anchor="middle" font-size="15" font-weight="700" font-family="serif">Ж</text>',
  flame: '<path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-3-1-6 1-9z"/>'
};
const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${I[n]}</svg>`;

const NAV = [
  ["", "Accueil", "home"], ["parcours", "Parcours", "path"], ["revision", "Réviser", "cards"],
  ["pratique", "Pratiquer", "chat"], ["grammaire", "Guides", "book"], ["alphabet", "Alphabet", "abc"],
  ["programme", "Programme", "map"], ["profil", "Profil", "user"]
];

// ───────────────────────── Coquille ─────────────────────────
function shell() {
  $("#brand").innerHTML = `${logoSVG("hd")}<span><b>Жар-птица</b><small>Jar-Ptitsa</small></span>`;
  $("#side").innerHTML = NAV.map(([h, t, i]) => `<a href="#/${h}" data-nav="${h}">${icon(i)}<span>${t}</span>${h === "revision" ? '<em class="badge" data-due></em>' : ""}</a>`).join("");
  $("#tabs").innerHTML = NAV.filter(([h]) => ["", "parcours", "revision", "pratique", "grammaire"].includes(h))
    .map(([h, t, i]) => `<a href="#/${h}" data-nav="${h}">${icon(i)}<span>${t}</span>${h === "revision" ? '<em class="badge" data-due></em>' : ""}</a>`).join("");
  refreshChrome();
}
function refreshChrome() {
  const n = dueCards().length;
  $$("[data-due]").forEach((b) => { b.textContent = n > 99 ? "99+" : n; b.hidden = !n; });
  $("#streak").innerHTML = `${icon("flame")}<b>${liveStreak()}</b>`;
  $("#streak").classList.toggle("on", S.lastDay === today());
}
document.addEventListener("xp", refreshChrome);

function applyTheme() {
  const t = S.settings.theme;
  if (t === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", t);
}

// Lecture au clic de tout mot russe
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-say], .ru");
  if (!t || e.target.closest("button:not([data-say]), a, input")) return;
  const txt = t.dataset.say || t.textContent;
  if (/[а-яё]/i.test(txt)) { say(txt); t.classList.add("speaking"); setTimeout(() => t.classList.remove("speaking"), 700); }
});

// ───────────────────────── Routeur ─────────────────────────
const routes = [
  [/^$/, home], [/^parcours$/, parcours], [/^lecon\/(.+)$/, lesson], [/^revision$/, review],
  [/^pratique$/, practice], [/^conversation\/(.+)$/, conversation], [/^phrases$/, phrases],
  [/^grammaire$/, grammarList], [/^grammaire\/(.+)$/, grammarArticle], [/^alphabet$/, alphabet],
  [/^programme$/, programme], [/^profil$/, profile]
];
function route() {
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  const [re, fn] = routes.find(([r]) => r.test(h)) || routes[0];
  const m = h.match(re) || [];
  window.speechSynthesis?.cancel();
  view.classList.remove("in"); void view.offsetWidth;
  view.innerHTML = fn(...m.slice(1)) || "";
  view.classList.add("in");
  stressify(view);
  afterRender.splice(0).forEach((f) => f());
  const top = h.split("/")[0];
  const navKey = { lecon: "parcours", conversation: "pratique", phrases: "pratique" }[top] ?? top;
  $$("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === navKey));
  scrollTo(0, 0);
  refreshChrome();
}
const afterRender = [];
const after = (f) => afterRender.push(f);
addEventListener("hashchange", route);

// ───────────────────────── Aides de rendu ─────────────────────────
const ring = (v, max, label) => {
  const p = Math.min(1, v / Math.max(1, max)), C = 2 * Math.PI * 42;
  return `<div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" class="r-bg"/><circle cx="50" cy="50" r="42" class="r-fg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}"/></svg><div><b>${v}</b><small>/ ${max} ${label}</small></div></div>`;
};
const levelLessons = (lv) => LESSONS.filter((l) => l.level === lv);
const levelPct = (lv) => { const ls = levelLessons(lv); return ls.length ? Math.round((ls.filter((l) => S.done[l.id]).length / ls.length) * 100) : 0; };
const nextLesson = () => LESSONS.find((l) => !S.done[l.id]);
const currentLevel = () => (nextLesson() || LESSONS[LESSONS.length - 1]).level;
const sayBtn = (ru, cls = "") => `<button class="say ${cls}" data-say="${esc(plain(ru))}" aria-label="Écouter">${ICON_SOUND}</button>`;
const tl = (ru) => (S.settings.translit ? `<span class="tl">${tr(ru)}</span>` : "");
const ornament = `<div class="orn" aria-hidden="true"><svg viewBox="0 0 200 16"><path d="M0 8h80M120 8h80" stroke="currentColor" stroke-width="1"/><path d="M100 1c4 4 4 10 0 14-4-4-4-10 0-14zM88 8c4-3 8-3 12 0-4 3-8 3-12 0zM112 8c-4-3-8-3-12 0 4 3 8 3 12 0z" fill="currentColor"/></svg></div>`;

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? ["Доброй ночи", "Bonne nuit"] : h < 12 ? ["Доброе утро", "Bonjour"] : h < 18 ? ["Добрый день", "Bonjour"] : ["Добрый вечер", "Bonsoir"];
}

// ───────────────────────── Accueil ─────────────────────────
function home() {
  const [g, gfr] = greeting();
  const nl = nextLesson();
  const due = dueCards().length;
  const words = Object.keys(S.srs).length;
  const seed = [...today()].reduce((a, c) => a + c.charCodeAt(0) * 31, 0);
  const wod = ALL_VOCAB[seed % ALL_VOCAB.length];
  const conv = CONVERSATIONS[seed % CONVERSATIONS.length];
  const lv = LEVELS.find((l) => l.id === currentLevel());
  return `
  <section class="hero card">
    <div class="hero-txt">
      <p class="eyebrow">${esc(gfr)}${S.name ? ", " + esc(S.name) : ""}</p>
      <h1 class="ru display" data-say="${g}">${g}${S.name ? "," : "!"}</h1>
      <p class="muted">Niveau en cours : <b class="gold-t">${lv.id} · ${esc(lv.name)}</b> <span class="ru">${lv.ru}</span></p>
      <div class="hero-stats"><span>${icon("flame")} <b>${liveStreak()}</b> jour${liveStreak() > 1 ? "s" : ""} de suite</span><span>✦ <b>${S.xp}</b> XP</span><span>❖ <b>${words}</b> mots</span></div>
    </div>
    ${ring(todayXP(), goal(), "XP")}
  </section>

  ${nl ? `<a class="card next" href="#/lecon/${nl.id}">
    <div><p class="eyebrow">Continuer · ${nl.level}</p><h2>${esc(nl.title)}</h2><p class="ru big-ru">${acc(nl.ru)}</p><p class="muted">${esc(nl.goal)}</p></div>
    <span class="btn gold">Commencer →</span></a>` :
    `<div class="card next"><div><p class="eyebrow">Parcours terminé</p><h2>Tu as fini toutes les leçons !</h2><p class="muted">Place à l’immersion : voir le programme C1–C2.</p></div><a class="btn gold" href="#/programme">Programme</a></div>`}

  <div class="grid4">
    <a class="tile" href="#/revision">${icon("cards")}<b>${due}</b><span>carte${due > 1 ? "s" : ""} à réviser</span></a>
    <a class="tile" href="#/conversation/${conv.id}">${icon("chat")}<b>Parler</b><span>${esc(conv.title)}</span></a>
    <a class="tile" href="#/alphabet">${icon("abc")}<b>Азбука</b><span>l’alphabet</span></a>
    <a class="tile" href="#/grammaire">${icon("book")}<b>Guides</b><span>${GRAMMAR.length} tutos</span></a>
  </div>

  <section class="card wod">
    <p class="eyebrow">Le mot du jour</p>
    <div class="wod-row"><div><p class="ru display-sm">${acc(wod[0])}</p>${tl(wod[0])}<p>${esc(wod[1])}</p></div>${sayBtn(wod[0], "lg")}</div>
  </section>

  ${ornament}
  <section>
    <h3 class="sec-t">Ton chemin vers le bilinguisme</h3>
    <div class="lvl-strip">${LEVELS.filter((l) => l.id !== "C2").map((l) => `<a href="#/parcours" class="lvl-chip ${l.id === lv.id ? "cur" : ""}"><b>${l.id}</b><i style="--p:${levelPct(l.id)}%"></i><small>${levelPct(l.id)} %</small></a>`).join("")}
      <a href="#/programme" class="lvl-chip"><b>C2</b><i style="--p:0%"></i><small>immersion</small></a></div>
  </section>`;
}

// ───────────────────────── Parcours ─────────────────────────
function parcours() {
  const cur = currentLevel();
  return `<header class="page-h"><p class="eyebrow">Parcours</p><h1>Du premier mot au bilinguisme</h1><p class="muted">${LESSONS.length} leçons structurées de A0 à C1, puis l’immersion. Suis l’ordre conseillé, mais rien n’est verrouillé.</p></header>
  ${LEVELS.map((lv) => {
    const ls = levelLessons(lv.id);
    return `<details class="level card" ${lv.id === cur ? "open" : ""}>
      <summary><div class="lv-badge">${lv.id}</div><div class="lv-t"><h2>${esc(lv.name)} <span class="ru">${lv.ru}</span></h2><p class="muted">${esc(lv.span)} · ${esc(lv.goal)}</p></div>
      <div class="lv-p"><i style="width:${levelPct(lv.id)}%"></i></div></summary>
      ${ls.length ? `<ol class="lessons">${ls.map((l, i) => {
        const d = S.done[l.id];
        return `<li><a href="#/lecon/${l.id}" class="${d ? "done" : ""} ${nextLesson() === l ? "nextl" : ""}">
          <span class="num">${d ? "✓" : i + 1}</span><span class="lt"><b>${esc(l.title)}</b><span class="ru">${acc(l.ru)}</span><small>${esc(l.goal)}</small></span>
          ${d ? `<span class="stars">${d.score >= 90 ? "★★★" : d.score >= 70 ? "★★☆" : "★☆☆"}</span>` : ""}</a></li>`;
      }).join("")}</ol>` : `<p class="pad">Ce niveau se construit dans la vraie vie : conversation quotidienne, lecture, travail en russe. Voir le <a href="#/programme">programme</a> pour la méthode.</p>`}
    </details>`;
  }).join("")}`;
}

// ───────────────────────── Leçon ─────────────────────────
function lesson(id) {
  const L = byId[id];
  if (!L) return `<p>Leçon introuvable. <a href="#/parcours">Retour</a></p>`;
  const i = LESSONS.indexOf(L), prev = LESSONS[i - 1], next = LESSONS[i + 1];
  const d = S.done[L.id];
  after(() => {
    $("#play-dlg")?.addEventListener("click", async (e) => {
      const b = e.currentTarget; if (b.dataset.on) { window.speechSynthesis.cancel(); delete b.dataset.on; return; }
      b.dataset.on = 1; b.textContent = "■ Arrêter";
      for (const row of $$(".dlg .bub")) { if (!b.dataset.on) break; row.classList.add("speaking"); await say(row.dataset.say); row.classList.remove("speaking"); await new Promise((r) => setTimeout(r, 350)); }
      delete b.dataset.on; b.textContent = "▶ Écouter le dialogue";
    });
    $("#fr-toggle")?.addEventListener("change", (e) => $(".dlg").classList.toggle("hide-fr", !e.target.checked));
    $("#start")?.addEventListener("click", () => startLesson(L));
    $("#add-vocab")?.addEventListener("click", () => { const n = addCards(L.vocab); toast(n ? `${n} mots ajoutés à tes révisions` : "Déjà dans tes révisions"); refreshChrome(); });
  });
  return `<nav class="crumbs"><a href="#/parcours">Parcours</a> › ${L.level}</nav>
  <header class="lesson-h card">
    <p class="eyebrow">${L.level} · Leçon ${levelLessons(L.level).indexOf(L) + 1}</p>
    <h1>${esc(L.title)}</h1>
    <p class="ru display" data-say="${esc(plain(L.ru))}">${acc(L.ru)}</p>
    <p class="goal">🎯 ${esc(L.goal)}</p>
    ${d ? `<p class="chip ok">Terminée · ${d.score} %</p>` : ""}
  </header>

  <section class="theory">${L.theory.map((t) => `<article class="card th"><h3>${esc(t.h)}</h3><div>${t.p}</div></article>`).join("")}</section>

  ${ornament}
  <section class="card">
    <div class="sec-row"><h3>Vocabulaire</h3><button class="btn ghost sm" id="add-vocab">+ Ajouter aux révisions</button></div>
    <ul class="vocab">${L.vocab.map(([ru, fr]) => `<li data-say="${esc(plain(ru))}"><div><span class="ru vru">${acc(ru)}</span>${tl(ru)}</div><span class="vfr">${esc(fr)}</span>${sayBtn(ru)}</li>`).join("")}</ul>
  </section>

  <section class="card">
    <div class="sec-row"><h3>Dialogue</h3><div class="row"><label class="switch"><input type="checkbox" id="fr-toggle" checked><span>Traduction</span></label><button class="btn ghost sm" id="play-dlg">▶ Écouter le dialogue</button></div></div>
    <div class="dlg">${(() => { const sp = [...new Set(L.dialogue.map((x) => x[0]))]; return L.dialogue.map(([who, ru, fr]) => `<div class="bub ${sp.indexOf(who) % 2 ? "r" : "l"}" data-say="${esc(ru)}"><small class="who">${esc(who)}</small><p class="ru">${esc(ru)}</p>${tl(ru)}<p class="fr">${esc(fr)}</p></div>`).join(""); })()}</div>
  </section>

  <div class="cta-bar"><button class="btn gold wide" id="start">${d ? "Refaire les exercices" : "Commencer les exercices"} →</button></div>
  <nav class="pager">${prev ? `<a href="#/lecon/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#/lecon/${next.id}">${esc(next.title)} →</a>` : ""}</nav>`;
}

function startLesson(L) {
  runQuiz(buildLessonQuiz(L, ALL_VOCAB), {
    title: L.title,
    onDone: ({ score, correct }) => {
      const prevBest = S.done[L.id]?.score || 0;
      S.done[L.id] = { score: Math.max(score, prevBest), date: today() };
      const added = addCards(L.vocab);
      addXP(10 + correct * 2);
      toast(`+${10 + correct * 2} XP${added ? ` · ${added} mots ajoutés aux révisions` : ""}`);
      route();
    }
  });
}

// ───────────────────────── Révision (SRS) ─────────────────────────
function review() {
  const due = shuffle(dueCards());
  const total = Object.keys(S.srs).length;
  if (!total) return `<header class="page-h"><p class="eyebrow">Révisions</p><h1>Tes cartes</h1></header>
    <div class="card empty"><p>Aucune carte pour l’instant. Les mots de chaque leçon terminée arrivent ici automatiquement, et tu peux ajouter des phrases depuis le guide de conversation.</p><a class="btn gold" href="#/parcours">Faire une leçon</a></div>`;
  if (!due.length) {
    const nextDue = Object.values(S.srs).map((c) => c.due).sort()[0];
    return `<header class="page-h"><p class="eyebrow">Révisions</p><h1>Tout est à jour</h1></header>
    <div class="card empty"><p class="ru display-sm">Молодец!</p><p>Tu as révisé toutes tes cartes. Prochaine révision : <b>${new Date(nextDue + "T12:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</b>.</p>
    <p class="muted">${total} cartes au total. La répétition espacée te les remontre juste avant que tu ne les oublies.</p><a class="btn gold" href="#/parcours">Continuer le parcours</a></div>`;
  }
  let i = 0, done = 0;
  after(() => {
    const box = $("#fc");
    const draw = () => {
      if (i >= due.length) {
        addXP(done);
        box.innerHTML = `<div class="card empty"><p class="ru display-sm">Готово!</p><p>${done} cartes révisées. +${done} XP</p><a class="btn gold" href="#/">Accueil</a></div>`;
        sparks(); refreshChrome(); return;
      }
      const c = due[i];
      const rev = S.srs[c.id].rep >= 2 && Math.random() < 0.5; // sens inverse une fois la carte connue
      box.innerHTML = `<p class="muted center">${i + 1} / ${due.length}</p>
        <div class="flash card" tabindex="0">
          <div class="face">${rev ? `<p class="fc-fr">${esc(c.fr)}</p><p class="muted">Dis-le en russe</p>` : `<p class="ru display">${acc(c.ru)}</p>`}</div>
          <div class="back" hidden><p class="ru display">${acc(c.ru)}</p>${tl(c.ru)}<p class="fc-fr">${esc(c.fr)}</p></div>
        </div>
        <div class="fc-actions"><button class="btn gold wide" data-flip>Retourner</button></div>`;
      if (!rev) say(c.ru);
      stressify(box);
      const flip = () => {
        $(".back", box).hidden = false; $(".face", box).hidden = true; say(c.ru);
        $(".fc-actions", box).innerHTML = [["À revoir", "red"], ["Difficile", "ghost"], ["Bien", "ghost"], ["Facile", "gold"]].map(([t, k], q) => `<button class="btn ${k}" data-q="${q}"><kbd>${q + 1}</kbd> ${t}</button>`).join("");
        $$("[data-q]", box).forEach((b) => (b.onclick = () => {
          const q = +b.dataset.q; grade(c.id, q); done++;
          if (q === 0) due.push(c); // revient en fin de séance
          i++; draw();
        }));
      };
      $("[data-flip]", box).onclick = flip; $(".flash", box).onclick = flip;
    };
    const onKey = (e) => {
      if (!document.body.contains(box)) return document.removeEventListener("keydown", onKey);
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); $("[data-flip]", box)?.click(); }
      if (/^[1-4]$/.test(e.key)) $(`[data-q="${+e.key - 1}"]`, box)?.click();
    };
    document.addEventListener("keydown", onKey);
    draw();
  });
  return `<header class="page-h"><p class="eyebrow">Révisions</p><h1>${due.length} carte${due.length > 1 ? "s" : ""} pour aujourd’hui</h1><p class="muted">Espace / Entrée pour retourner, 1-4 pour noter.</p></header><div id="fc"></div>`;
}

// ───────────────────────── Pratique ─────────────────────────
const practiceTabs = (on) => `<div class="tabs-h"><a href="#/pratique" class="${on === "c" ? "on" : ""}">Conversations</a><a href="#/phrases" class="${on === "p" ? "on" : ""}">Guide de phrases</a></div>`;
const CTX = { proches: ["Proches", "♥"], pro: ["Travail", "◆"], quotidien: ["Quotidien", "☀"] };

function practice() {
  return `<header class="page-h"><p class="eyebrow">Pratiquer</p><h1>Parler pour de vrai</h1><p class="muted">Des situations réelles à embranchements : famille, travail, vie quotidienne. Choisis la bonne réplique, écoute, répète.</p></header>
  ${practiceTabs("c")}
  <div class="conv-grid">${CONVERSATIONS.map((c) => `<a class="card conv ${c.ctx}" href="#/conversation/${c.id}">
    <span class="chip">${CTX[c.ctx][1]} ${CTX[c.ctx][0]} · ${c.level}</span><h3>${esc(c.title)}</h3><p class="ru">${esc(c.ru)}</p><p class="muted">${esc(c.intro)}</p>${S.convs[c.id] ? '<span class="chip ok">✓ faite</span>' : ""}</a>`).join("")}</div>
  <div class="card tip"><h3>Le vrai secret du bilinguisme</h3><p>Ces scénarios t’entraînent, mais rien ne remplace un humain. Dès l’A1, trouve un partenaire d’échange linguistique (tandem) ou un professeur en visio, 30 minutes par semaine. À partir de l’A2, deux fois par semaine.</p></div>`;
}

function conversation(id) {
  const C = CONVERSATIONS.find((c) => c.id === id);
  if (!C) return `<p>Introuvable.</p>`;
  let good = 0, mistakes = 0;
  after(() => {
    const log = $("#chat"), ch = $("#choices");
    const showFr = () => $("#cfr").checked;
    const npc = async (key) => {
      const n = C.nodes[key];
      const b = document.createElement("div");
      b.className = "bub l typing"; b.innerHTML = `<small class="who">${esc(C.who)}</small><p class="dots"><i></i><i></i><i></i></p>`;
      log.appendChild(b); b.scrollIntoView({ behavior: "smooth", block: "end" });
      await new Promise((r) => setTimeout(r, 700));
      b.classList.remove("typing"); b.dataset.say = n.npc[0];
      b.innerHTML = `<small class="who">${esc(C.who)}</small><p class="ru">${esc(n.npc[0])}</p>${tl(n.npc[0])}<p class="fr">${esc(n.npc[1])}</p>`;
      say(n.npc[0]);
      if (n.end) {
        const xp = 5 + good * 2; S.convs[C.id] = today(); addXP(xp);
        ch.innerHTML = `<div class="card empty"><p class="ru display-sm">Отлично!</p><p>Conversation terminée · ${mistakes ? `${mistakes} maladresse${mistakes > 1 ? "s" : ""} corrigée${mistakes > 1 ? "s" : ""}` : "sans faute"} · +${xp} XP</p>
          <div class="row center"><a class="btn ghost" href="#/pratique">Autres scénarios</a><button class="btn gold" data-restart>Recommencer</button></div></div>`;
        $("[data-restart]", ch).addEventListener("click", route);
        sparks(); return;
      }
      ch.innerHTML = n.choices.map((c, k) => `<button class="choice" data-c="${k}"><span class="ru">${esc(c.ru)}</span><small class="fr">${esc(c.fr)}</small></button>`).join("");
      let tried = false;
      $$(".choice", ch).forEach((btn) => btn.onclick = () => {
        const c = n.choices[+btn.dataset.c];
        if (c.ok === false) {
          mistakes++; tried = true; btn.classList.add("bad"); btn.disabled = true;
          toast("Pas idéal…");
          const tip = document.createElement("p"); tip.className = "ctip"; tip.textContent = c.tip; btn.after(tip);
          return;
        }
        if (!tried) good++;
        const me = document.createElement("div"); me.className = "bub r"; me.dataset.say = c.ru;
        me.innerHTML = `<small class="who">Toi</small><p class="ru">${esc(c.ru)}</p><p class="fr">${esc(c.fr)}</p>`;
        log.appendChild(me); say(c.ru); ch.innerHTML = "";
        setTimeout(() => npc(c.next), 900);
      });
      stressify(ch);
    };
    $("#cfr").onchange = () => $(".conv-wrap").classList.toggle("hide-fr", !showFr());
    npc("start");
  });
  return `<nav class="crumbs"><a href="#/pratique">Pratiquer</a> › ${esc(C.title)}</nav>
  <header class="page-h"><span class="chip">${CTX[C.ctx][1]} ${CTX[C.ctx][0]} · ${C.level}</span><h1>${esc(C.title)} <span class="ru">${esc(C.ru)}</span></h1><p class="muted">${esc(C.intro)}</p>
  <label class="switch"><input type="checkbox" id="cfr" checked><span>Afficher la traduction</span></label></header>
  <div class="conv-wrap card"><div id="chat" class="dlg"></div><div id="choices" class="choices"></div></div>`;
}

function phrases() {
  after(() => {
    const draw = () => {
      const q = $("#pq").value.toLowerCase().trim();
      const cat = $(".pcat.on")?.dataset.cat || PHRASES[0].id;
      const list = q ? PHRASES.flatMap((c) => c.items) : PHRASES.find((c) => c.id === cat).items;
      const items = list.filter(([ru, fr]) => !q || ru.toLowerCase().includes(q) || fr.toLowerCase().includes(q));
      $("#plist").innerHTML = items.map(([ru, fr, note]) => `<li data-say="${esc(ru)}"><div><span class="ru vru">${esc(ru)}</span>${tl(ru)}<span class="vfr">${esc(fr)}</span>${note ? `<small class="note">${esc(note)}</small>` : ""}</div>
        <div class="row">${sayBtn(ru)}<button class="say add ${hasCard(ru) ? "in" : ""}" data-add="${esc(ru)}" data-fr="${esc(fr)}" aria-label="Ajouter aux révisions">${hasCard(ru) ? "✓" : "+"}</button></div></li>`).join("") || `<li class="muted">Aucun résultat.</li>`;
    };
    $("#pcats").onclick = (e) => { const b = e.target.closest(".pcat"); if (!b) return; $$(".pcat").forEach((x) => x.classList.toggle("on", x === b)); $("#pq").value = ""; draw(); };
    $("#pq").oninput = draw;
    $("#plist").onclick = (e) => { const b = e.target.closest("[data-add]"); if (!b) return; addCards([[b.dataset.add, b.dataset.fr]]); b.textContent = "✓"; b.classList.add("in"); toast("Ajouté aux révisions"); refreshChrome(); };
    draw();
  });
  return `<header class="page-h"><p class="eyebrow">Pratiquer</p><h1>Guide de phrases</h1><p class="muted">Les phrases qui servent vraiment, à écouter et à ajouter à tes révisions.</p></header>
  ${practiceTabs("p")}
  <input id="pq" class="search" placeholder="Rechercher en français ou en russe…">
  <div id="pcats" class="pcats">${PHRASES.map((c, i) => `<button class="pcat ${i ? "" : "on"}" data-cat="${c.id}">${c.icon} ${esc(c.title)}</button>`).join("")}</div>
  <ul id="plist" class="vocab card"></ul>`;
}

// ───────────────────────── Guides de grammaire ─────────────────────────
function grammarList() {
  return `<header class="page-h"><p class="eyebrow">Guides</p><h1>La grammaire, expliquée simplement</h1><p class="muted">Des tutos clairs avec tableaux et exemples à écouter. Les leçons y renvoient ; reviens-y autant que nécessaire.</p></header>
  <div class="gram-grid">${GRAMMAR.map((g, i) => `<a class="card gcard" href="#/grammaire/${g.id}"><span class="gnum">${String(i + 1).padStart(2, "0")}</span><span class="chip">${g.level}</span><h3>${esc(g.title)}</h3><p class="ru">${esc(g.ru)}</p></a>`).join("")}</div>`;
}
function grammarArticle(id) {
  const g = GRAMMAR.find((x) => x.id === id);
  if (!g) return `<p>Introuvable.</p>`;
  const i = GRAMMAR.indexOf(g), n = GRAMMAR[i + 1], p = GRAMMAR[i - 1];
  return `<nav class="crumbs"><a href="#/grammaire">Guides</a> › ${g.level}</nav>
  <article class="card article"><p class="eyebrow">${g.level}</p><h1>${esc(g.title)}</h1><p class="ru display-sm">${esc(g.ru)}</p>${ornament}${g.html}</article>
  <nav class="pager">${p ? `<a href="#/grammaire/${p.id}">← ${esc(p.title)}</a>` : "<span></span>"}${n ? `<a href="#/grammaire/${n.id}">${esc(n.title)} →</a>` : ""}</nav>`;
}

// ───────────────────────── Alphabet ─────────────────────────
function alphabet() {
  after(() => {
    const sheet = $("#lsheet");
    $("#letters").onclick = (e) => {
      const b = e.target.closest("[data-l]"); if (!b) return;
      const [U, l, snd, expl, ex, exfr] = ALPHABET[+b.dataset.l];
      sheet.innerHTML = `<button class="icon-btn close" data-x>✕</button>
        <div class="lbig"><span class="ru">${U}${l}</span><span class="ru cursive">${U}${l}</span></div>
        <p class="lsnd">Son : <b>${esc(snd)}</b></p><p>${esc(expl)}</p>
        <div class="lex" data-say="${esc(plain(ex))}"><span class="ru display-sm">${acc(ex)}</span>${tl(ex)}<span>${esc(exfr)}</span>${sayBtn(ex)}</div>
        <p class="muted small">La seconde forme est l’italique, proche de l’écriture manuscrite russe : certaines lettres y changent beaucoup (т ressemble à m, д à g).</p>`;
      stressify(sheet);
      sheet.showModal(); say(ex);
      $("[data-x]", sheet).onclick = () => sheet.close();
    };
    sheet.onclick = (e) => { if (e.target === sheet) sheet.close(); };
    $("#aquiz").onclick = alphaQuiz;
  });
  return `<header class="page-h"><p class="eyebrow">A0 · Азбука</p><h1>L’alphabet cyrillique</h1><p class="muted">33 lettres, réparties en 4 familles. Touche une lettre pour l’entendre dans un mot.</p>
  <div class="row"><button class="btn gold" id="aquiz">Quiz de l’alphabet</button><a class="btn ghost" href="#/lecon/a0-1">Leçons A0 →</a></div></header>
  <div id="letters">${Object.entries(GROUPS).map(([k, [t, d]]) => `<section class="card"><h3>${t}</h3><p class="muted">${d}</p>
    <div class="lgrid">${ALPHABET.map((a, i) => a[6] === k ? `<button class="ltile ${k}" data-l="${i}"><span class="ru">${a[0]}${a[1]}</span><small>${esc(a[2])}</small></button>` : "").join("")}</div></section>`).join("")}</div>
  <dialog id="lsheet" class="sheet"></dialog>`;
}
function alphaQuiz() {
  const items = shuffle(ALPHABET).slice(0, 12).map((a, k) => {
    if (k % 3 === 0) return { type: "choice", prompt: "Quel son fait cette lettre ?", big: a[0] + a[1], options: shuffle([a[2], ...shuffle(ALPHABET.filter((x) => x[2] !== a[2])).slice(0, 3).map((x) => x[2])]), answer: a[2] };
    if (k % 3 === 1) return { type: "choice", prompt: `Quelle lettre se prononce « ${a[2]} » ?`, options: shuffle([a[1], ...shuffle(ALPHABET.filter((x) => x[1] !== a[1])).slice(0, 3).map((x) => x[1])]), answer: a[1], ruOpts: true };
    return { type: "choice", prompt: "Écoute : quel mot entends-tu ?", audio: a[4], options: shuffle([a[4], ...shuffle(ALPHABET.filter((x) => x[4] !== a[4])).slice(0, 3).map((x) => x[4])]), answer: a[4], ruOpts: true };
  });
  runQuiz(items, { title: "Quiz de l’alphabet", onDone: ({ correct }) => { addXP(correct); toast(`+${correct} XP`); } });
}

// ───────────────────────── Programme ─────────────────────────
function programme() {
  const m = S.settings.minutes;
  const start = S.settings.start || today();
  const dateFor = (h) => new Date(addDays(start, Math.ceil((h * 60) / m)) + "T12:00");
  const fmt = (d) => d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  const cur = currentLevel();
  after(() => {
    $("#pmin").onchange = (e) => { S.settings.minutes = +e.target.value; save(); route(); };
    $("#pstart").onchange = (e) => { S.settings.start = e.target.value || today(); save(); route(); };
  });
  return `<header class="page-h"><p class="eyebrow">Programme</p><h1>Ton plan sur plusieurs années</h1><p class="muted">${esc(HONEST_NOTE)}</p></header>
  <section class="card plan-form">
    <label>Temps par jour<select id="pmin">${[15, 30, 45, 60, 90, 120].map((v) => `<option value="${v}" ${v === m ? "selected" : ""}>${v} min</option>`).join("")}</select></label>
    <label>Début<input type="date" id="pstart" value="${start}"></label>
    <p class="muted">À ce rythme : <b class="gold-t">B2 vers ${fmt(dateFor(950))}</b>, <b class="gold-t">C1 vers ${fmt(dateFor(1500))}</b>. Le temps compte tout : appli, conversations, séries, lectures.</p>
  </section>
  <ol class="timeline">${LEVELS.map((lv) => `<li class="${lv.id === cur ? "cur" : ""} ${levelPct(lv.id) === 100 ? "done" : ""}">
    <div class="tl-dot">${lv.id}</div>
    <div class="card tl-card">
      <div class="sec-row"><h3>${esc(lv.name)} <span class="ru">${lv.ru}</span></h3><span class="chip">${esc(lv.span)} · objectif ${fmt(dateFor(lv.hours))}</span></div>
      <p>${esc(lv.goal)}</p>
      <div class="cando">${Object.entries(lv.cando).map(([k, arr]) => `<div><b>${CTX[k][1]} ${CTX[k][0]}</b><ul>${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>
      <details><summary>Méthode et ressources</summary><div class="cando"><div><b>Routine</b><ul>${lv.routine.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div><div><b>À regarder, écouter, lire</b><ul>${lv.media.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div></details>
      ${levelLessons(lv.id).length ? `<div class="lv-p"><i style="width:${levelPct(lv.id)}%"></i></div>` : ""}
    </div></li>`).join("")}</ol>
  <section class="card"><h3>Une semaine type (niveau A2–B1)</h3>
  <table class="gram week"><tr><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th><th>Dim</th></tr>
  <tr><td>Leçon</td><td>Révisions + série</td><td>Conversation</td><td>Leçon</td><td>Révisions + guide</td><td>Conversation</td><td>Film ou lecture</td></tr></table></section>`;
}

// ───────────────────────── Profil ─────────────────────────
function profile() {
  const days = []; for (let k = 83; k >= 0; k--) days.push(addDays(today(), -k));
  const maxD = Math.max(1, ...days.map((d) => S.days[d] || 0));
  const st = S.settings;
  after(() => {
    $("#pname").onchange = (e) => { S.name = e.target.value.trim(); save(); };
    $("#ptl").onchange = (e) => { st.translit = e.target.checked; save(); };
    $("#pspk").onchange = (e) => { st.speak = e.target.checked; save(); };
    $("#pintro").onchange = (e) => { st.intro = e.target.checked; save(); };
    $("#prate").oninput = (e) => { st.rate = window.__rate = +e.target.value; $("#prv").textContent = st.rate.toFixed(2); save(); };
    $("#ptheme").onchange = (e) => { st.theme = e.target.value; save(); applyTheme(); };
    $("#pvoice")?.addEventListener("change", (e) => { st.voice = e.target.value; setVoice(st.voice); save(); say("Привет! Как дела?"); });
    $("#ptest").onclick = () => say("Здравствуйте! Меня зовут Жар-птица.");
    $("#preplay").onclick = () => playIntro(true);
    $("#pexp").onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([exportData()], { type: "application/json" })); a.download = `jar-ptitsa-${today()}.json`; a.click(); };
    $("#pimp").onchange = async (e) => {
      const f = e.target.files[0]; e.target.value = "";
      if (!f) return;
      if (f.size > MAX_IMPORT_BYTES) return toast("Fichier trop gros (5 Mo max)");
      try { importData(await f.text()); window.__rate = S.settings.rate; setVoice(S.settings.voice); toast("Progression importée"); applyTheme(); route(); }
      catch (err) { toast("Fichier invalide"); }
    };
    $("#preset").onclick = () => { if (confirm("Effacer toute ta progression ? Cette action est définitive.")) { resetAll(); applyTheme(); route(); toast("Progression effacée"); } };
  });
  const vs = ruVoices();
  return `<header class="page-h"><p class="eyebrow">Profil</p><h1>${S.name ? esc(S.name) : "Ton profil"}</h1></header>
  <div class="grid4">
    <div class="tile">${icon("flame")}<b>${liveStreak()}</b><span>série (record ${S.best})</span></div>
    <div class="tile">✦<b>${S.xp}</b><span>XP au total</span></div>
    <div class="tile">✓<b>${Object.keys(S.done).length}</b><span>leçons sur ${LESSONS.length}</span></div>
    <div class="tile">❖<b>${Object.keys(S.srs).length}</b><span>cartes</span></div>
  </div>
  <section class="card"><h3>12 dernières semaines</h3><div class="heat">${days.map((d) => `<i title="${d} : ${S.days[d] || 0} XP" style="--v:${(S.days[d] || 0) / maxD}"></i>`).join("")}</div></section>
  <section class="card settings">
    <h3>Réglages</h3>
    <label>Prénom<input id="pname" value="${esc(S.name)}" placeholder="Comment t’appeler ?"></label>
    <label>Thème<select id="ptheme">${[["auto", "Automatique"], ["dark", "Nuit d’hiver (sombre)"], ["light", "Parchemin (clair)"]].map(([v, t]) => `<option value="${v}" ${st.theme === v ? "selected" : ""}>${t}</option>`).join("")}</select></label>
    <label class="switch"><input type="checkbox" id="ptl" ${st.translit ? "checked" : ""}><span>Afficher la prononciation en lettres latines</span></label>
    <label class="switch"><input type="checkbox" id="pspk" ${st.speak ? "checked" : ""}><span>Exercices de prononciation au micro</span></label>
    <label class="switch"><input type="checkbox" id="pintro" ${st.intro ? "checked" : ""}><span>Animation d’ouverture</span></label>
    <label>Vitesse de la voix : <b id="prv">${st.rate.toFixed(2)}</b><input type="range" id="prate" min="0.5" max="1.2" step="0.05" value="${st.rate}"></label>
    ${vs.length ? `<label>Voix russe<select id="pvoice">${vs.map((v) => `<option ${v.name === st.voice ? "selected" : ""}>${esc(v.name)}</option>`).join("")}</select></label>` :
      `<p class="warn">${canSpeak() ? "Aucune voix russe détectée. Sous Windows : Paramètres › Heure et langue › Voix › ajouter « Russe ». Chrome et Edge en proposent aussi en ligne." : "Ton navigateur ne gère pas la synthèse vocale."}</p>`}
    <div class="row"><button class="btn ghost" id="ptest">Tester la voix</button><button class="btn ghost" id="preplay">Revoir l’intro</button></div>
  </section>
  <section class="card settings"><h3>Mes données</h3><p class="muted">Ta progression reste sur cet appareil. Exporte-la pour la sauvegarder ou la transférer.</p>
    <div class="row"><button class="btn ghost" id="pexp">Exporter</button><label class="btn ghost">Importer<input type="file" id="pimp" accept="application/json" hidden></label><button class="btn red" id="preset">Tout effacer</button></div></section>
  <p class="muted center small">Жар-птица · l’Oiseau de feu · fait avec ♥ pour apprendre le russe</p>`;
}

// ───────────────────────── Intro animée ─────────────────────────
function playIntro(force = false) {
  const el = $("#intro");
  let seen = false;
  try { seen = sessionStorage.getItem("jp-intro"); } catch (e) { /* ignore */ }
  if (!force && (!S.settings.intro || seen || matchMedia("(prefers-reduced-motion: reduce)").matches)) { el.hidden = true; return; }
  try { sessionStorage.setItem("jp-intro", "1"); } catch (e) { /* ignore */ }
  el.hidden = false;
  el.classList.remove("out", "go"); void el.offsetWidth; el.classList.add("go");
  $(".intro-logo", el).innerHTML = logoSVG("in");
  $(".intro-title", el).innerHTML = [..."Жар-птица"].map((c, i) => `<span style="animation-delay:${2.1 + i * 0.07}s">${c}</span>`).join("");
  // étincelles qui montent
  const cv = $("canvas", el), ctx = cv.getContext("2d");
  const fit = () => { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; };
  fit();
  const P = Array.from({ length: 90 }, () => ({ x: Math.random(), y: 1 + Math.random() * 0.6, v: 0.0015 + Math.random() * 0.004, r: 0.6 + Math.random() * 2.2, w: Math.random() * 6.28 }));
  let raf, t0 = performance.now();
  const tick = (t) => {
    const k = Math.min(1, (t - t0) / 1500);
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const p of P) {
      p.y -= p.v; p.w += 0.03; if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
      const x = (p.x + Math.sin(p.w) * 0.01) * cv.width, y = p.y * cv.height;
      ctx.beginPath(); ctx.arc(x, y, p.r * devicePixelRatio, 0, 7);
      ctx.fillStyle = `rgba(${240 + Math.random() * 15},${150 + p.r * 30},60,${0.55 * k * (1 - Math.abs(p.y - 0.5))})`; ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  const end = () => { if (el.classList.contains("out")) return; el.classList.add("out"); setTimeout(() => { cancelAnimationFrame(raf); el.hidden = true; }, 900); };
  el.onclick = end;
  addEventListener("keydown", end, { once: true });
  setTimeout(end, 5200);
}

// ───────────────────────── Démarrage ─────────────────────────
applyTheme();
initVoices(S.settings.voice);
shell();
route();
playIntro();
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
