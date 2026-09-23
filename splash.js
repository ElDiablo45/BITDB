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
  var done = false;
  splash.hidden = false;
  document.body.classList.add("locked");
  if (reduced) {
    var svg = splash.querySelector("svg");
    if (svg && svg.pauseAnimations) { try { svg.pauseAnimations(); } catch (e) {} }
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
  avatar.addEventListener("click", function () {
    if (reduced) return;
    avatar.classList.remove("boing");
    void avatar.offsetWidth;
    avatar.classList.add("boing");
  });
})();
