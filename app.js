const CTRL = [
[0,"NUL","Null","Control nulo, relleno o terminador"],["1","SOH","Start of Heading","Inicio de cabecera"],["2","STX","Start of Text","Inicio de texto"],["3","ETX","End of Text","Fin de texto"],["4","EOT","End of Transmission","Fin de transmisión"],["5","ENQ","Enquiry","Petición de respuesta"],["6","ACK","Acknowledge","Confirmación"],["7","BEL","Bell","Pitido o alerta"],["8","BS","Backspace","Retroceso"],["9","HT","Horizontal Tab","Tabulación horizontal"],["10","LF","Line Feed","Salto de línea"],["11","VT","Vertical Tab","Tabulación vertical"],["12","FF","Form Feed","Salto de página"],["13","CR","Carriage Return","Retorno de carro"],["14","SO","Shift Out","Cambio de juego de caracteres"],["15","SI","Shift In","Vuelve al juego base"],["16","DLE","Data Link Escape","Escape de enlace"],["17","DC1","Device Control 1","Control de dispositivo 1"],["18","DC2","Device Control 2","Control de dispositivo 2"],["19","DC3","Device Control 3","Control de dispositivo 3"],["20","DC4","Device Control 4","Control de dispositivo 4"],["21","NAK","Negative Acknowledge","No confirmado"],["22","SYN","Synchronous Idle","Sincronismo"],["23","ETB","End of Trans. Block","Fin de bloque"],["24","CAN","Cancel","Cancelar"],["25","EM","End of Medium","Fin de medio"],["26","SUB","Substitute","Sustituto"],["27","ESC","Escape","Escape"],["28","FS","File Separator","Separador de archivo"],["29","GS","Group Separator","Separador de grupo"],["30","RS","Record Separator","Separador de registro"],["31","US","Unit Separator","Separador de unidad"]
];
const ES_NAME = {32:"Espacio",33:"Signo de exclamación",34:"Comillas dobles",35:"Almohadilla",36:"Signo de dólar",37:"Por ciento",38:"Ampersand",39:"Comilla simple",40:"Paréntesis de apertura",41:"Paréntesis de cierre",42:"Asterisco",43:"Signo más",44:"Coma",45:"Guion",46:"Punto",47:"Barra",58:"Dos puntos",59:"Punto y coma",60:"Menor que",61:"Signo igual",62:"Mayor que",63:"Interrogación",64:"Arroba",91:"Corchete de apertura",92:"Barra invertida",93:"Corchete de cierre",94:"Acento circunflejo",95:"Guion bajo",96:"Acento grave",123:"Llave de apertura",124:"Barra vertical",125:"Llave de cierre",126:"Tilde",127:"Suprimir"};
const DATA = [];
for (const [dec, abbr, en, es] of CTRL) DATA.push({dec, abbr, en, es, cat:"control", glyph:abbr, printable:false});
for (let d = 32; d <= 126; d++) {
  const ch = String.fromCharCode(d);
  let cat = "symbols", es = ES_NAME[d] || ("Carácter " + ch), en = ch;
  if (d >= 48 && d <= 57) { cat = "digits"; en = "Digit " + ch; es = "Dígito " + ch; }
  else if (d >= 65 && d <= 90) { cat = "upper"; en = "Capital letter " + ch; es = "Letra mayúscula " + ch; }
  else if (d >= 97 && d <= 122) { cat = "lower"; en = "Small letter " + ch; es = "Letra minúscula " + ch; }
  else if (d === 32) { en = "Space"; }
  DATA.push({dec:d, abbr:ch, en, es, cat, glyph: d === 32 ? "␣" : ch, printable:true});
}
DATA.push({dec:127, abbr:"DEL", en:"Delete", es:"Suprimir, borra el carácter anterior", cat:"control", glyph:"DEL", printable:false});
const BY_DEC = Object.fromEntries(DATA.map(e => [e.dec, e]));
const CAT_LBL = {control:"Control", digits:"0–9", upper:"A–Z", lower:"a–z", symbols:"Símbolos"};
const NAMED = {34:"&quot;", 38:"&amp;", 60:"&lt;", 62:"&gt;"};
const hex = d => "0x" + d.toString(16).toUpperCase().padStart(2, "0");
const oct = d => "0o" + d.toString(8);
const bin = d => d.toString(2).padStart(8, "0");
const htmlEnt = e => NAMED[e.dec] || ("&#" + e.dec + ";");

const grid = document.getElementById("tabla");
const q = document.getElementById("q");
const count = document.getElementById("count");
const empty = document.getElementById("empty");
const rangeLbl = document.getElementById("rangeLbl");
let activeFilter = "all";
let selected = 65;

for (const e of DATA) {
  const b = document.createElement("button");
  b.type = "button"; b.className = "cell" + (e.cat === "control" ? " ctrl" : "");
  b.dataset.dec = e.dec; b.tabIndex = -1; b.setAttribute("role", "option");
  b.setAttribute("aria-selected", "false");
  b.setAttribute("aria-label", "DEC " + e.dec + " " + e.es);
  const d1 = document.createElement("span"); d1.className = "d"; d1.textContent = e.dec;
  const g = document.createElement("span"); g.className = "g"; g.textContent = e.glyph;
  const h = document.createElement("span"); h.className = "h"; h.textContent = e.dec.toString(16).toUpperCase().padStart(2, "0");
  b.append(d1, g, h);
  b.addEventListener("click", () => select(e.dec, {focus:false}));
  b.addEventListener("keydown", ev => {
    if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); select(e.dec, {focus:false}); copyText(cellChar(e), "Carácter " + cellChar(e) + " copiado"); }
  });
  grid.appendChild(b);
}
const cells = [...grid.querySelectorAll(".cell")];

function cellChar(e){ return e.printable ? String.fromCharCode(e.dec) : ""; }
function visibleCells(){ return cells.filter(c => !c.hidden); }

function applyFilter(){
  const s = q.value.trim().toLowerCase();
  let n = 0;
  for (const c of cells) {
    const e = BY_DEC[c.dataset.dec];
    const hay = [e.dec, "0x"+e.dec.toString(16), e.dec.toString(16), e.dec.toString(8), e.abbr.toLowerCase(), e.en.toLowerCase(), e.es.toLowerCase(), e.glyph.toLowerCase(), CAT_LBL[e.cat].toLowerCase()].join(" ");
    const okF = activeFilter === "all" || e.cat === activeFilter;
    const okS = !s || hay.includes(s);
    const show = okF && okS;
    c.hidden = !show;
    if (show) n++;
  }
  rangeLbl.textContent = n;
  empty.hidden = n !== 0;
  const sel = BY_DEC[selected];
  count.textContent = n + " / 128 · sel DEC " + selected + " (" + (sel.printable ? sel.glyph : sel.abbr) + ")";
  if (n > 0 && grid.querySelector(`[data-dec="${selected}"]`).hidden) {
    const first = visibleCells()[0];
    if (first) select(Number(first.dataset.dec), {push:false});
  }
}

document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", "false"));
  b.setAttribute("aria-pressed", "true");
  activeFilter = b.dataset.f;
  applyFilter();
}));
q.addEventListener("input", applyFilter);
document.getElementById("reset").addEventListener("click", () => { q.value = ""; activeFilter = "all"; document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x.dataset.f === "all" ? "true" : "false")); applyFilter(); q.focus(); });

grid.addEventListener("keydown", ev => {
  const vis = visibleCells();
  if (!vis.length) return;
  const cols = Math.max(1, Math.round(grid.offsetWidth / (vis[0].offsetWidth || 90)));
  const i = vis.indexOf(document.activeElement);
  let j = -1;
  if (ev.key === "ArrowRight") j = i + 1;
  else if (ev.key === "ArrowLeft") j = i - 1;
  else if (ev.key === "ArrowDown") j = i + cols;
  else if (ev.key === "ArrowUp") j = i - cols;
  else if (ev.key === "Home") j = 0;
  else if (ev.key === "End") j = vis.length - 1;
  else return;
  ev.preventDefault();
  j = Math.max(0, Math.min(vis.length - 1, j < 0 ? 0 : j));
  vis[j].focus();
  select(Number(vis[j].dataset.dec), {push:true});
});
grid.addEventListener("focus", ev => {
  if (ev.target === grid) {
    const cur = grid.querySelector(`[data-dec="${selected}"]`);
    (cur && !cur.hidden ? cur : visibleCells()[0])?.focus();
  }
});

const $ = id => document.getElementById(id);
function select(dec, opt = {}){
  selected = dec;
  const e = BY_DEC[dec];
  cells.forEach(c => {
    const on = Number(c.dataset.dec) === dec;
    c.setAttribute("aria-selected", on ? "true" : "false");
    c.tabIndex = on ? 0 : -1;
  });
  $("big").textContent = e.printable ? e.glyph : e.abbr;
  $("pName").textContent = (e.printable ? e.glyph + " — " : e.abbr + " — ") + e.es;
  $("pCat").textContent = CAT_LBL[e.cat];
  $("fDec").textContent = String(dec);
  $("fHex").textContent = hex(dec);
  $("fOct").textContent = oct(dec);
  $("fBin").textContent = bin(dec);
  $("fChar").textContent = e.printable ? String.fromCharCode(dec) : e.abbr;
  $("fHtml").textContent = htmlEnt(e);
  $("pDesc").textContent = e.en + " · " + e.es + " · " + CAT_LBL[e.cat] + ".";
  const bits = $("bits"); bits.innerHTML = "";
  bin(dec).split("").forEach((bit, i) => {
    const s = document.createElement("span");
    s.className = "bit" + (bit === "1" ? " on" : "");
    s.innerHTML = "<small>" + (7 - i) + "</small>" + bit;
    bits.appendChild(s);
  });
  syncConverters(dec);
  if (opt.push !== false) history.replaceState(null, "", "#dec-" + dec);
  applyCountOnly();
}
function applyCountOnly(){
  const n = visibleCells().length;
  const sel = BY_DEC[selected];
  count.textContent = n + " / 128 · sel DEC " + selected + " (" + (sel.printable ? sel.glyph : sel.abbr) + ")";
}

async function copyText(t, msg){
  try { await navigator.clipboard.writeText(t); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = t; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
  }
  toast(msg || ("Copiado: " + t));
}
let toastT;
function toast(m){
  const t = document.getElementById("toast");
  t.textContent = m; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 1800);
}
document.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", () => copyText($(b.dataset.copy).textContent, "Copiado: " + $(b.dataset.copy).textContent)));
$("copyAll").addEventListener("click", () => {
  const e = BY_DEC[selected];
  copyText(["RadixRef " + selected, "DEC " + selected, hex(selected), oct(selected), "BIN " + bin(selected), "HTML " + htmlEnt(e), e.es].join(" · "), "Ficha DEC " + selected + " copiada");
});
$("prevBtn").addEventListener("click", () => select((selected + 127) % 128));
$("nextBtn").addEventListener("click", () => select((selected + 1) % 128));

const cBin = $("cBin"), cOct = $("cOct"), cDec = $("cDec"), cHex = $("cHex"), cErr = $("cErr");
function syncConverters(dec){
  cBin.value = bin(dec); cOct.value = dec.toString(8); cDec.value = String(dec); cHex.value = dec.toString(16).toUpperCase().padStart(2, "0");
  [cBin, cOct, cDec, cHex].forEach(i => i.setAttribute("aria-invalid", "false"));
  cErr.hidden = true;
}
function convErr(m, bad){
  cErr.textContent = m; cErr.hidden = false;
  [cBin, cOct, cDec, cHex].forEach(i => i.setAttribute("aria-invalid", i === bad ? "true" : "false"));
}
[["bin", cBin, /^[01]{1,8}$/, s => parseInt(s, 2)], ["oct", cOct, /^[0-7]{1,3}$/, s => parseInt(s, 8)], ["dec", cDec, /^\d{1,3}$/, s => parseInt(s, 10)], ["hex", cHex, /^(0x)?[0-9a-f]{1,2}$/i, s => parseInt(s.replace(/^0x/i, ""), 16)]]
.forEach(([name, input, re, parse]) => input.addEventListener("input", () => {
  const v = input.value.trim();
  if (!v) { cErr.hidden = true; return; }
  if (!re.test(v)) { convErr("Valor " + name.toUpperCase() + " inválido para 0–255.", input); return; }
  const n = parse(v);
  if (Number.isNaN(n) || n < 0 || n > 255) { convErr("Fuera de rango 0–255.", input); return; }
  cErr.hidden = true;
  [cBin, cOct, cDec, cHex].forEach(i => i.setAttribute("aria-invalid", "false"));
  if (n <= 127) select(n, {push:false});
  else {
    cBin.value = n.toString(2).padStart(8, "0"); cOct.value = n.toString(8); cDec.value = String(n); cHex.value = n.toString(16).toUpperCase().padStart(2, "0");
    count.textContent = visibleCells().length + " / 128 · conv " + n + " (fuera de tabla V1)";
  }
}));
$("cClear").addEventListener("click", () => { [cBin, cOct, cDec, cHex].forEach(i => { i.value = ""; i.setAttribute("aria-invalid", "false"); }); cErr.hidden = true; syncConverters(selected); });
$("toTable").addEventListener("click", () => {
  const n = Number(cDec.value);
  if (Number.isInteger(n) && n >= 0 && n <= 127) {
    q.value = ""; activeFilter = "all";
    document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x.dataset.f === "all" ? "true" : "false"));
    applyFilter(); select(n);
    grid.querySelector(`[data-dec="${n}"]`)?.focus();
    grid.scrollIntoView({block:"nearest"});
  } else toast("Conversor fuera de 0–127 para la tabla V1");
});

const m = location.hash.match(/#dec-(\d{1,3})/);
applyFilter();
select(m && BY_DEC[m[1]] ? Number(m[1]) : 65, {push:false});
