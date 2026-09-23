const CTRL = [
[0,"NUL","Null","Carácter nulo"],[1,"SOH","Start of Heading","Inicio de encabezado"],[2,"STX","Start of Text","Inicio de texto"],[3,"ETX","End of Text","Fin de texto"],[4,"EOT","End of Transmission","Fin de transmisión"],[5,"ENQ","Enquiry","Consulta"],[6,"ACK","Acknowledge","Reconocimiento"],[7,"BEL","Bell","Timbre"],[8,"BS","Backspace","Retroceso"],[9,"HT","Horizontal Tab","Tabulador horizontal"],[10,"LF","Line Feed","Nueva línea, salto de línea"],[11,"VT","Vertical Tab","Tabulador vertical"],[12,"FF","Form Feed","Nueva página, salto de página"],[13,"CR","Carriage Return","Retorno de carro (Enter)"],[14,"SO","Shift Out","Desplazamiento hacia afuera"],[15,"SI","Shift In","Desplazamiento hacia adentro"],[16,"DLE","Data Link Escape","Escape de vínculo de datos"],[17,"DC1","Device Control 1","Control dispositivo 1"],[18,"DC2","Device Control 2","Control dispositivo 2"],[19,"DC3","Device Control 3","Control dispositivo 3"],[20,"DC4","Device Control 4","Control dispositivo 4"],[21,"NAK","Negative Acknowledge","Confirmación negativa"],[22,"SYN","Synchronous Idle","Inactividad sincrónica"],[23,"ETB","End of Trans. Block","Fin del bloque de transmisión"],[24,"CAN","Cancel","Cancelar"],[25,"EM","End of Medium","Fin del medio"],[26,"SUB","Substitute","Sustitución"],[27,"ESC","Escape","Escape"],[28,"FS","File Separator","Separador de archivos"],[29,"GS","Group Separator","Separador de grupos"],[30,"RS","Record Separator","Separador de registros"],[31,"US","Unit Separator","Separador de unidades"]
];
const ES_NAME = {32:"Espacio en blanco",33:"Signo de exclamación, admiración",34:"Comillas dobles, altas o inglesas",35:"Signo numeral o almohadilla",36:"Signo pesos (dólar)",37:"Signo de porcentaje, por ciento",38:"Y, ampersand, et latina",39:"Comillas simples, apóstrofe",40:"Abre paréntesis",41:"Cierra paréntesis",42:"Asterisco",43:"Signo más, suma, positivo",44:"Coma",45:"Signo menos, resta, negativo, guion medio",46:"Punto",47:"Barra inclinada, división",58:"Dos puntos",59:"Punto y coma",60:"Menor que",61:"Signo igual, igualdad",62:"Mayor que",63:"Cierra interrogación",64:"Arroba",91:"Abre corchetes",92:"Barra invertida, contrabarra",93:"Cierra corchetes",94:"Intercalación, acento circunflejo",95:"Guion bajo, subrayado",96:"Acento grave",123:"Abre llaves",124:"Barra vertical, pleca",125:"Cierra llaves",126:"Signo de equivalencia, tilde, virgulilla"};
const CP437 = "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´≡±‗¾¶§÷¸°¨·¹³²■ ";
const EXT = [
[128,"C cedilla capital","C cedilla mayúscula"],[129,"u diaeresis small","u minúscula con diéresis"],[130,"e acute small","e minúscula con acento agudo"],[131,"a circumflex small","a minúscula con acento circunflejo"],[132,"a diaeresis small","a minúscula con diéresis"],[133,"a grave small","a minúscula con acento grave"],[134,"a ring small","a minúscula con anillo"],[135,"c cedilla small","c cedilla minúscula"],[136,"e circumflex small","e minúscula con acento circunflejo"],[137,"e diaeresis small","e minúscula con diéresis"],[138,"e grave small","e minúscula con acento grave"],[139,"i diaeresis small","i minúscula con diéresis"],[140,"i circumflex small","i minúscula con acento circunflejo"],[141,"i grave small","i minúscula con acento grave"],[142,"A diaeresis capital","A mayúscula con diéresis"],[143,"A ring capital","A mayúscula con anillo"],[144,"E acute capital","E mayúscula con acento agudo"],[145,"ae ligature small","Diptongo latino ae minúscula"],[146,"AE ligature capital","Diptongo latino AE mayúscula"],[147,"o circumflex small","o minúscula con acento circunflejo"],[148,"o diaeresis small","o minúscula con diéresis"],[149,"o grave small","o minúscula con acento grave"],[150,"u circumflex small","u minúscula con acento circunflejo"],[151,"u grave small","u minúscula con acento grave"],[152,"y diaeresis small","y minúscula con diéresis"],[153,"O diaeresis capital","O mayúscula con diéresis"],[154,"U diaeresis capital","U mayúscula con diéresis"],[155,"o slash small","o minúscula con barra inclinada"],[156,"Pound sterling","Libra esterlina"],[157,"O slash capital","O mayúscula con barra inclinada"],[158,"Multiplication sign","Signo de multiplicación"],[159,"Florin function","Función, florín neerlandés"],[160,"a acute small","a minúscula con acento agudo"],[161,"i acute small","i minúscula con acento agudo"],[162,"o acute small","o minúscula con acento agudo"],[163,"u acute small","u minúscula con acento agudo"],[164,"n tilde small enie","eñe minúscula"],[165,"N tilde capital ENIE","EÑE mayúscula"],[166,"Feminine ordinal","Ordinal femenino"],[167,"Masculine ordinal","Ordinal masculino"],[168,"Inverted question mark","Abre interrogación"],[169,"Registered trademark","Marca registrada"],[170,"Not sign","Negación"],[171,"One half fraction","Un medio, fracción"],[172,"One quarter fraction","Un cuarto, fracción"],[173,"Inverted exclamation","Abre exclamación"],[174,"Left guillemet","Abre comillas latinas"],[175,"Right guillemet","Cierra comillas latinas"],[176,"Light shade block","Bloque tramado baja densidad"],[177,"Medium shade block","Bloque tramado media densidad"],[178,"Dark shade block","Bloque tramado alta densidad"],[179,"Box vertical single","Línea simple vertical"],[180,"Box vertical junction","Línea vertical con empalme"],[181,"A acute capital","A mayúscula con acento agudo"],[182,"A circumflex capital","A mayúscula con acento circunflejo"],[183,"A grave capital","A mayúscula con acento grave"],[184,"Copyright","Copyright"],[185,"Box double vertical left","Doble línea vertical empalme izquierdo"],[186,"Box double vertical","Doble línea vertical"],[187,"Box double corner upper right","Doble línea esquina superior derecha"],[188,"Box double corner lower right","Doble línea esquina inferior derecha"],[189,"Cent sign","Centavo"],[190,"Yen sign","Yen japonés, yuan chino"],[191,"Box corner single","Línea simple esquina"],[192,"Box corner single","Línea simple esquina"],[193,"Box horizontal junction","Línea horizontal con empalme"],[194,"Box horizontal junction","Línea horizontal con empalme"],[195,"Box vertical junction","Línea vertical con empalme"],[196,"Box horizontal single","Línea simple horizontal"],[197,"Box cross single","Líneas simples con empalmes"],[198,"a tilde small","a minúscula con tilde"],[199,"A tilde capital","A mayúscula con tilde"],[200,"Box double corner lower left","Doble línea esquina inferior izquierda"],[201,"Box double corner upper left","Doble línea esquina superior izquierda"],[202,"Box double horizontal up","Doble línea horizontal empalme arriba"],[203,"Box double horizontal down","Doble línea horizontal empalme abajo"],[204,"Box double vertical right","Doble línea vertical empalme derecho"],[205,"Box double horizontal","Doble línea horizontal"],[206,"Box double cross","Doble línea cruce"],[207,"Currency sign","Signo monetario general"],[208,"Eth small","Eth latina minúscula"],[209,"Eth capital","Eth latina mayúscula"],[210,"E circumflex capital","E mayúscula con acento circunflejo"],[211,"E diaeresis capital","E mayúscula con diéresis"],[212,"E grave capital","E mayúscula con acento grave"],[213,"Dotless i small","i minúscula sin punto"],[214,"I acute capital","I mayúscula con acento agudo"],[215,"I circumflex capital","I mayúscula con acento circunflejo"],[216,"I diaeresis capital","I mayúscula con diéresis"],[217,"Box corner single","Línea simple esquina"],[218,"Box corner single","Línea simple esquina"],[219,"Full block","Bloque sólido"],[220,"Lower half block","Medio bloque inferior"],[221,"Broken bar","Barra vertical partida"],[222,"I grave capital","I mayúscula con acento grave"],[223,"Upper half block","Medio bloque superior"],[224,"O acute capital","O mayúscula con acento agudo"],[225,"Eszett German","Eszett alemana"],[226,"O circumflex capital","O mayúscula con acento circunflejo"],[227,"O grave capital","O mayúscula con acento grave"],[228,"o tilde small","o minúscula con tilde"],[229,"O tilde capital","O mayúscula con tilde"],[230,"Micro sign","Micro"],[231,"Thorn small","Thorn latina minúscula"],[232,"Thorn capital","Thorn latina mayúscula"],[233,"U acute capital","U mayúscula con acento agudo"],[234,"U circumflex capital","U mayúscula con acento circunflejo"],[235,"U grave capital","U mayúscula con acento grave"],[236,"y acute small","y minúscula con acento agudo"],[237,"Y acute capital","Y mayúscula con acento agudo"],[238,"Macron","Macron, guion alto"],[239,"Acute accent","Acento agudo"],[240,"Congruence equivalent","Congruencia, equivalencia"],[241,"Plus minus","Más menos"],[242,"Double low line","Línea doble baja"],[243,"Three quarters fraction","Tres cuartos, fracción"],[244,"Pilcrow paragraph","Fin de párrafo, calderón"],[245,"Section sign","Sección"],[246,"Division sign","División"],[247,"Cedilla","Cedilla"],[248,"Degree sign","Grado"],[249,"Diaeresis","Diéresis"],[250,"Middle dot","Punto centrado"],[251,"Superscript one","Superíndice uno"],[252,"Superscript three cubed","Superíndice tres, al cubo"],[253,"Superscript two squared","Superíndice dos, al cuadrado"],[254,"Black square","Cuadrado negro"]
];
const DATA = [];
for (const [dec, abbr, en, es] of CTRL) DATA.push({dec, abbr, en, es, cat:"control", glyph:abbr, printable:false});
for (let d = 32; d <= 126; d++) {
  const ch = String.fromCharCode(d);
  let cat = "symbols", es = ES_NAME[d] || ("Carácter " + ch), en = ch;
  if (d >= 48 && d <= 57) { cat = "digits"; en = "Digit " + ch; es = "Número " + ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"][d - 48]; }
  else if (d >= 65 && d <= 90) { cat = "upper"; en = "Capital letter " + ch; es = "Letra " + ch + " mayúscula"; }
  else if (d >= 97 && d <= 122) { cat = "lower"; en = "Small letter " + ch; es = "Letra " + ch + " minúscula"; }
  else if (d === 32) { en = "Space"; }
  DATA.push({dec:d, abbr:ch, en, es, cat, glyph: d === 32 ? "␣" : ch, printable:true});
}
DATA.push({dec:127, abbr:"DEL", en:"Delete", es:"Suprimir, borrar, eliminar", cat:"control", glyph:"DEL", printable:false});
for (const [dec, en, es] of EXT) {
  const ch = CP437[dec - 128];
  DATA.push({dec, abbr:ch, en, es, cat:"extended", glyph:ch, printable:true});
}
DATA.push({dec:255, abbr:"nbsp", en:"No-break space", es:"Espacio sin separación", cat:"extended", glyph:"NBSP", printable:false});
const BY_DEC = Object.fromEntries(DATA.map(e => [e.dec, e]));
const TOTAL = DATA.length;
const CAT_LBL = {control:"Control", digits:"0–9", upper:"A–Z", lower:"a–z", symbols:"Símbolos", extended:"128–255"};
const NAMED = {34:"&quot;", 38:"&amp;", 60:"&lt;", 62:"&gt;", 255:"&nbsp;"};
const hex = d => "0x" + d.toString(16).toUpperCase().padStart(2, "0");
const oct = d => "0o" + d.toString(8);
const bin = d => d.toString(2).padStart(8, "0");
const htmlEnt = e => NAMED[e.dec] || (e.dec < 128 ? "&#" + e.dec + ";" : "&#" + e.glyph.codePointAt(0) + ";");

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

function cellChar(e){ return e.printable ? (e.dec < 128 ? String.fromCharCode(e.dec) : e.glyph) : ""; }
function visibleCells(){ return cells.filter(c => !c.hidden); }

function matchScore(e, s){
  const g = e.glyph.toLowerCase(), a = e.abbr.toLowerCase();
  if (String(e.dec) === s) return 0;
  if (g === s || a === s) return 1;
  if (e.en.toLowerCase().startsWith(s) || e.es.toLowerCase().startsWith(s)) return 2;
  if (g.startsWith(s) || a.startsWith(s)) return 3;
  return 4;
}

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
  if (n === 0) $("emptyQ").textContent = '"' + q.value.trim() + '"' + (activeFilter !== "all" ? " en " + CAT_LBL[activeFilter] : "");
  const sel = BY_DEC[selected];
  count.textContent = n + " / " + TOTAL + " · sel DEC " + selected + " (" + (sel.printable ? sel.glyph : sel.abbr) + ")";
  if (n > 0 && grid.querySelector(`[data-dec="${selected}"]`).hidden) {
    const vis = visibleCells();
    let best = vis[0], bestScore = Infinity;
    for (const c of vis) {
      const sc = matchScore(BY_DEC[c.dataset.dec], s) * 1000 + Number(c.dataset.dec);
      if (sc < bestScore) { bestScore = sc; best = c; }
    }
    if (best) {
      select(Number(best.dataset.dec), {push:false});
      try { best.scrollIntoView({block:"nearest"}); } catch (e) { /* noop */ }
    }
  }
}

document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", "false"));
  b.setAttribute("aria-pressed", "true");
  activeFilter = b.dataset.f;
  applyFilter();
}));
q.addEventListener("input", () => {
  if (q.value.trim() !== "" && activeFilter !== "all") {
    activeFilter = "all";
    document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x.dataset.f === "all" ? "true" : "false"));
  }
  applyFilter();
});
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
  $("fChar").textContent = e.printable ? cellChar(e) : e.abbr;
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
  count.textContent = n + " / " + TOTAL + " · sel DEC " + selected + " (" + (sel.printable ? sel.glyph : sel.abbr) + ")";
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
$("prevBtn").addEventListener("click", () => select((selected + TOTAL - 1) % TOTAL));
$("nextBtn").addEventListener("click", () => select((selected + 1) % TOTAL));

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
  if (BY_DEC[n]) select(n, {push:false});
  else {
    cBin.value = n.toString(2).padStart(8, "0"); cOct.value = n.toString(8); cDec.value = String(n); cHex.value = n.toString(16).toUpperCase().padStart(2, "0");
    count.textContent = visibleCells().length + " / " + TOTAL + " · conv " + n;
  }
}));
$("cClear").addEventListener("click", () => { [cBin, cOct, cDec, cHex].forEach(i => { i.value = ""; i.setAttribute("aria-invalid", "false"); }); cErr.hidden = true; syncConverters(selected); });
$("toTable").addEventListener("click", () => {
  const n = Number(cDec.value);
  if (Number.isInteger(n) && n >= 0 && n <= 255 && BY_DEC[n]) {
    q.value = ""; activeFilter = "all";
    document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x.dataset.f === "all" ? "true" : "false"));
    applyFilter(); select(n);
    grid.querySelector(`[data-dec="${n}"]`)?.focus();
    grid.scrollIntoView({block:"nearest"});
  } else toast("Conversor fuera de 0–255 para la tabla");
});

const m = location.hash.match(/#dec-(\d{1,3})/);
applyFilter();
select(m && BY_DEC[m[1]] ? Number(m[1]) : 65, {push:false});
