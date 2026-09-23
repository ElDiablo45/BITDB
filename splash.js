(function () {
  var KEY = "radixref_seen_v1";
  function getC(n) {
    try {
      var m = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) { return null; }
  }
  function setC(n, v, days) {
    try {
      var d = new Date();
      d.setTime(d.getTime() + days * 864e5);
      document.cookie = n + "=" + encodeURIComponent(v) +
        ";max-age=" + days * 86400 + ";expires=" + d.toUTCString() +
        ";path=/;SameSite=Lax";
    } catch (e) { /* file:// u otros contextos sin cookies: el splash se muestra siempre */ }
  }
  var splash = document.getElementById("splash");
  if (!splash) return;
  if (getC(KEY) === "1") { splash.hidden = true; return; }
  var enter = document.getElementById("sEnter");
  var avatar = document.getElementById("sAvatar");
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var rafFn = (window.requestAnimationFrame || function (f) { f(); return 0; });
  var done = false;
  splash.hidden = false;
  document.body.classList.add("locked");
  if (reduced) {
    var svg0 = splash.querySelector("svg");
    if (svg0 && svg0.pauseAnimations) { try { svg0.pauseAnimations(); } catch (e) {} }
  }
  function dismiss() {
    if (done) return;
    done = true;
    setC(KEY, "1", 30);
    splash.classList.add("hide");
    window.setTimeout(function () {
      splash.hidden = true;
      if (splash.remove) { try { splash.remove(); } catch (e) {} }
      document.body.classList.remove("locked");
      var q = document.getElementById("q");
      if (q && q.focus) { try { q.focus({ preventScroll: true }); } catch (e) { q.focus(); } }
    }, 180);
    window.setTimeout(function () { splash.style.display = "none"; }, 800);
  }
  enter.addEventListener("click", dismiss);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") dismiss(); });
  function boing() {
    if (reduced) return;
    avatar.classList.remove("boing");
    void avatar.offsetWidth;
    avatar.classList.add("boing");
  }
  avatar.addEventListener("click", boing);
  avatar.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); boing(); }
  });
  // Los ojos siguen al cursor: la propiedad CSS `translate` se compone con
  // el `transform` de los keyframes (parpadeo), no lo sustituye.
  var EYES = [{ x: -13, y: -6 }, { x: 29, y: -9 }];
  var pupils = splash.querySelectorAll(".oeil0,.oeil1");
  var raf = 0;
  function aim(cx, cy) {
    var svg = avatar.querySelector("svg");
    if (!svg || !svg.getBoundingClientRect) return;
    var r = svg.getBoundingClientRect();
    if (!r.width) return;
    var k = r.width / 250;
    for (var i = 0; i < pupils.length && i < EYES.length; i++) {
      var ex = r.left + (EYES[i].x + 125) * k;
      var ey = r.top + (EYES[i].y + 125) * k;
      var dx = cx - ex, dy = cy - ey;
      var d = Math.hypot(dx, dy) || 1;
      var m = Math.min(d, 5 * k) / d;
      pupils[i].style.translate = (dx * m).toFixed(1) + "px " + (dy * m).toFixed(1) + "px";
    }
  }
  if (!reduced && pupils.length) {
    splash.addEventListener("pointermove", function (e) {
      if (raf || e.clientX === undefined) return;
      var x = e.clientX, y = e.clientY;
      raf = rafFn(function () { raf = 0; aim(x, y); });
    });
    // Sin recenter los ojos se quedaban "pillados" en el último offset
    splash.addEventListener("pointerleave", recenter);
    splash.addEventListener("pointercancel", recenter);
  }
  function recenter() {
    for (var i = 0; i < pupils.length; i++) pupils[i].style.translate = "0px 0px";
  }
})();
