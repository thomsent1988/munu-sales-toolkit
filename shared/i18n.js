(function(){
  "use strict";
  var STORAGE_KEY = "munu_lang";

  var STRINGS = {
    no: {
      hdrBack:"Tilbake",
      fpTitle:"Din estimerte gevinst",

      idxEyebrow:"MUNU SALES TOOLKIT",
      idxTitleHtml:"Vis verdien av <em>Munu</em>, tall for tall",
      idxSub:"Ett verktøy for produktpresentasjon, og for å regne ut hva Munu faktisk betyr for kundens bunnlinje.",
      idxOrbitTitle:"Munu Orbit",
      idxOrbitDesc:"Lær om produktene våre",
      idxOrbitCta:"Utforsk produkthjulet",
      idxCustTitle:"Munu Customized",
      idxCustDesc:"Regn ut hva som lønner seg for din bedrift",
      idxCustCta:"Start kalkulatoren",

      bfyEyebrow:"MUNU - NO HIDDEN COSTS",
      bfyTitleHtml:"Find the <em>leak</em>",
      bfySub:"Kryss av det som er relevant for din bedrift, og se effekten bygge seg opp i sanntid.",

      bfyTransBoxTitle:"Transaksjonskostnad",
      bfyTransOmsetning:"Omsetning per år",
      bfyTransAntall:"Antall transaksjoner per år",
      bfyTransKonkHead:"Nåværende leverandør",
      bfyTransKonkProsent:"Transaksjonsprosent",
      bfyTransMunuHead:"Munu",
      bfyTransMunuProsent:"Transaksjonsprosent",
      fieldProcessingFee:"Behandlingsgebyr per ordre",
      bfyTotalFixedCost:"Månedlige faste kostnader totalt",
      bfyResKonkKost:"Kostnad i dag per år",
      bfyResMunuKost:"Kostnad med Munu per år",
      bfyResSavings:"Besparelse per år",
      bfySetupTotal:"Engangskostnad oppsett",

      hwSectionHead:"Munu maskinvare",
      hwKasse:"Kasse", hwPrinter:"Printer", hwAdyenTerminal:"Adyen bankterminal", hwAdyenPos:"Adyen med POS",
      hwQty:"Antall", hwPriceMonth:"Pris per måned", hwSetupUnit:"Engangskostnad oppsett per enhet",

      breakevenRevenue:"Breakeven omsetning",
      breakevenRevenueYear:"Breakeven ekstra omsetning per år",
      breakevenRevenueMonth:"Breakeven ekstra omsetning per måned",
      breakevenSavings:"Breakeven besparelse",
      breakevenFte:"Breakeven årsverk spart",
      alwaysProfitable:"Alltid lønnsomt med disse tallene",
      neverProfitable:"Ikke lønnsomt med disse tallene",

      grwModuleHint:"Kryss av modulene du vil regne på",
      grwModTrans:"Transaksjonskostnad",
      grwModRegnskap:"Regnskapsintegrasjon", grwModMultipay:"Multipay", grwModBooking:"Booking",
      grwModWebshop:"Webshop Takeaway", grwModKiosk:"Kiosk", grwModQr:"Selvbetjent QR",

      bfyInvisFrekvens:"Rapporteringsfrekvens", bfyFreqWeek:"Ukentlig", bfyFreqMonth:"Månedlig", bfyFreqQuarter:"Kvartalsvis",
      bfyInvisRegnPris:"Regnskapsførers timepris", bfyInvisRegnMin:"Minutter brukt per rapport",
      bfyInvisStabPris:"Intern stab, timekost", bfyInvisStabMin:"Minutter brukt per uke",
      bfyResRegnKost:"Regnskapskostnad per år", bfyResStabKost:"Stabskostnad per år",
      grwRegnModulkost:"Regnskapsintegrasjon, kostnad per måned",
      grwRegnSetup:"Engangskostnad oppsett",

      grwMpDaily:"Daglig omsetning drikke", grwMpPeakShare:"Andel omsetning i peak hours",
      grwMpHelgedager:"Antall helgedager per år", grwMpGrowth:"Estimert vekst i peak hours",
      grwMpGrowthCustom:"Eller skriv inn egen prosent", grwMpModulkost:"Multipay, kostnad per måned",
      grwResPerHelgedag:"Ekstra per helgedag", grwResPerHelg:"Ekstra per helg (fre + lør)",
      grwResPerMnd:"Ekstra per måned", grwResPerAr:"Ekstra per år",
      grwResVekstProsent:"Vekst av omsetning i helgedager",

      grwBkSnittbord:"Snitt bordverdi", grwBkAntall:"Bookinger per måned",
      grwBkNoShowFor:"No-show-rate i dag", grwBkNoShowEtter:"No-show-rate med Munu",
      grwBkModulkost:"Booking, kostnad per måned",

      grwWsEkstraOms:"Ekstra omsetning per måned", grwWsMargin:"Bruttomargin",
      grwWsDrift:"Driftskostnad per måned", grwWsTrans:"Transaksjonsprosent",
      grwWsModulkost:"Webshop Takeaway, kostnad per måned",

      grwKiArsverk:"Årsverk spart", grwKiLonn:"Snitt årslønn", grwKiModulkost:"Kiosk, kostnad per måned",

      grwQrSnittordreFor:"Snittordre i dag", grwQrOkning:"Økning i snittordre",
      grwQrAntallOrdrer:"Ordrer per måned", grwQrBemanningskutt:"Eventuelt bemanningskutt (årsverk)",
      grwQrModulkost:"Selvbetjent QR, kostnad per måned",

      resRevenueIncrease:"Økt omsetning per år", resSavings:"Besparelse per år",
      resModuleCost:"Modulkostnad per år", resNet:"Netto effekt per år"
    },
    en: {
      hdrBack:"Back",
      fpTitle:"Your estimated gain",

      idxEyebrow:"MUNU SALES TOOLKIT",
      idxTitleHtml:"Show the value of <em>Munu</em>, number by number",
      idxSub:"One toolkit for walking through the product, and for working out what Munu actually means for the customer's bottom line.",
      idxOrbitTitle:"Munu Orbit",
      idxOrbitDesc:"Learn about our products",
      idxOrbitCta:"Explore the product wheel",
      idxCustTitle:"Munu Customized",
      idxCustDesc:"Calculate what pays off for your business",
      idxCustCta:"Start the calculator",

      bfyEyebrow:"MUNU - NO HIDDEN COSTS",
      bfyTitleHtml:"Find the <em>leak</em>",
      bfySub:"Tick what's relevant for your business, and watch the effect build up in real time.",

      bfyTransBoxTitle:"Transaction cost",
      bfyTransOmsetning:"Revenue per year",
      bfyTransAntall:"Transactions per year",
      bfyTransKonkHead:"Current provider",
      bfyTransKonkProsent:"Transaction fee",
      bfyTransMunuHead:"Munu",
      bfyTransMunuProsent:"Transaction fee",
      fieldProcessingFee:"Processing fee per order",
      bfyTotalFixedCost:"Total fixed costs per month",
      bfyResKonkKost:"Current cost per year",
      bfyResMunuKost:"Cost with Munu per year",
      bfyResSavings:"Savings per year",
      bfySetupTotal:"One-time setup cost",

      hwSectionHead:"Munu hardware",
      hwKasse:"Till", hwPrinter:"Printer", hwAdyenTerminal:"Adyen card terminal", hwAdyenPos:"Adyen with POS",
      hwQty:"Quantity", hwPriceMonth:"Price per month", hwSetupUnit:"One-time setup cost per unit",

      breakevenRevenue:"Breakeven revenue",
      breakevenRevenueYear:"Breakeven extra revenue per year",
      breakevenRevenueMonth:"Breakeven extra revenue per month",
      breakevenSavings:"Breakeven savings",
      breakevenFte:"Breakeven FTEs saved",
      alwaysProfitable:"Always profitable with these numbers",
      neverProfitable:"Not profitable with these numbers",

      grwModuleHint:"Tick the modules you want to calculate",
      grwModTrans:"Transaction cost",
      grwModRegnskap:"Accounting integration", grwModMultipay:"Multipay", grwModBooking:"Booking",
      grwModWebshop:"Webshop Takeaway", grwModKiosk:"Kiosk", grwModQr:"Self-service QR",

      bfyInvisFrekvens:"Reporting frequency", bfyFreqWeek:"Weekly", bfyFreqMonth:"Monthly", bfyFreqQuarter:"Quarterly",
      bfyInvisRegnPris:"Accountant's hourly rate", bfyInvisRegnMin:"Minutes spent per report",
      bfyInvisStabPris:"Internal staff, hourly cost", bfyInvisStabMin:"Minutes spent per week",
      bfyResRegnKost:"Accounting cost per year", bfyResStabKost:"Staff cost per year",
      grwRegnModulkost:"Accounting integration, cost per month",
      grwRegnSetup:"One-time setup cost",

      grwMpDaily:"Daily drinks revenue", grwMpPeakShare:"Share of revenue in peak hours",
      grwMpHelgedager:"Weekend days per year", grwMpGrowth:"Estimated growth in peak hours",
      grwMpGrowthCustom:"Or enter your own percentage", grwMpModulkost:"Multipay, cost per month",
      grwResPerHelgedag:"Extra per weekend day", grwResPerHelg:"Extra per weekend (Fri + Sat)",
      grwResPerMnd:"Extra per month", grwResPerAr:"Extra per year",
      grwResVekstProsent:"Growth of weekend-day revenue",

      grwBkSnittbord:"Average table value", grwBkAntall:"Bookings per month",
      grwBkNoShowFor:"No-show rate today", grwBkNoShowEtter:"No-show rate with Munu",
      grwBkModulkost:"Booking, cost per month",

      grwWsEkstraOms:"Extra revenue per month", grwWsMargin:"Gross margin",
      grwWsDrift:"Operating cost per month", grwWsTrans:"Transaction fee",
      grwWsModulkost:"Webshop Takeaway, cost per month",

      grwKiArsverk:"FTEs saved", grwKiLonn:"Average annual salary", grwKiModulkost:"Kiosk, cost per month",

      grwQrSnittordreFor:"Average order today", grwQrOkning:"Increase in average order",
      grwQrAntallOrdrer:"Orders per month", grwQrBemanningskutt:"Optional staffing cut (FTEs)",
      grwQrModulkost:"Self-service QR, cost per month",

      resRevenueIncrease:"Increased revenue per year", resSavings:"Savings per year",
      resModuleCost:"Module cost per year", resNet:"Net effect per year"
    }
  };

  function getLang(){
    try{
      var l = localStorage.getItem(STORAGE_KEY);
      if(l === "no" || l === "en") return l;
    }catch(e){}
    return "no";
  }

  function applyLang(lang){
    var dict = STRINGS[lang] || STRINGS.no;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var key = el.getAttribute("data-i18n-html");
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){
      var key = el.getAttribute("data-i18n-placeholder");
      if(dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function(b){
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
  }

  function setLang(lang){
    if(lang !== "no" && lang !== "en") return;
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
    applyLang(lang);
    document.dispatchEvent(new CustomEvent("munu:langchange", { detail:{ lang:lang } }));
  }

  function t(key){
    var dict = STRINGS[getLang()] || STRINGS.no;
    return dict[key] !== undefined ? dict[key] : key;
  }

  document.addEventListener("DOMContentLoaded", function(){ applyLang(getLang()); });

  window.MunuI18n = { STRINGS:STRINGS, getLang:getLang, setLang:setLang, applyLang:applyLang, t:t };
})();
