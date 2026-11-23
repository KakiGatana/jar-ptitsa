// État persistant (localStorage) : progression, série, répétition espacée, réglages.
const KEY = "jarptitsa.v1";

export const today = (d = new Date()) => {
  const z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return z.toISOString().slice(0, 10);
};
export const addDays = (iso, n) => { const d = new Date(iso + "T12:00:00"); d.setDate(d.getDate() + n); return today(d); };

const DEFAULT = () => ({
  name: "",
  xp: 0, streak: 0, best: 0, lastDay: null,
  days: {},            // { "2026-11-23": xp }
  done: {},            // { lessonId: { score, date } }
  convs: {},           // { convId: date }
  srs: {},             // { id: { ru, fr, due, int, ef, rep } }
  settings: { minutes: 30, start: today(), translit: true, rate: 0.85, theme: "auto", intro: true, voice: "", speak: true, mat: false }
});

// ── Validation stricte des données (localStorage ou fichier importé) ──
// Liste blanche de clés et de types : rien d’inattendu (HTML, __proto__, objets géants) ne passe.
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const ID = /^[a-z0-9-]{1,32}$/;
const num = (v, min, max, def) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : def);
const int = (v, min, max, def) => Math.round(num(v, min, max, def));
const str = (v, max, def = "") => (typeof v === "string" ? v.slice(0, max) : def);
const date = (v, def = null) => (typeof v === "string" && ISO.test(v) ? v : def);
const bool = (v, def) => (typeof v === "boolean" ? v : def);
const obj = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v : {});
const dict = () => Object.create(null);
const MAX_ENTRIES = 20000;

export function sanitize(raw) {
  const d = DEFAULT(), r = obj(raw), s = obj(r.settings);
  const out = {
    name: str(r.name, 40).replace(/[<>]/g, ""),
    xp: int(r.xp, 0, 1e9, 0), streak: int(r.streak, 0, 1e5, 0), best: int(r.best, 0, 1e5, 0),
    lastDay: date(r.lastDay),
    days: {}, done: {}, convs: {}, srs: {},
    settings: {
      minutes: [15, 30, 45, 60, 90, 120].includes(s.minutes) ? s.minutes : d.settings.minutes,
      start: date(s.start, d.settings.start),
      translit: bool(s.translit, true), speak: bool(s.speak, true), intro: bool(s.intro, true), mat: bool(s.mat, false),
      rate: num(s.rate, 0.5, 1.2, 0.85),
      theme: ["auto", "dark", "light"].includes(s.theme) ? s.theme : "auto",
      voice: str(s.voice, 120)
    }
  };
  const days = dict(), done = dict(), convs = dict(), srs = dict();
  Object.entries(obj(r.days)).slice(0, MAX_ENTRIES).forEach(([k, v]) => { if (ISO.test(k)) days[k] = int(v, 0, 1e6, 0); });
  Object.entries(obj(r.done)).slice(0, MAX_ENTRIES).forEach(([k, v]) => { if (ID.test(k)) done[k] = { score: int(obj(v).score, 0, 100, 0), date: date(obj(v).date, d.settings.start) }; });
  Object.entries(obj(r.convs)).slice(0, MAX_ENTRIES).forEach(([k, v]) => { if (ID.test(k)) convs[k] = date(v, d.settings.start); });
  Object.entries(obj(r.srs)).slice(0, MAX_ENTRIES).forEach(([k, v]) => {
    const c = obj(v), ru = str(c.ru, 200), fr = str(c.fr, 300);
    if (!ru || !fr || k !== ru || !/[а-яё]/i.test(ru)) return; // une carte est toujours du russe
    srs[k] = { ru, fr, due: date(c.due, d.settings.start), int: int(c.int, 0, 36500, 0), ef: num(c.ef, 1.3, 5, 2.5), rep: int(c.rep, 0, 1e4, 0) };
  });
  // On repasse en objets ordinaires (sérialisables) après avoir filtré les clés.
  out.days = { ...days }; out.done = { ...done }; out.convs = { ...convs }; out.srs = { ...srs };
  out.best = Math.max(out.best, out.streak);
  return out;
}

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    if (raw) return sanitize(raw);
  } catch (e) { /* stockage indisponible ou corrompu */ }
  return DEFAULT();
}

export const S = load();
export function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

export function addXP(n) {
  const t = today();
  if (S.lastDay !== t) {
    S.streak = S.lastDay === addDays(t, -1) ? S.streak + 1 : 1;
    S.lastDay = t;
  }
  S.best = Math.max(S.best, S.streak);
  S.xp += n;
  S.days[t] = (S.days[t] || 0) + n;
  save();
  document.dispatchEvent(new CustomEvent("xp"));
}

// Série en cours (0 si un jour a été manqué).
export function liveStreak() {
  if (!S.lastDay) return 0;
  const t = today();
  return S.lastDay === t || S.lastDay === addDays(t, -1) ? S.streak : 0;
}

export const goal = () => S.settings.minutes; // 1 XP ≈ 1 minute d’effort
export const todayXP = () => S.days[today()] || 0;

// ── Répétition espacée (SM-2 simplifié) ──
export function addCards(list) {
  let n = 0;
  for (const [ru, fr] of list) {
    const id = ru;
    if (!S.srs[id]) { S.srs[id] = { ru, fr, due: today(), int: 0, ef: 2.5, rep: 0 }; n++; }
  }
  save();
  return n;
}
export const hasCard = (ru) => !!S.srs[ru];
export const dueCards = () => Object.entries(S.srs).filter(([, c]) => c.due <= today()).map(([id, c]) => ({ id, ...c }));

// q : 0 = à revoir, 1 = difficile, 2 = bien, 3 = facile
export function grade(id, q) {
  const c = S.srs[id]; if (!c) return;
  const qq = [1, 3, 4, 5][q];
  if (qq < 3) { c.rep = 0; c.int = 0; c.due = today(); }
  else {
    c.rep += 1;
    c.int = c.rep === 1 ? 1 : c.rep === 2 ? (q === 3 ? 4 : 3) : Math.round(c.int * c.ef * (q === 1 ? 0.6 : q === 3 ? 1.3 : 1));
    c.ef = Math.max(1.3, c.ef + (0.1 - (5 - qq) * (0.08 + (5 - qq) * 0.02)));
    c.due = addDays(today(), Math.max(1, c.int));
  }
  save();
}

export function exportData() { return JSON.stringify(S, null, 1); }
export const MAX_IMPORT_BYTES = 5 * 1024 * 1024;
export function importData(txt) {
  if (typeof txt !== "string" || txt.length > MAX_IMPORT_BYTES) throw new Error("Fichier trop gros");
  const d = JSON.parse(txt);
  if (!d || typeof d !== "object" || Array.isArray(d) || !d.settings) throw new Error("Fichier invalide");
  const clean = sanitize(d);
  Object.keys(S).forEach((k) => delete S[k]);
  Object.assign(S, clean);
  save();
}
export function resetAll() { Object.keys(S).forEach((k) => delete S[k]); Object.assign(S, DEFAULT()); save(); }
