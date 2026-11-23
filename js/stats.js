// Page « Mes progrès » : courbes d’XP, de leçons et de mots, état des cartes, progression par niveau.
// Graphiques SVG faits main : une seule série par graphique (pas de double axe), info-bulle au survol,
// tableau des données pour l’accessibilité.
import { $, $$, esc } from "./util.js";
import { S, today, addDays, liveStreak } from "./store.js";

let range = 30; // jours affichés (0 = tout)

const fmtDay = (iso, long = false) => new Date(iso + "T12:00").toLocaleDateString("fr-FR", long ? { weekday: "short", day: "numeric", month: "long" } : { day: "numeric", month: "short" });
const nice = (max) => { if (max <= 5) return 5; const p = 10 ** Math.floor(Math.log10(max)); const m = max / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p; };

function firstDay() {
  const all = [...Object.keys(S.days), ...Object.values(S.done).map((d) => d.date), ...Object.values(S.srs).map((c) => c.added)].filter(Boolean).sort();
  return all[0] || today();
}

function series() {
  const end = today();
  const start = range ? addDays(end, -(range - 1)) : firstDay();
  const dates = [];
  for (let d = start; d <= end; d = addDays(d, 1)) dates.push(d);
  const xp = dates.map((d) => S.days[d] || 0);
  let before = 0; for (const [d, v] of Object.entries(S.days)) if (d < start) before += v;
  let run = before; const cumXp = xp.map((v) => (run += v));
  const lessonDates = Object.values(S.done).map((d) => d.date).sort();
  const wordDates = Object.values(S.srs).map((c) => c.added).sort();
  const countUpTo = (arr, d) => { let n = 0; for (const x of arr) { if (x <= d) n++; else break; } return n; };
  return { dates, xp, cumXp, lessons: dates.map((d) => countUpTo(lessonDates, d)), words: dates.map((d) => countUpTo(wordDates, d)) };
}

// Graphique SVG. kind : "bar" (valeurs quotidiennes) ou "area" (cumul).
function chart({ id, dates, values, kind, unit, goal }) {
  const W = 640, H = 220, L = 40, R = 10, T = 14, B = 26, iw = W - L - R, ih = H - T - B, n = values.length;
  const max = nice(Math.max(1, ...values, goal || 0));
  const y = (v) => T + ih - (v / max) * ih;
  const step = iw / n;
  const x = (i) => L + step * i + step / 2;
  const ticks = [0, max / 2, max];
  let marks = "";
  if (kind === "bar") {
    const bw = Math.max(1, step - 2); // 2 px d’écart entre les barres
    values.forEach((v, i) => {
      if (!v) return;
      const h = Math.max(2, (v / max) * ih), x0 = L + step * i + 1, y0 = T + ih - h, r = Math.min(4, bw / 2, h);
      marks += `<path class="bar" d="M${x0},${T + ih}V${y0 + r}Q${x0},${y0} ${x0 + r},${y0}H${x0 + bw - r}Q${x0 + bw},${y0} ${x0 + bw},${y0 + r}V${T + ih}Z"/>`;
    });
  } else {
    const pts = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`);
    marks = `<path class="area" d="M${x(0)},${T + ih}L${pts.join("L")}L${x(n - 1)},${T + ih}Z"/><path class="line" d="M${pts.join("L")}"/>`;
  }
  const goalLine = goal ? `<line class="goal" x1="${L}" x2="${W - R}" y1="${y(goal)}" y2="${y(goal)}"/><text class="goal-t" x="${W - R}" y="${y(goal) - 5}" text-anchor="end">objectif ${goal}</text>` : "";
  const xl = [0, Math.floor((n - 1) / 2), n - 1].filter((v, i, a) => a.indexOf(v) === i)
    .map((i) => `<text class="ax" x="${x(i)}" y="${H - 8}" text-anchor="${i === 0 ? "start" : i === n - 1 ? "end" : "middle"}">${fmtDay(dates[i])}</text>`).join("");
  return `<div class="chart" data-chart="${id}">
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(unit)}">
      ${ticks.map((t) => `<line class="grid" x1="${L}" x2="${W - R}" y1="${y(t)}" y2="${y(t)}"/><text class="ax" x="${L - 6}" y="${y(t) + 4}" text-anchor="end">${Math.round(t)}</text>`).join("")}
      ${marks}${goalLine}${xl}
      <line class="cross" y1="${T}" y2="${T + ih}" x1="0" x2="0" hidden/><circle class="dot" r="5" hidden/>
      <rect class="hit" x="${L}" y="${T}" width="${iw}" height="${ih}"/>
    </svg><div class="ctip" hidden></div></div>`;
}

function bindChart(root, { dates, values, kind, unit }) {
  const svg = $("svg", root), tip = $(".ctip", root), cross = $(".cross", root), dot = $(".dot", root);
  const W = 640, L = 40, R = 10, T = 14, B = 26, H = 220, iw = W - L - R, ih = H - T - B, n = values.length;
  const max = nice(Math.max(1, ...values, kind === "bar" ? +root.dataset.goal || 0 : 0));
  const move = (e) => {
    const r = svg.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const i = Math.max(0, Math.min(n - 1, Math.floor(((px - L) / iw) * n)));
    const cx = L + (iw / n) * i + iw / n / 2, cy = T + ih - (values[i] / max) * ih;
    cross.setAttribute("x1", cx); cross.setAttribute("x2", cx); cross.hidden = false;
    if (kind !== "bar") { dot.setAttribute("cx", cx); dot.setAttribute("cy", cy); dot.hidden = false; }
    tip.hidden = false;
    tip.innerHTML = `<small>${fmtDay(dates[i], true)}</small><b>${values[i]}</b> ${esc(unit)}`;
    const left = (cx / W) * r.width;
    tip.style.left = Math.min(Math.max(left, 60), r.width - 60) + "px";
  };
  const leave = () => { tip.hidden = true; cross.hidden = true; dot.hidden = true; };
  svg.addEventListener("pointermove", move);
  svg.addEventListener("pointerdown", move);
  svg.addEventListener("pointerleave", leave);
}

export function statsPage({ LESSONS, LEVELS, after, levelPct }) {
  const s = series();
  const total = S.xp;
  const periodXp = s.xp.reduce((a, b) => a + b, 0);
  const active = s.xp.filter((v) => v > 0).length;
  const cards = Object.values(S.srs);
  const states = [
    ["Nouvelles", cards.filter((c) => c.rep === 0).length, "s1"],
    ["En cours", cards.filter((c) => c.rep >= 1 && c.rep <= 2).length, "s2"],
    ["Maîtrisées", cards.filter((c) => c.rep >= 3).length, "s3"]
  ];
  const nCards = cards.length || 1;
  const goal = S.settings.minutes;
  const charts = [
    { id: "xp", title: "XP par jour", values: s.xp, kind: "bar", unit: "XP", goal },
    { id: "cum", title: "XP cumulée", values: s.cumXp, kind: "area", unit: "XP au total" },
    { id: "les", title: "Leçons terminées", values: s.lessons, kind: "area", unit: "leçons" },
    { id: "words", title: "Mots dans tes révisions", values: s.words, kind: "area", unit: "mots" }
  ];
  after(() => {
    $$("[data-range]").forEach((b) => (b.onclick = () => { range = +b.dataset.range; dispatchEvent(new HashChangeEvent("hashchange")); }));
    charts.forEach((c) => { const el = $(`[data-chart="${c.id}"]`); if (el) { el.dataset.goal = c.goal || 0; bindChart(el, { dates: s.dates, ...c }); } });
  });

  if (!total && !cards.length) {
    return `<header class="page-h"><p class="eyebrow">Mes progrès</p><h1>Tes courbes</h1></header>
      <div class="card empty"><p class="ru display-sm">Начнём!</p><p>Fais ta première leçon : tes courbes de progression apparaîtront ici.</p><a class="btn gold" href="#/parcours">Commencer</a></div>`;
  }

  const kpi = (v, l) => `<div class="tile"><b>${v}</b><span>${l}</span></div>`;
  return `<nav class="crumbs"><a href="#/profil">Profil</a> › Mes progrès</nav>
  <header class="page-h"><p class="eyebrow">Mes progrès</p><h1>Tes courbes</h1><p class="muted">Ce que tu as accompli, jour après jour. La régularité compte plus que les gros efforts ponctuels.</p></header>
  <div class="seg" role="tablist" aria-label="Période">${[[7, "7 jours"], [30, "30 jours"], [90, "3 mois"], [365, "1 an"], [0, "Tout"]].map(([v, t]) => `<button role="tab" aria-selected="${range === v}" class="${range === v ? "on" : ""}" data-range="${v}">${t}</button>`).join("")}</div>
  <div class="grid4">
    ${kpi(periodXp, "XP sur la période")}
    ${kpi(active, `jour${active > 1 ? "s" : ""} actif${active > 1 ? "s" : ""}`)}
    ${kpi(active ? Math.round(periodXp / active) : 0, "XP par jour actif")}
    ${kpi(`${liveStreak()} / ${S.best}`, "série / record")}
  </div>
  <div class="charts">${charts.map((c) => `<section class="card"><div class="sec-row"><h3>${c.title}</h3><span class="muted small">${c.kind === "bar" ? `moyenne ${Math.round(periodXp / s.dates.length)} XP/jour` : `${c.values[c.values.length - 1]} ${c.unit}`}</span></div>${chart({ ...c, dates: s.dates })}</section>`).join("")}</div>

  <section class="card"><h3>État de tes cartes</h3>
    <div class="stack" role="img" aria-label="${states.map(([l, v]) => `${l} : ${v}`).join(", ")}">${states.map(([l, v, k]) => v ? `<i class="${k}" style="flex:${v}" title="${l} : ${v}"></i>` : "").join("")}</div>
    <ul class="legend">${states.map(([l, v, k]) => `<li><i class="${k}"></i>${l}<b>${v}</b><span class="muted">${Math.round((v / nCards) * 100)} %</span></li>`).join("")}</ul>
    <p class="muted small">Une carte est « maîtrisée » après trois révisions réussies d’affilée.</p>
  </section>

  <section class="card"><h3>Progression par niveau</h3>
    <ul class="lvl-bars">${LEVELS.filter((l) => LESSONS.some((x) => x.level === l.id)).map((l) => {
      const all = LESSONS.filter((x) => x.level === l.id), d = all.filter((x) => S.done[x.id]).length;
      return `<li><b>${l.id}</b><span class="lv-p"><i style="width:${levelPct(l.id)}%"></i></span><span class="muted">${d} / ${all.length}</span></li>`;
    }).join("")}</ul>
  </section>

  <details class="card"><summary><b>Voir les données en tableau</b></summary>
    <div class="tscroll"><table class="gram"><tr><th>Jour</th><th>XP</th><th>XP cumulée</th><th>Leçons</th><th>Mots</th></tr>
    ${s.dates.map((d, i) => [d, i]).reverse().filter(([, i]) => s.xp[i] || i === s.dates.length - 1).map(([d, i]) => `<tr><td>${fmtDay(d, true)}</td><td>${s.xp[i]}</td><td>${s.cumXp[i]}</td><td>${s.lessons[i]}</td><td>${s.words[i]}</td></tr>`).join("")}</table></div>
  </details>`;
}
