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
  settings: { minutes: 30, start: today(), translit: true, rate: 0.85, theme: "auto", intro: true, voice: "", speak: true }
});

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    if (raw) { const d = DEFAULT(); return { ...d, ...raw, settings: { ...d.settings, ...(raw.settings || {}) } }; }
  } catch (e) { /* stockage indisponible */ }
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
export function importData(txt) {
  const d = JSON.parse(txt);
  if (typeof d !== "object" || !d.settings) throw new Error("Fichier invalide");
  Object.keys(S).forEach((k) => delete S[k]);
  Object.assign(S, DEFAULT(), d);
  save();
}
export function resetAll() { Object.keys(S).forEach((k) => delete S[k]); Object.assign(S, DEFAULT()); save(); }
