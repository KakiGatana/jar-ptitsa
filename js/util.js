export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Accent tonique : l’apostrophe ASCII après une voyelle devient une voyelle marquée (accent dessiné en CSS,
// plus fiable que l’accent combinant dont le placement dépend de la police).
const ST = /([аеёиоуыэюяАЕЁИОУЫЭЮЯ])'/g;
export const acc = (s) => esc(s).replace(ST, (m, v) => `<span class="st${v === v.toUpperCase() ? " up" : ""}">${v}</span>`).replace(/'/g, "");
export const plain = (s) => String(s ?? "").replace(/['́]/g, "");

export function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
export const pick = (a) => a[Math.floor(Math.random() * a.length)];

// Comparaison tolérante (majuscules, accents, ё/е, ponctuation).
export function norm(s) {
  return plain(s).toLowerCase().replace(/ё/g, "е").replace(/[.,!?;:«»"()—–\-…]/g, " ").replace(/\s+/g, " ").trim();
}

export function similarity(a, b) {
  a = norm(a); b = norm(b);
  if (!a.length && !b.length) return 1;
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return 1 - d[m][n] / Math.max(m, n);
}

// ── Translittération phonétique pour francophones ──
// Applique la réduction des voyelles quand l’accent est connu, met la syllabe forte en gras.
const CONS = { б:"b",в:"v",г:"g",д:"d",ж:"j",з:"z",й:"ï",к:"k",л:"l",м:"m",н:"n",п:"p",р:"r",с:"s",т:"t",ф:"f",х:"kh",ц:"ts",ч:"tch",ш:"ch",щ:"chtch",ъ:"",ь:"ʼ" };
const DEVOICE = { b:"p", v:"f", g:"k", d:"t", j:"ch", z:"s" };
const VOW = "аеёиоуыэюя";

function trWord(w) {
  const low = w.toLowerCase();
  let s = low.replace(/^что/, "што").replace(/^сего('?)дня/, "сиво$1дня").replace(/^здра('?)вств/, "здра$1ств");
  const hasStress = s.includes("'") || [...s].filter((c) => VOW.includes(c)).length <= 1;
  const known = s.includes("'");
  const letters = [...s];
  const out = [];
  for (let i = 0; i < letters.length; i++) {
    const c = letters[i];
    if (c === "'") continue;
    const next = letters[i + 1];
    const stressed = next === "'" || c === "ё" || (!known && hasStress && VOW.includes(c));
    const prev = (() => { for (let k = i - 1; k >= 0; k--) if (letters[k] !== "'") return letters[k]; return null; })();
    const restIsEnd = letters.slice(i + 1).every((x) => x === "'" );
    const afterCons = prev && !VOW.includes(prev) && prev !== "ь" && prev !== "ъ";
    const reduce = known && !stressed;
    let t;
    if (VOW.includes(c)) {
      switch (c) {
        case "а": t = "a"; break;
        case "о": t = reduce ? "a" : "o"; break;
        case "е": t = afterCons ? (reduce ? "i" : "é") : (reduce ? "i" : "ié"); break;
        case "ё": t = afterCons ? "io" : "io"; break;
        case "и": t = "i"; break;
        case "ы": t = "y"; break;
        case "у": t = "ou"; break;
        case "э": t = "è"; break;
        case "ю": t = "iou"; break;
        case "я": t = afterCons && reduce && !restIsEnd ? "i" : "ia"; break;
      }
      out.push(stressed && known ? `<b>${t}</b>` : t);
    } else if (CONS[c] !== undefined) {
      t = CONS[c];
      // -ого / -его : г se prononce v
      if (c === "г" && (prev === "о" || prev === "е") && letters.slice(i + 1).filter((x) => x !== "'").join("") === "о") t = "v";
      if (c === "г" && next && "еиэ".includes(next)) t = "gu";
      // assourdissement final
      const rest = letters.slice(i + 1).filter((x) => x !== "'" && x !== "ь");
      if (!rest.length && DEVOICE[t]) t = DEVOICE[t];
      out.push(t);
    } else out.push(esc(c));
  }
  return out.join("");
}

export function tr(s) {
  return String(s ?? "").split(/(\s+|[.,!?;:«»"()—–…])/).map((p) => (/[а-яё]/i.test(p) ? trWord(p) : esc(p))).join("");
}

// ── Synthèse vocale ──
let ruVoice = null, voicesReady = false;
export function ruVoices() {
  if (!("speechSynthesis" in window)) return [];
  return speechSynthesis.getVoices().filter((v) => /^ru/i.test(v.lang));
}
function pickVoice(pref) {
  const vs = ruVoices();
  ruVoice = vs.find((v) => v.name === pref) || vs.find((v) => /Natural|Online|Google/i.test(v.name)) || vs[0] || null;
  voicesReady = true;
}
export function initVoices(pref) {
  if (!("speechSynthesis" in window)) return;
  pickVoice(pref);
  speechSynthesis.onvoiceschanged = () => pickVoice(pref);
}
export const canSpeak = () => "speechSynthesis" in window;
export const hasRuVoice = () => { if (!voicesReady) pickVoice(); return !!ruVoice; };

export function say(text, opts = {}) {
  if (!canSpeak()) return Promise.resolve();
  return new Promise((res) => {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(plain(text));
    u.lang = "ru-RU";
    if (ruVoice) u.voice = ruVoice;
    u.rate = opts.rate ?? window.__rate ?? 0.85;
    u.onend = u.onerror = () => res();
    speechSynthesis.speak(u);
  });
}
export const setVoice = (name) => pickVoice(name);

// ── Reconnaissance vocale ──
export const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export function listenRu() {
  return new Promise((res, rej) => {
    if (!SR) return rej(new Error("unsupported"));
    const r = new SR();
    r.lang = "ru-RU"; r.interimResults = false; r.maxAlternatives = 3;
    r.onresult = (e) => res([...e.results[0]].map((a) => a.transcript));
    r.onerror = (e) => rej(e.error);
    r.onend = () => res([]);
    r.start();
  });
}

// Accents dans le HTML : convertit ' en accent dans tous les .ru d’un conteneur.
export function stressify(root) {
  $$(".ru", root).forEach((el) => {
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), nodes = [];
    let n; while ((n = w.nextNode())) if (n.nodeValue.includes("'")) nodes.push(n);
    for (const t of nodes) {
      const tmp = document.createElement("span");
      tmp.innerHTML = acc(t.nodeValue);
      t.replaceWith(...tmp.childNodes);
    }
  });
}

export function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("on"));
  setTimeout(() => { t.classList.remove("on"); setTimeout(() => t.remove(), 400); }, 2200);
}

export function sparks(x = innerWidth / 2, y = innerHeight / 2, n = 28) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("i");
    s.className = "spark";
    const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 160;
    s.style.left = x + "px"; s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(a) * d + "px");
    s.style.setProperty("--dy", Math.sin(a) * d - 60 + "px");
    s.style.animationDelay = Math.random() * 0.15 + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1400);
  }
}
