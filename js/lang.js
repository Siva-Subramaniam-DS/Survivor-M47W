/**
 * Survivor M47W — Multi-Language Switcher
 * Uses Google Translate Embed API (free, no API key needed)
 * Supports 13 languages | Persists choice via localStorage
 */

(function () {
  const LANGUAGES = [
    { code: "en",    flag: "🇺🇸", label: "USA - English" },
    { code: "en-GB", flag: "🇬🇧", label: "UK - English" },
    { code: "en-IN", flag: "🇮🇳", label: "Indian English" },
    { code: "el",    flag: "🇬🇷", label: "Greek (Ελληνικά)" },
    { code: "id",    flag: "🇮🇩", label: "Indonesia (Bahasa)" },
    { code: "ar",    flag: "🇸🇦", label: "Arabic (العربية)" },
    { code: "ko",    flag: "🇰🇷", label: "Korean (한국어)" },
    { code: "ja",    flag: "🇯🇵", label: "Japanese (日本語)" },
    { code: "zh-CN", flag: "🇨🇳", label: "Chinese (中文)" },
    { code: "es",    flag: "🇪🇸", label: "Spain (Español)" },
    { code: "fr",    flag: "🇫🇷", label: "France (Français)" },
    { code: "de",    flag: "🇩🇪", label: "German (Deutsch)" },
    { code: "ru",    flag: "🇷🇺", label: "Russia (Русский)" }
  ];
  const RTL_LANGS = ["ar"];
  const STORAGE_KEY = "survivor_lang";

  function googleTranslateElementInit() {
    if (typeof google === "undefined" || !google.translate) return;
    new google.translate.TranslateElement(
      { pageLanguage: "en", autoDisplay: false },
      "google_translate_element"
    );
  }
  window.googleTranslateElementInit = googleTranslateElementInit;

  function setLanguage(code) {
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.setAttribute("dir", RTL_LANGS.includes(code) ? "rtl" : "ltr");
    const trySelect = () => {
      const sel = document.querySelector(".goog-te-combo");
      if (sel) { sel.value = code; sel.dispatchEvent(new Event("change")); }
    };
    trySelect();
    setTimeout(trySelect, 1200);
    document.querySelectorAll(".lang-opt").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === code);
    });
    closeLangPanel();
  }

  function openLangPanel() {
    const panel = document.getElementById("langPanel");
    const btn   = document.getElementById("langFloatBtn");
    if (!panel) return;
    const isOpen = panel.classList.contains("open");
    panel.classList.toggle("open", !isOpen);
    if (btn) btn.setAttribute("aria-expanded", String(!isOpen));
  }

  function closeLangPanel() {
    const panel = document.getElementById("langPanel");
    const btn   = document.getElementById("langFloatBtn");
    if (panel) panel.classList.remove("open");
    if (btn)   btn.setAttribute("aria-expanded", "false");
  }

  function buildWidget() {
    if (!document.getElementById("google_translate_element")) {
      const gtDiv = document.createElement("div");
      gtDiv.id = "google_translate_element";
      gtDiv.style.cssText = "position:absolute;left:-9999px;top:-9999px;visibility:hidden;";
      document.body.appendChild(gtDiv);
    }

    const saved = localStorage.getItem(STORAGE_KEY) || "en";
    const buttonsHtml = LANGUAGES.map(l =>
      '<button class="lang-opt' + (l.code === saved ? " active" : "") + '" data-lang="' + l.code + '" type="button"><span class="flag">' + l.flag + "</span> " + l.label + "</button>"
    ).join("");

    const widget = document.createElement("div");
    widget.id = "langWidget";
    widget.innerHTML =
      '<button id="langFloatBtn" class="lang-float-btn" aria-label="Choose Language" aria-expanded="false" aria-haspopup="true" type="button">' +
        '🌐 <span class="lang-float-label">Language</span>' +
      "</button>" +
      '<div id="langPanel" class="lang-panel" role="dialog" aria-label="Language selector">' +
        '<div class="lang-panel-header">' +
          "<span>🌐 Select Language</span>" +
          '<button class="lang-panel-close" id="langPanelClose" type="button" aria-label="Close">✕</button>' +
        "</div>" +
        '<div class="lang-opts-grid">' + buttonsHtml + "</div>" +
      "</div>";
    document.body.appendChild(widget);

    document.getElementById("langFloatBtn").addEventListener("click", openLangPanel);
    document.getElementById("langPanelClose").addEventListener("click", closeLangPanel);
    document.addEventListener("click", e => {
      if (!e.target.closest("#langWidget")) closeLangPanel();
    });
    document.querySelectorAll(".lang-opt").forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    if (saved && saved !== "en") setTimeout(() => setLanguage(saved), 900);
    document.documentElement.setAttribute("dir", RTL_LANGS.includes(saved) ? "rtl" : "ltr");
  }

  function loadGT() {
    if (document.getElementById("gt-script")) return;
    const s = document.createElement("script");
    s.id = "gt-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.head.appendChild(s);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { buildWidget(); loadGT(); });
  } else {
    buildWidget();
    loadGT();
  }
})();
