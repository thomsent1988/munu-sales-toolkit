(function(){
  "use strict";
  var STORAGE_KEY = "munu_calc_state";

  function getState(){
    try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }catch(e){ return {}; }
  }

  function setCalculator(id, data){
    var state = getState();
    state[id] = data;
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }

  function clearCalculator(id){
    var state = getState();
    delete state[id];
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }

  function formatKr(n){
    n = Math.round(n || 0);
    var neg = n < 0;
    var s = Math.abs(n).toLocaleString("nb-NO").replace(/ /g, " ");
    return (neg ? "-" : "") + "kr " + s;
  }

  function totalNet(){
    var state = getState();
    return Object.keys(state).reduce(function(sum, k){
      var c = state[k];
      return sum + ((c && c.includedInTotal) ? (c.annualNetResult || 0) : 0);
    }, 0);
  }

  window.MunuState = {
    getState:getState, setCalculator:setCalculator, clearCalculator:clearCalculator,
    formatKr:formatKr, totalNet:totalNet
  };
})();
