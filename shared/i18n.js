(function(){
  "use strict";
  var STORAGE_KEY = "munu_lang";

  var STRINGS = {
    no: {
      hdrBack:"Tilbake", hdrBackToMenu:"Tilbake til menyen",
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

      custEyebrow:"MUNU CUSTOMIZED",
      custTitleHtml:"Hva lønner seg for <em>din</em> bedrift?",
      custSub:"Velg om du vil se hva Munu sparer deg for i dag, eller hva vekstmodulene kan gi deg i morgen.",
      custBfyTitle:"Er Munu best for deg?",
      custBfyDesc:"Sammenlign transaksjonskostnad, usynlige kostnader og nedetid mot dagens leverandør.",
      custBfyCta:"Sammenlign kostnader",
      custGrowthTitle:"Vekstpotensial",
      custGrowthDesc:"Se hva Multipay, Booking, Nettbutikk og de andre modulene kan legge til i omsetning.",
      custGrowthCta:"Se vekstmodulene",

      bfyEyebrow:"ER MUNU BEST FOR DEG",
      bfyTitleHtml:"Hva <em>faktisk</em> koster dagens løsning?",
      bfySub:"Tre steder verdien lekker ut i det stille. Fyll inn tallene og se hva Munu sparer.",
      bfyTabTransTitle:"Transaksjonskostnad", bfyTabTransSub:"Gebyr per salg",
      bfyTabInvisTitle:"Usynlige kostnader", bfyTabInvisSub:"Regnskap og stab",
      bfyTabDownTitle:"Nedetid", bfyTabDownSub:"Tapt omsetning ved stopp",
      bfyTransOmsetning:"Omsetning per år", bfyTransAntall:"Antall transaksjoner per år",
      bfyTransKonkHead:"Nåværende leverandør", bfyTransKonkProsent:"Transaksjonsprosent",
      bfyTransKonkLisens:"Lisenser per måned", bfyTransKonkHw:"Hardware per måned",
      bfyTransMunuHead:"Munu", bfyTransMunuProsent:"Transaksjonsprosent",
      bfyTransMunuBehandling:"Behandlingsgebyr per ordre", bfyTransMunuLisens:"Lisenser per måned", bfyTransMunuHw:"Hardware per måned",
      bfyResKonkKost:"Kostnad i dag per år", bfyResMunuKost:"Kostnad med Munu per år",
      bfyInvisFrekvens:"Rapporteringsfrekvens", bfyFreqWeek:"Ukentlig", bfyFreqMonth:"Månedlig", bfyFreqQuarter:"Kvartalsvis",
      bfyInvisRegnPris:"Regnskapsførers timepris", bfyInvisRegnMin:"Minutter brukt per rapport",
      bfyInvisStabPris:"Intern stab, timekost", bfyInvisStabMin:"Minutter brukt per uke",
      bfyResRegnKost:"Regnskapskostnad per år", bfyResStabKost:"Stabskostnad per år",
      bfyDownOmsetningTime:"Omsetning per time", bfyDownVarighet:"Varighet per hendelse (timer)",
      bfyDownTapsandel:"Tapsandel av omsetning", bfyDownHendelserKonk:"Hendelser per år, nåværende leverandør",
      bfyDownHendelserMunu:"Hendelser per år, Munu", bfyResKostPerHendelse:"Kostnad per hendelse",
      bfyResSavings:"Besparelse per år",
      bfyInclude:"Inkluder i total", bfyCtaLine:"Klar for å se full oversikt over gevinsten?",

      grwEyebrow:"VEKSTPOTENSIAL",
      grwTitleHtml:"Hva kan <em>vekst</em>modulene gi deg?",
      grwSub:"Velg modulene du vil se på. Tallene stables i panelet til høyre.",
      grwModuleHint:"Kryss av modulene du vil regne på",
      grwModRegnskap:"Regnskapsintegrasjon", grwModMultipay:"Multipay", grwModBooking:"Booking",
      grwModWebshop:"Nettbutikk", grwModKiosk:"Kiosk", grwModQr:"Selvbetjent QR",
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
      grwWsModulkost:"Nettbutikk, kostnad per måned",
      grwKiArsverk:"Årsverk spart", grwKiLonn:"Snitt årslønn", grwKiModulkost:"Kiosk, kostnad per måned",
      grwQrSnittordreFor:"Snittordre i dag", grwQrOkning:"Økning i snittordre",
      grwQrAntallOrdrer:"Ordrer per måned", grwQrBemanningskutt:"Eventuelt bemanningskutt (årsverk)",
      grwQrModulkost:"Selvbetjent QR, kostnad per måned",

      resRevenueIncrease:"Økt omsetning per år", resSavings:"Besparelse per år",
      resModuleCost:"Modulkostnad per år", resNet:"Netto effekt per år"
    },
    en: {
      hdrBack:"Back", hdrBackToMenu:"Back to menu",
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

      custEyebrow:"MUNU CUSTOMIZED",
      custTitleHtml:"What pays off for <em>your</em> business?",
      custSub:"Choose whether to see what Munu saves you today, or what the growth modules could add tomorrow.",
      custBfyTitle:"Is Munu best for you?",
      custBfyDesc:"Compare transaction cost, hidden costs and downtime against the current provider.",
      custBfyCta:"Compare costs",
      custGrowthTitle:"Growth potential",
      custGrowthDesc:"See what Multipay, Booking, Webshop and the other modules can add to revenue.",
      custGrowthCta:"See the growth modules",

      bfyEyebrow:"IS MUNU BEST FOR YOU",
      bfyTitleHtml:"What does the current setup <em>actually</em> cost?",
      bfySub:"Three places value quietly leaks out. Fill in the numbers and see what Munu saves.",
      bfyTabTransTitle:"Transaction cost", bfyTabTransSub:"Fee per sale",
      bfyTabInvisTitle:"Hidden costs", bfyTabInvisSub:"Accounting and staff",
      bfyTabDownTitle:"Downtime", bfyTabDownSub:"Lost revenue from outages",
      bfyTransOmsetning:"Revenue per year", bfyTransAntall:"Transactions per year",
      bfyTransKonkHead:"Current provider", bfyTransKonkProsent:"Transaction fee",
      bfyTransKonkLisens:"Licenses per month", bfyTransKonkHw:"Hardware per month",
      bfyTransMunuHead:"Munu", bfyTransMunuProsent:"Transaction fee",
      bfyTransMunuBehandling:"Processing fee per order", bfyTransMunuLisens:"Licenses per month", bfyTransMunuHw:"Hardware per month",
      bfyResKonkKost:"Current cost per year", bfyResMunuKost:"Cost with Munu per year",
      bfyInvisFrekvens:"Reporting frequency", bfyFreqWeek:"Weekly", bfyFreqMonth:"Monthly", bfyFreqQuarter:"Quarterly",
      bfyInvisRegnPris:"Accountant's hourly rate", bfyInvisRegnMin:"Minutes spent per report",
      bfyInvisStabPris:"Internal staff, hourly cost", bfyInvisStabMin:"Minutes spent per week",
      bfyResRegnKost:"Accounting cost per year", bfyResStabKost:"Staff cost per year",
      bfyDownOmsetningTime:"Revenue per hour", bfyDownVarighet:"Duration per incident (hours)",
      bfyDownTapsandel:"Share of revenue lost", bfyDownHendelserKonk:"Incidents per year, current provider",
      bfyDownHendelserMunu:"Incidents per year, Munu", bfyResKostPerHendelse:"Cost per incident",
      bfyResSavings:"Savings per year",
      bfyInclude:"Include in total", bfyCtaLine:"Ready to see the full overview of the gain?",

      grwEyebrow:"GROWTH POTENTIAL",
      grwTitleHtml:"What can the <em>growth</em> modules add?",
      grwSub:"Choose the modules to look at. The numbers stack in the panel on the right.",
      grwModuleHint:"Tick the modules you want to calculate",
      grwModRegnskap:"Accounting integration", grwModMultipay:"Multipay", grwModBooking:"Booking",
      grwModWebshop:"Webshop", grwModKiosk:"Kiosk", grwModQr:"Self-service QR",
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
      grwWsModulkost:"Webshop, cost per month",
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
