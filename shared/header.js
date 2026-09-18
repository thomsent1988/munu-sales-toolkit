(function(){
  "use strict";

  function injectHeader(opts){
    opts = opts || {};
    var topbar = document.createElement("header");
    topbar.className = "topbar";

    var backHtml = "";
    if(opts.back){
      backHtml =
        '<button type="button" class="back-btn" id="hdrBackBtn">'+
          '<svg viewBox="0 0 24 24"><path d="M15 5 L7 12 L15 19"/></svg>'+
          '<span data-i18n="'+(opts.backKey || "hdrBack")+'"></span>'+
        '</button>';
    }

    topbar.innerHTML =
      '<div class="topbar-left">'+ backHtml +
        '<a class="brand" href="'+opts.homeHref+'"><img src="'+opts.logoSrc+'" alt="munu."></a>'+
      '</div>'+
      '<div class="lang-toggle" role="group" aria-label="Language">'+
        '<button type="button" data-lang="no">NO</button>'+
        '<button type="button" data-lang="en">EN</button>'+
      '</div>';

    document.body.insertBefore(topbar, document.body.firstChild);

    if(opts.back){
      document.getElementById("hdrBackBtn").addEventListener("click", function(){
        window.location.href = opts.back;
      });
    }
    topbar.querySelectorAll(".lang-toggle button").forEach(function(b){
      b.addEventListener("click", function(){ window.MunuI18n.setLang(b.dataset.lang); });
    });

    if(window.MunuI18n){ window.MunuI18n.applyLang(window.MunuI18n.getLang()); }
  }

  window.MunuHeader = { inject:injectHeader };
})();
