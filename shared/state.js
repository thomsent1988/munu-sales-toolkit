(function(){
  "use strict";
  var STORAGE_KEY = "munu_calc_state";
  var FP_ID = "munuFloatingPanel";

  function getState(){
    try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }catch(e){ return {}; }
  }

  function setCalculator(id, data){
    var state = getState();
    state[id] = data;
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
    renderFloatingPanel();
  }

  function clearCalculator(id){
    var state = getState();
    delete state[id];
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
    renderFloatingPanel();
  }

  function formatKr(n){
    n = Math.round(n || 0);
    var neg = n < 0;
    var s = Math.abs(n).toLocaleString("nb-NO").replace(/ /g, " ");
    return (neg ? "-" : "") + "kr " + s;
  }

  function initFloatingPanel(){
    var el = document.getElementById(FP_ID);
    if(!el){
      el = document.createElement("div");
      el.className = "floating-panel";
      el.id = FP_ID;
      el.innerHTML =
        '<div class="floating-panel-head" id="fpHead">'+
          '<span class="fp-title" data-i18n="fpTitle"></span>'+
          '<span class="fp-total" id="fpTotal"></span>'+
          '<svg viewBox="0 0 24 24"><path d="M6 9 L12 15 L18 9"/></svg>'+
        '</div>'+
        '<div class="floating-panel-body" id="fpBody"></div>';
      document.body.appendChild(el);
      document.getElementById("fpHead").addEventListener("click", function(){
        el.classList.toggle("collapsed");
      });
      document.addEventListener("munu:langchange", renderFloatingPanel);
    }
    if(window.MunuI18n){ window.MunuI18n.applyLang(window.MunuI18n.getLang()); }
    renderFloatingPanel();
  }

  function renderFloatingPanel(){
    var el = document.getElementById(FP_ID);
    if(!el) return;
    var lang = window.MunuI18n ? window.MunuI18n.getLang() : "no";
    var state = getState();
    var included = Object.keys(state).map(function(k){ return state[k]; }).filter(function(c){ return c && c.includedInTotal; });
    var total = included.reduce(function(sum,c){ return sum + (c.annualNetResult || 0); }, 0);
    var totalEl = document.getElementById("fpTotal");
    if(totalEl) totalEl.textContent = formatKr(total);
    var body = document.getElementById("fpBody");
    if(!body) return;
    if(included.length === 0){
      var emptyText = lang === "no" ? "Ingen kalkulatorer inkludert enda" : "No calculators included yet";
      body.innerHTML = '<p class="fp-empty">'+emptyText+'</p>';
      return;
    }
    body.innerHTML = included.map(function(c){
      var label = (c.label && c.label[lang]) ? c.label[lang] : "";
      return '<div class="fp-line"><span>'+label+'</span><b>'+formatKr(c.annualNetResult || 0)+'</b></div>';
    }).join("");
  }

  window.MunuState = {
    getState:getState, setCalculator:setCalculator, clearCalculator:clearCalculator,
    formatKr:formatKr, initFloatingPanel:initFloatingPanel, renderFloatingPanel:renderFloatingPanel
  };
})();
