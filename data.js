/* =====================================================================
   বিদেশযাত্রা যাচাই — DATA FILE
   ---------------------------------------------------------------------
   This is the only file you need to edit to update the app.

   HOW TO EDIT
   - Every number should point to a source in SOURCES (by its id).
   - status:
       "official"  = you have the government circular / gazette itself
       "news"      = reported in a newspaper, official notice not yet found
       "draft"     = written by us, still needs checking
     The app shows a coloured badge for each, so users know how solid it is.
   - Amounts are plain numbers in taka (165000, not "1.65 lakh").
     The app converts them to Bangla digits automatically.
   - Set null where you don't have data yet. The app will say
     "তথ্য সংগ্রহ চলছে" (data being collected) instead of guessing.
   - After editing, change META.lastUpdated.
   ===================================================================== */

window.APP_DATA = {

  META: {
    lastUpdated: "2026-11-08",
    version: "0.1 (পরীক্ষামূলক)",
    // Put the public link here once hosted (used by the Share button)
    siteUrl: "https://dalalnaki.com"
  },

  /* ---------- SOURCES ---------- */
  SOURCES: {
    paSaudiIqama: {
      title: "আকামার মেয়াদ শেষ হলেও সৌদি প্রবেশের সুযোগ পাবেন প্রবাসীরা: প্রবাসীকল্যাণমন্ত্রী — প্রথম আলো",
      url: "https://www.prothomalo.com/bangladesh/1mfvqk17iy",
      date: "2026-10-26"
    },
    dtSaudiIqama: {
      title: "ফ্লাইট বিপর্যয়ে আকামার মেয়াদ শেষ হলেও সৌদিতে প্রবেশের সুযোগ পাবেন প্রবাসীরা — ঢাকা টাইমস",
      url: "https://www.dhakatimes24.com/2026/10/26/415864",
      date: "2026-10-26"
    },
    bssProbashiCard: {
      title: "আগামী মাসের মধ্যে ‘প্রবাসী কার্ডের’ পরীক্ষামূলক প্রকল্পের কাজ চালু করবে সরকার — বাসস",
      url: "https://www.bssnews.net/bangla/news-flash/325043",
      date: "2026-07-18"
    },
    jugBmetCard: {
      title: "প্রবাসী কার্ড চালু হলে বিএমইটি কার্ড থাকবে না: প্রবাসীকল্যাণমন্ত্রী — যুগান্তর",
      url: "https://www.jugantor.com/national/1108459",
      date: "2026-06-02"
    },
    bbProbashiCard: {
      title: "প্রবাসীদের পরিচয় ও মর্যাদা সুরক্ষায় চালু হচ্ছে ‘প্রবাসী কার্ড’ — বার্তা বাজার",
      url: "https://bartabazar.com/news/376142/",
      date: ""
    },
    dsScamGangs: {
      title: "Fears grow over cyber scam gangs gaining foothold — The Daily Star",
      url: "https://www.thedailystar.net/news/bangladesh/news/fears-grow-over-cyber-scam-gangs-gaining-foothold-4283031",
      date: "2026-09-26"
    },
    paRussiaWar: {
      title: "Risky migration: Lured to Russia by promises of jobs, 54 Bangladeshis killed in war in 3 years — Prothom Alo",
      url: "https://en.prothomalo.com/bangladesh/pqmoumnzr2",
      date: "2026-10-21"
    },
    gvDigitalScam: {
      title: "When dreams meet digital recruitment scams: Bangladeshi workers in crisis — Global Voices",
      url: "https://globalvoices.org/2025/11/30/when-dreams-meet-digital-recruitment-scams-bangladeshi-workers-in-crisis/",
      date: "2025-11-30"
    },
    tbs12Countries: {
      title: "Govt restricts emigration clearance for workers heading to 12 countries — The Business Standard",
      url: "https://www.tbsnews.net/bangladesh/govt-restricts-emigration-clearance-workers-heading-12-countries-1593191",
      date: "2026-11-05"
    },
    dhakamail12Countries: {
      title: "মন্ত্রণালয়ের অনুমোদন ছাড়া কর্মী পাঠানো যাবে না যে ১২ দেশে — ঢাকা মেইল",
      url: "https://dhakamail.com/national/340986",
      date: "2026-11-04"
    },
    bt12Countries: {
      title: "মন্ত্রণালয়ের অনুমতি ছাড়া ১২ দেশে কর্মী যেতে ছাড়পত্র ইস্যু বন্ধ — বাংলা ট্রিবিউন",
      url: "https://www.banglatribune.com/national/978875",
      date: "2026-11-04"
    },
    tbs2024: {
      title: "Migration costs for workers still high despite govt assurances — The Business Standard",
      url: "https://www.tbsnews.net/bangladesh/migration/migration-costs-workers-still-high-despite-govt-assurances-1021351",
      date: "2024-12-18"
    },
    tbsMalaysia: {
      title: "Migration cost to Malaysia fixed at Tk78,990 — The Business Standard",
      url: "https://www.tbsnews.net/bangladesh/migration-cost-malaysia-fixed-tk78990-454158",
      date: "2022"
    },
    tbsWelfare: {
      title: "Migrants to pay more as wage earners' welfare fee rises to Tk5,500 — The Business Standard",
      url: "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606",
      date: "2026-09-20"
    },
    paRussia: {
      title: "3 recruiting agencies lose licences over 'fraudulent transfer' of 30 Bangladeshis to Russia — Prothom Alo",
      url: "https://en.prothomalo.com/bangladesh/pfydrq5l7w",
      date: "2026-06-02"
    },
    amiProbashiIvr: {
      title: "Ami Probashi launches IVR service for migrant visa verification — Bangladesh Monitor",
      url: "https://bangladeshmonitor.com.bd/en/ami-probashi-launches-ivr-service-for-migrant-visa-verification",
      date: "2026-01-11"
    },
    dv2026: {
      title: "DV Lottery: Bangladesh, 18 countries not eligible for 2026 — Prothom Alo",
      url: "https://en.prothomalo.com/bangladesh/90dem0dj9j",
      date: ""
    },
    dvEmbassy: {
      title: "No more DV for BD nationals — The Financial Express",
      url: "https://today.thefinancialexpress.com.bd/metro-news/no-more-dv-for-bd-nationals",
      date: ""
    },
    dvFraud: {
      title: "US Embassy warns applicants of visa fraud — The Financial Express",
      url: "https://old.thefinancialexpress.com.bd/national/us-embassy-warns-applicants-of-visa-fraud-1674212437",
      date: "2023"
    },
    dvJago: {
      title: "DV 2027 lottery reopened by court order, eligibility unclear — Jago News 24",
      url: "https://www.jagonews24.com/en/national/news/97335",
      date: ""
    },
    kathmanduCambodia: {
      title: "How Bangladeshi jobseekers are trafficked into Cambodia's scam compounds — The Kathmandu Post",
      url: "https://kathmandupost.com/world/2026/07/16/how-bangladeshi-jobseekers-are-trafficked-into-cambodia-s-scam-compounds",
      date: "2026-07-16"
    },
    dsLabourWall: {
      title: "Labour migration hits a wall with several key markets shut — The Daily Star",
      url: "https://www.thedailystar.net/news/bangladesh/news/labour-migration-hits-wall-several-key-markets-shut-4138856",
      date: "2026-03"
    },
    dsUaeCancel: {
      title: "UAE cancels visas of over 4,000 Bangladeshis — The Daily Star",
      url: "https://www.thedailystar.net/news/bangladesh/news/uae-cancels-visas-over-4000-bangladeshis-4273081",
      date: "2026-09"
    },
    dsMaldives: {
      title: "The Maldives suspends work visas for Bangladeshis — The Daily Star",
      url: "https://www.thedailystar.net/news/bangladesh/news/the-maldives-suspends-work-visas-bangladeshis-3617841",
      date: ""
    },
    tbsQatarRumour: {
      title: "Qatar visa ban on Bangladeshis a rumour: Ministry — The Business Standard",
      url: "https://www.tbsnews.net/bangladesh/qatar-visa-ban-bangladeshis-rumour-ministry-1266071",
      date: "2025"
    },
    bdn24Market: {
      title: "Bangladesh's overseas labour market shrinks as Saudi Arabia takes over half — bdnews24",
      url: "https://bdnews24.com/diaspora/e5dfaf80f9fa",
      date: "2026-08"
    },
    bonikJapan: {
      title: "Bangladesh's overseas labour market now almost limited to Saudi Arabia — Bonik Barta",
      url: "https://en.bonikbarta.com/bangladesh/8mJvv4wPYmw3caJO",
      date: ""
    },
    dsMalaysia: {
      title: "Govt sets Tk 78,990 max migration cost for workers going to Malaysia — The Daily Star",
      url: "https://www.thedailystar.net/nrb/migration/news/govt-sets-tk-78990-max-migration-cost-bangladesh-workers-going-malaysia-3066141",
      date: "2022"
    },
    dsSaudi: {
      title: "Saudi job for Tk 1.65 lakh — The Daily Star",
      url: "https://www.thedailystar.net/frontpage/saudi-job-tk-165-lakh-1278076",
      date: "2016-08-30"
    },
    gvMalaysia2026: {
      title: "Bangladesh-Malaysia recruitment reforms revive old questions over the cost of migration — Global Voices",
      url: "https://globalvoices.org/2026/10/12/bangladesh-malaysia-recruitment-reforms-revive-old-questions-over-the-cost-of-migration/",
      date: "2026-10-12"
    },
    oep: {
      title: "BMET Overseas Employment Platform — agency search",
      url: "https://oep.gov.bd/agencies",
      date: ""
    },
    libyaMonitor: {
      title: "Libya reaffirms commitment to recruiting Bangladeshi workers — Bangladesh Monitor",
      url: "https://www.bangladeshmonitor.com.bd/en/libya-reaffirms-commitment-to-recruiting-bangladeshi-workers",
      date: ""
    },
    dsRomania: {
      title: "Romania labour market opening up — The Daily Star",
      url: "https://www.thedailystar.net/nrb/migration/news/romania-labour-market-opening-3095856",
      date: ""
    },
    paItalyExpert: {
      title: "Best environment prevailing to go to Italy through the legal process: Expert — Prothom Alo",
      url: "https://en.prothomalo.com/bangladesh/xol639y4vx",
      date: ""
    },
    koreaQuota: {
      title: "Only 37% of South Korea quota for Bangladeshi workers filled over five years — Bonik Barta",
      url: "https://en.bonikbarta.com/bangladesh/pkKgcbRkEm2eZOVa",
      date: ""
    },
    tbsRomania: {
      title: "Bangladeshi migrants find Romania far from European dream — The Business Standard",
      url: "https://www.tbsnews.net/node/627406",
      date: ""
    },
    paItaly: {
      title: "Why fewer workers going to Italy despite potential job scope — Prothom Alo",
      url: "https://en.prothomalo.com/bangladesh/3o1fw16h24",
      date: ""
    },
    dsLibyaReturn: {
      title: "174 Bangladeshis return from Libya — The Daily Star",
      url: "https://online91.thedailystar.net/nrb/migration?page=18",
      date: "2026-09-01"
    },
    baira: {
      title: "BAIRA member list",
      url: "https://baira.org.bd/dir/all-member-list",
      date: ""
    },

    /* --- statistics (added 2026-11) --- */
    bmet2025: { title: "Around 1.13 Million Bangladeshis Fly Abroad for Jobs in 2025 (BMET data) — Bangladesh Monitor", url: "https://bangladeshmonitor.com.bd/en/around-113-million-bangladeshis-fly-abroad-for-jobs-in-2025", date: "2026-01" },
    bmet1976: { title: "Bangladesh hits 15m overseas workers milestone (BMET data 1976–2023) — Business Post", url: "https://businesspostbd.com/front/bangladesh-hits-15m-overseas-workers-milestone-2023-04-17", date: "2023-04-17" },
    rmmruUnb: { title: "Bangladesh's overseas labour migration up 12pc in 2025: RMMRU — UNB", url: "https://unb.com.bd/category/Bangladesh/bangladeshs-overseas-labour-migration-up-12pc-in-2025-rmmru/176883", date: "2026-01" },
    rmmruDs: { title: "Labour migration up 12% despite challenges (RMMRU report) — The Daily Star", url: "https://www.thedailystar.net/nrb/migration/news/labour-migration-12-despite-challenges-4075921", date: "2026-01" },
    rmmruFe: { title: "Migration from Bangladesh on rise amid poor govt support (RMMRU) — The Financial Express", url: "https://thefinancialexpress.com.bd/trade/migration-from-bangladesh-on-rise-amid-poor-govt-support", date: "2026-01" },
    wikiDiaspora: { title: "Bangladeshi diaspora (estimates from many sources) — Wikipedia", url: "https://en.wikipedia.org/wiki/Bangladeshi_diaspora", date: "" },
    ukCensus: { title: "Bangladeshi community health profile (Census 2021, England and Wales) — Birmingham City Council", url: "https://www.birmingham.gov.uk/info/50305/community_health_profiles/2771/", date: "" },
    euaa: { title: "Bangladesh Country Focus 2025: Migration profile — EU Agency for Asylum", url: "https://www.euaa.europa.eu/coi/bangladesh/2025/country-focus/86-bangladeshi-nationals-migrating-abroad/861-migration-profile", date: "2025" },
    minister2026: { title: "1.14 crore workers sent to Middle East in 22 years (minister in parliament) — BSS", url: "https://www.bssnews.net/js-session/379700", date: "2026-04-20" },
    feJapan: { title: "Over 1.13m Bangladeshis employed abroad in 2025; 'Japan Cell' formed — The Financial Express", url: "https://thefinancialexpress.com.bd/national/over-113m-bangladeshis-employed-abroad-in-2025", date: "2026-04-06" },
    tbsMay: { title: "Overseas employment back in flow as Saudi recruitment picks up in May — The Business Standard", url: "https://www.tbsnews.net/bangladesh/migration/overseas-employment-back-flow-saudi-recruitment-picks-may-1166881", date: "2025" },
    ittefaqAlt: { title: "1.14cr workers sent to Middle East in 22 years (alternative markets listed) — The Daily Ittefaq", url: "https://en.ittefaq.com.bd/16221/1.14cr-workers-sent-to-middle-east-in-22-years", date: "2026-04" },

    /* --- Europe --- */
    greeceGov: { title: "Visit of the Minister of Migration and Asylum to Bangladesh (seasonal work permits) — Greek Ministry of Migration", url: "https://migration.gov.gr/en/?p=31347", date: "2022-02" },
    tbsGreece: { title: "Greece to start recruiting Bangladeshi workers soon — The Business Standard", url: "https://www.tbsnews.net/node/484110", date: "2022" },
    dsGreeceDelay: { title: "A year since deal inked, Greece yet to hire Bangladeshis — The Daily Star", url: "https://www.thedailystar.net/node/3272306", date: "2023" },
    tbsEurope: { title: "Bangladesh's heavy Saudi dependence in manpower export continues as other markets shrink — The Business Standard", url: "https://www.tbsnews.net/node/1061291", date: "2025" },
    polandFe: { title: "Bangladeshis in doldrums about jobs in Europe — The Financial Express", url: "https://thefinancialexpress.com.bd/national/bangladeshis-in-doldrums-about-jobs-in-europe", date: "2024" },
    paDelhi: { title: "CA for resolving visa complexities to expand labour market in Eastern Europe — Prothom Alo", url: "https://en.prothomalo.com/bangladesh/3u819f8h1i", date: "" },
    ukCare: { title: "Soaring abuse in UK care jobs shatters migrants' dreams — Context (Thomson Reuters Foundation)", url: "https://www.context.news/socioeconomic-inclusion/long-read/soaring-abuse-in-uk-care-jobs-shatters-migrants-dreams", date: "" },
    bosniaDetain: { title: "36 Bangladeshis among 96 detained at Bosnia border — Dhaka Tribune", url: "https://www.dhakatribune.com/bangladesh/migration/419044/bosnia-border-police-detain-36-bangladeshis", date: "2026-09-03" },
    observerBalkan: { title: "96 migrants detained on Bosnia-Croatia border — The Daily Observer", url: "https://observerbd.com/news/591780", date: "2026-09-05" },
    bonikEurope: { title: "Nearly 98,000 Bangladeshis migrate illegally to Europe in five years — Bonik Barta", url: "https://en.bonikbarta.com/bangladesh/VQHz2VqTzKVHu8Hj/", date: "2025" },

    /* --- Africa, Asia, Americas, Oceania --- */
    mauritius2026: { title: "Bangladesh's labour market in Mauritius set to reopen soon — BSS", url: "https://b.bssnews.net/news-flash/393674", date: "2026-06-08" },
    seychellesDs: { title: "New Labour Market Beckons: Migrants fly to Seychelles — The Daily Star", url: "https://online91.thedailystar.net/nrb/migration/news/new-labour-market-beckons-migrants-fly-seychelles-2157661", date: "" },
    saMurder: { title: "Murders in a distant land (Bangladeshis in South Africa) — The Daily Star", url: "https://www.thedailystar.net/frontpage/news/murders-distant-land-1806334", date: "2019" },
    saWion: { title: "More than 400 Bangladeshis murdered in South Africa in four years — WION (AFP)", url: "https://www.wionews.com/south-asia/more-than-400-bangladeshis-murdered-in-south-africa-in-four-years-253463", date: "2019-10" },
    mongoliaFe: { title: "Mongolia job market opens as BD sends first batch of 12 workers — The Financial Express", url: "https://thefinancialexpress.com.bd/trade/mongolia-job-market-opens-as-bd-sends-first-batch-of-12-workers", date: "2026" },
    fijiDs: { title: "Fiji to hire more workers from Bangladesh — The Daily Star", url: "https://images.thedailystar.net/node/3121106", date: "" },
    usDeport: { title: "When American dream turns into a nightmare: deported Bangladeshi migrants — The Daily Star", url: "https://online-d11.thedailystar.net/nrb/migration/undocumented/news/when-american-dream-turns-nightmare-4048426", date: "2025-12-01" },

    /* --- irregular routes / Libya / Mediterranean --- */
    starBrac: { title: "Bangladeshis drift to their deaths over 11 days (BRAC/Frontex figures) — The Star / The Daily Star", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/08/18/bangladeshis-drift-to-their-deaths-over-11-days", date: "2026-08-18" },
    dsItaly2024: { title: "11,231 Bangladeshis reached Italy via the Mediterranean in Jan–Oct 2024 (UNHCR) — The Daily Star", url: "https://www.thedailystar.net/node/3802191", date: "2025-01" },
    iom2025: { title: "IOM: nearly 7,900 died or went missing on migration routes in 2025 — Dawn", url: "https://www.dawn.com/news/1993976", date: "2026-04" },
    dtGreeceRescue: { title: "21 Bangladeshis rescued after deadly Mediterranean migrant ordeal — Dhaka Tribune", url: "https://www.dhakatribune.com/bangladesh/migration/406388/21-bangladeshis-rescued-after-deadly-mediterranean", date: "2026-03-28" },
    dtGreeceMar: { title: "12 Sunamganj youths among 18 Bangladeshis dead in Mediterranean — Dhaka Tribune", url: "https://www.dhakatribune.com/bangladesh/406426/12-sunamganj-youths-among-18-bangladeshi-migrants", date: "2026-03-29" },
    dtEgypt: { title: "10 bodies dumped at sea, 29 Bangladeshis drift to Egypt — Dhaka Tribune", url: "https://www.dhakatribune.com/bangladesh/417638/10-bodies-dumped-at-sea-29-bangladeshis-drift-to", date: "2026-08-17" },
    ittefaqKhums: { title: "4 Bangladeshi migrants die as 2 boats capsize off Libyan coast — The Daily Ittefaq", url: "https://en.ittefaq.com.bd/14246/4-bangladeshi-migrants-die-as-2-boats-capsize-off", date: "2025-11-16" },
    bdnLibya170: { title: "Trapped on Europe route, 170 Bangladeshis repatriated from Libya — bdnews24", url: "https://bdnews24.com/bangladesh/bfba1f25eef0", date: "2026-05-19" },
    feZero: { title: "Govt firm on zero tolerance against illegal migration — The Financial Express", url: "https://today.thefinancialexpress.com.bd/print/govt-firm-on-zero-tolerance-against-illegal-migration-1778521160", date: "2026-05-12" },
    dsGameGhar: { title: "Tortured in 'game ghar' — The Daily Star", url: "https://online-d11.thedailystar.net/news/bangladesh/news/tortured-game-ghar-3160716", date: "2022" },
    dtLibyaPay: { title: "In pursuit of Europe, Bangladeshis fall victim to traffickers in Libya — Dhaka Tribune", url: "https://www.dhakatribune.com/bangladesh/390020/in-pursuit-of-europe-bangladeshis-fall-victim-to", date: "2025" },
    ds42lakh: { title: "Family pays Tk 42 lakh, still loses son to traffickers in Libya — The Daily Star", url: "https://images.thedailystar.net/node/3912301", date: "2025" },
    dsRoute: { title: "Italy-bound fortune seekers: Scarred, they return to debt and isolation — The Daily Star", url: "https://online-d11.thedailystar.net/nrb/migration/undocumented/news/italy-bound-fortune-seekers-scarred-they-return-debt-and-isolation-4188581", date: "2026" },
    reliefLibya: { title: "Navigating new corridors: The evolving route of Bangladeshi migration to Italy through Libya — ReliefWeb", url: "https://reliefweb.int/report/bangladesh/navigating-new-corridors-evolving-route-bangladeshi-migration-italy-through-libya-march-2026", date: "2026-03" }
  },

  /* ---------- REGIONS (used to group the country list) ---------- */
  REGIONS: [
    { id: "gulf",     name: "মধ্যপ্রাচ্য" },
    { id: "asia",     name: "এশিয়া" },
    { id: "europe",   name: "ইউরোপ" },
    { id: "africa",   name: "আফ্রিকা" },
    { id: "americas", name: "আমেরিকা" },
    { id: "oceania",  name: "ওশেনিয়া" }
  ],

  /* ---------- FEES EVERY WORKER PAYS (official) ---------- */
  FEES: [
    { name: "প্রবাসী কল্যাণ বোর্ড ফি (Wage Earners' Welfare Board)", amount: 5500, from: "২০২৬ সালের ১ অক্টোবর থেকে", status: "news", source: "tbsWelfare" }
    // TODO: add BMET registration fee, smart card / emigration clearance fee,
    //       pre-departure training fee, medical test fee, insurance — with sources.
  ],

  /* ---------- LEGAL STEPS (same for most countries) ---------- */
  // status "draft" until checked against BMET / Probashi Kallyan Ministry guidance
  STEPS: [
    { title: "এজেন্সির লাইসেন্স যাচাই করুন", detail: "এজেন্সির RL নম্বর নিয়ে সরকারি সাইটে দেখুন লাইসেন্স সক্রিয় কিনা। দালালের কথায় নয়, এজেন্সির নামে লিখিত চুক্তি করুন।", status: "draft" },
    { title: "চাকরির কাগজ লিখিত নিন", detail: "কোম্পানির নাম, কাজের ধরন, বেতন, থাকা-খাওয়া, চুক্তির মেয়াদ — সব লিখিত থাকতে হবে। মুখের কথায় রাজি হবেন না।", status: "draft" },
    { title: "অনুমোদিত সেন্টারে মেডিকেল করান", detail: "শুধু সরকার/গন্তব্য দেশ অনুমোদিত মেডিকেল সেন্টারে পরীক্ষা করান।", status: "draft" },
    { title: "BMET নিবন্ধন ও প্রশিক্ষণ", detail: "BMET-এ নিবন্ধন করুন এবং বিদেশ যাওয়ার আগের প্রশিক্ষণে (PDO) অংশ নিন।", status: "draft" },
    { title: "ভিসা যাচাই করুন", detail: "ভিসা আসল কিনা যাচাই করুন। সৌদি আরব, কাতার ও ওমানের জন্য আমি প্রবাসী ১৬৭৬৮ নম্বরে যাচাই করা যায়।", status: "news", source: "amiProbashiIvr" },
    { title: "বহির্গমন ছাড়পত্র / স্মার্ট কার্ড ছাড়া যাবেন না", detail: "BMET-এর ছাড়পত্র (স্মার্ট কার্ড) ছাড়া কাজের জন্য বিদেশ যাওয়া বৈধ নয়।", status: "draft" },
    { title: "প্রতিটি টাকার রসিদ নিন", detail: "যত টাকা দেবেন, রসিদ নিন। সম্ভব হলে ব্যাংকের মাধ্যমে দিন। রসিদ, চুক্তি, মেসেজ সব সংরক্ষণ করুন।", status: "draft" }
  ],

  /* ---------- COUNTRIES ---------- */
  // cap      = government maximum migration cost (taka)
  // reported = what workers actually report paying {min, max}
  // region   = one of REGIONS ids (gulf, asia, europe, africa, americas, oceania)
  // stats    = list of numbers about Bangladeshis in this country:
  //            { label, n (number) OR text, note, kind: "live" = how many live there now, status, source }
  // irregular: true = the country is on a dangerous illegal route; the page links to #risk
  COUNTRIES: [
    { id: "saudi", region: "gulf", stats: [{ label: "২০২৫ সালে কাজে গেছেন", n: 752705, status: "news", source: "bmet2025" }, { label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 5403532, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৩৫ লাখ", note: "২০২৫ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "open", note: "বাংলাদেশি কর্মীদের সবচেয়ে বড় গন্তব্য, বাংলাদেশ থেকে যাওয়া কর্মীদের অর্ধেকের বেশি এখানে যান।", source: "bdn24Market" },
      detail: {
        covered: ["বিমান ভাড়া", "পাসপোর্ট ফি", "প্রবাসী কল্যাণ ফি"],
        coveredNote: "২০১৬ সালের প্রতিবেদন অনুযায়ী ১.৬৫ লাখ টাকার মধ্যে এই খরচগুলো ধরা হয়েছে। প্রতিটির আলাদা টাকার অঙ্ক প্রকাশিত নেই।",
        employerNote: "সৌদি নিয়োগকর্তা বিমান ভাড়া দিলে খরচ কমার কথা বলেছেন বিএমইটির মহাপরিচালক।",
        routes: ["লাইসেন্সপ্রাপ্ত রিক্রুটিং এজেন্সির মাধ্যমে (এজেন্সিগুলো বায়রার সঙ্গে সরকারি নির্ধারিত খরচ মানার কথা জানিয়েছিল)"],
        status: "news", source: "dsSaudi"
      },
      name: "সৌদি আরব",   flag: "🇸🇦", cap: { amount: 165000, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: true },
    { id: "malaysia", region: "asia", stats: [{ label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 1190210, status: "news", source: "bmet1976" }],
      access: { state: "limited", note: "শ্রমবাজার আবার খুলছে, কিন্তু নতুন পর্বের চূড়ান্ত খরচ ও নিয়ম এখনো ঘোষণা হয়নি।", source: "gvMalaysia2026" },
      detail: {
        covered: ["পাসপোর্ট ফি", "মেডিকেল ফি", "রিক্রুটিং এজেন্সির সার্ভিস চার্জ", "নিবন্ধন ফি", "প্রবাসী কল্যাণ ফি", "বিমা"],
        coveredNote: "৭৮,৯৯০ টাকার মধ্যে বাংলাদেশের দিকের এই খরচগুলো ধরা হয়েছে। প্রতিটির আলাদা টাকার অঙ্ক প্রকাশিত নেই।",
        employer: ["প্রথমবার যাওয়া ও চুক্তি শেষে ফেরার বিমান টিকিট", "ভিসা প্রক্রিয়াকরণ ফি", "মালয়েশীয় ইমিগ্রেশনের জামানত", "মালয়েশীয় এজেন্সির সার্ভিস চার্জ", "মালয়েশিয়ায় বায়োমেট্রিক ও মেডিকেল পরীক্ষা"],
        employerNote: "এই খরচগুলো নিয়োগকর্তার বহন করার কথা, শ্রমিকের নয়।",
        routes: ["লাইসেন্সপ্রাপ্ত রিক্রুটিং এজেন্সি", "সরকারি প্রতিষ্ঠান BOESL"],
        status: "news", source: "dsMalaysia",
        latest: { text: "২০২৬ সালে মালয়েশিয়ার শ্রমবাজার আবার খুলছে: ৩৩৮টি প্রতিষ্ঠান অনুমোদিত (২৫টি মূল এজেন্সি, ৩১২টি সহযোগী এজেন্সি ও BOESL)। নতুন পর্বের চূড়ান্ত খরচ ৩০ সেপ্টেম্বর ২০২৬ পর্যন্ত ঘোষণা হয়নি। সরকারি নির্দেশনা না আসা পর্যন্ত টাকা দেবেন না, মেডিকেল করাবেন না, পাসপোর্ট জমা দেবেন না।", source: "gvMalaysia2026" }
      },
      name: "মালয়েশিয়া",  flag: "🇲🇾", cap: { amount: 78990,  year: "২০২২", status: "news", source: "tbsMalaysia" }, reported: null, visaCheck: false },
    { id: "qatar", region: "gulf", stats: [{ label: "২০২৫ সালে কাজে গেছেন", n: 107472, status: "news", source: "bmet2025" }, { label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 852813, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৪ লাখ", note: "২০১৯ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "limited", note: "সরকারিভাবে বন্ধ নয়। মন্ত্রণালয় নিষেধাজ্ঞার খবরকে গুজব বলেছিল (প্রায় এক বছর আগের খবর)। তবে সেখানে যাওয়া কর্মীর সংখ্যা কমেছে বলে প্রতিবেদন আছে।", source: "tbsQatarRumour" },     name: "কাতার",      flag: "🇶🇦", cap: { amount: 100780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: true },
    { id: "oman", region: "gulf", stats: [{ label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 1802929, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৬.৮ লাখ", note: "২০১৮ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "closed", note: "বাংলাদেশি কর্মী নেওয়া স্থগিত থাকার খবর আছে (খবরগুলোতে তারিখ নিয়ে অমিল)। আবার খোলার আলোচনা চলছে।", source: "dsLabourWall" },      name: "ওমান",       flag: "🇴🇲", cap: { amount: 100780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: true },
    { id: "uae", region: "gulf", stats: [{ label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 2528899, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ১২ লাখ", note: "২০১৩ সালের হিসাব, পুরোনো", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "limited", note: "নতুন কাজের ভিসা বন্ধের সরকারি ঘোষণা পাইনি, দূতাবাস এমন খবরকে গুজব বলেছে। তবে ২০২৬ সালের সেপ্টেম্বরে ৪ হাজারের বেশি বাংলাদেশির ভিসা বাতিল হয়েছে।", source: "dsUaeCancel" },       name: "সংযুক্ত আরব আমিরাত", flag: "🇦🇪", cap: { amount: 107780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "kuwait", region: "gulf", stats: [{ label: "২০২৫ সালে কাজে গেছেন", n: 42716, status: "news", source: "bmet2025" }, { label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 660897, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৩.৫ লাখ", note: "২০২০ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "unknown", note: "নিষেধাজ্ঞার কোনো খবর পাইনি, কিন্তু নির্ভরযোগ্য সরকারি তথ্যও পাইনি।", source: null },    name: "কুয়েত",      flag: "🇰🇼", cap: { amount: 106780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: false },
    { id: "singapore", region: "asia", stats: [{ label: "২০২৫ সালে কাজে গেছেন", n: 70056, status: "news", source: "bmet2025" }, { label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 897404, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ১.৫ লাখ", note: "২০২০ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "open", note: "বাংলাদেশি কর্মী যাচ্ছেন। ২০২৬ সালের প্রথম ছয় মাসে ৩৬ হাজারের বেশি কর্মী গেছেন বলে প্রতিবেদন আছে।", source: "bdn24Market" }, name: "সিঙ্গাপুর",   flag: "🇸🇬", cap: { amount: 262270, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: false },
    { id: "bahrain", region: "gulf", stats: [{ label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 410485, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ১.৫ লাখ", note: "২০২০ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "closed", note: "বাংলাদেশি কর্মী নেওয়া বন্ধ থাকার তালিকায় আছে। নিশ্চিত হতে BMET-এ দেখুন।", source: "dsLabourWall" },   name: "বাহরাইন",    flag: "🇧🇭", cap: { amount: 97780,  year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "jordan", region: "gulf", stats: [{ label: "২০২৫ সালে নারী কর্মী গেছেন", n: 10525, note: "সৌদি আরবের পর নারীদের দ্বিতীয় বড় গন্তব্য", status: "news", source: "rmmruUnb" }, { label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 211923, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ১.৫ লাখ", note: "২০২০ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "unknown", note: "এই দেশ নিয়ে নির্ভরযোগ্য তথ্য পাইনি।", source: null },    name: "জর্ডান",     flag: "🇯🇴", cap: { amount: 102780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "maldives", region: "asia", stats: [{ label: "২০২৫ সালে কাজে গেছেন", n: 40018, status: "news", source: "bmet2025" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৮০ হাজার", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "closed", note: "কাজের ভিসা স্থগিত হয়েছিল বলে প্রতিবেদন আছে। অন্য একটি প্রতিবেদনে ভিন্ন তথ্য আছে, তাই BMET-এ নিশ্চিত হয়ে নিন।", source: "dsMaldives" },  name: "মালদ্বীপ",   flag: "🇲🇻", cap: { amount: 115780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "lebanon", region: "gulf", stats: [{ label: "১৯৭৬–মার্চ ২০২৩ পর্যন্ত মোট গেছেন", n: 269235, status: "news", source: "bmet1976" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ১ লাখ", note: "২০২৪ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      access: { state: "unknown", note: "এই দেশ নিয়ে নির্ভরযোগ্য তথ্য পাইনি।", source: null },   name: "লেবানন",     flag: "🇱🇧", cap: { amount: 117780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "brunei", region: "asia", access: { state: "closed", note: "বন্ধ থাকা বাজারের তালিকায় আছে, বর্তমান অবস্থা স্পষ্ট নয়। BMET-এ নিশ্চিত হয়ে নিন।", source: "dsLabourWall" },    name: "ব্রুনাই",     flag: "🇧🇳", cap: { amount: 120780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "iraq", region: "gulf", access: { state: "unknown", note: "অতীতে বন্ধ থাকা বাজারের তালিকায় ছিল, বর্তমান অবস্থা নিশ্চিত নয়।", source: "dsLabourWall" },      name: "ইরাক",       flag: "🇮🇶", cap: { amount: 129540, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "japan", region: "asia", stats: [{ label: "সরকারি লক্ষ্য", text: "৫ বছরে ১ লাখ কর্মী", note: "মন্ত্রণালয়ে আলাদা জাপান সেল খোলা হয়েছে", status: "news", source: "feJapan" }],
      access: { state: "limited", note: "চুক্তি আছে, কিন্তু ভাষা ও দক্ষতার শর্তে খুব কম মানুষ যেতে পারছেন।", source: "bonikJapan" },     name: "জাপান",      flag: "🇯🇵", cap: { amount: 148500, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "russia", region: "europe", access: { state: "limited", note: "সরকার জানিয়েছে রাশিয়ায় কর্মী পাঠানো হচ্ছে। কিন্তু চাকরির কথা বলে নিয়ে গিয়ে যুদ্ধে পাঠানোর খবর আছে, ৩ বছরে অন্তত ৫৪ জন বাংলাদেশি নিহত।", source: "minister2026" },    name: "রাশিয়া",     flag: "🇷🇺", cap: null, reported: null, visaCheck: false,
      warning: { text: "২০২৬ সালের জুনে ভুয়া প্রতিশ্রুতি দিয়ে ৩০ জন তরুণকে রাশিয়ায় পাঠানোর অভিযোগে ৩টি এজেন্সির লাইসেন্স বাতিল করা হয়েছে। বেশি বেতনের লোভনীয় প্রস্তাব পেলে বিশেষ সতর্ক থাকুন।", source: "paRussia" } },
    { id: "korea", region: "asia", access: { state: "limited", note: "সরকার-থেকে-সরকার (EPS) চুক্তির মাধ্যমে কর্মী যান, কিন্তু বরাদ্দ কোটার মাত্র ৩৭% পূরণ হয়েছে। ভাষা পরীক্ষা পাস করতে হয়।", source: "koreaQuota" },
      detail: {
        routes: ["সরকারি প্রতিষ্ঠান BOESL-এর মাধ্যমে (সরকার-থেকে-সরকার চুক্তি)"],
        employerNote: "রিপোর্ট অনুযায়ী পাঁচ বছরে কোটার মাত্র ৩৭% কর্মী পাঠানো গেছে। দালাল বা বেসরকারি এজেন্সিকে টাকা দিয়ে এই পথে যাওয়ার প্রয়োজন নেই।",
        status: "news", source: "koreaQuota",
        latest: { text: "পাঁচ বছরে প্রায় ১৪,৮২৯ জন কর্মী গেছেন, যা বরাদ্দ কোটার প্রায় ৩৭%। ভাষা পরীক্ষা (EPS-TOPIK) পাস করা বহু কর্মী এখনো যাওয়ার অপেক্ষায়।", source: "koreaQuota" }
      },
      name: "দক্ষিণ কোরিয়া", flag: "🇰🇷", cap: null, reported: null, visaCheck: false },
    { id: "italy", region: "europe", stats: [{ label: "২০২০–২০২৪ সালে বৈধভাবে কাজে গেছেন", n: 26333, status: "news", source: "euaa" }, { label: "সাগরপথে অবৈধভাবে পৌঁছেছেন (জানু–৩ অক্টো ২০২৫)", n: 15476, note: "সব দেশের মধ্যে সবচেয়ে বেশি", status: "news", source: "rmmruFe" }, { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ২.১ লাখ", note: "২০২৫ সালের হিসাব", kind: "live", status: "draft", source: "wikiDiaspora" }],
      irregular: true, access: { state: "limited", note: "ইতালির সঙ্গে ২০২০ সালের চুক্তিতে বৈধ পথ আছে, কিন্তু কম কর্মী যাচ্ছেন। ২০২০–২০২৩ সালে কাজের ভিসায় যাওয়াদের প্রায় ৮০% পরে অবৈধ হয়ে পড়েছেন বলে প্রতিবেদন আছে।", source: "paItaly" }, detail: { routes: ["ইতালি ও বাংলাদেশের মধ্যকার ২০২০ সালের চুক্তির আওতায় বৈধ পথ"], employerNote: "ইতালীয় দূতাবাসের এক বিশেষজ্ঞের মতে ইতালি ১,৫০,০০০ দক্ষ কর্মী নেওয়ার পরিকল্পনা করছে এবং বাংলাদেশ সেই তালিকায় আছে; ভিসা ফি ৬৫ ইউরো।", status: "news", source: "paItalyExpert" },
      name: "ইতালি", flag: "🇮🇹", cap: null, reported: null, visaCheck: false,
      warning: { text: "ভিসার সরকারি ফি মাত্র ৬৫ ইউরো বলে ইতালীয় দূতাবাসের এক বিশেষজ্ঞ জানিয়েছেন, অথচ বাংলাদেশে দালালরা অনেক বেশি টাকা নেয়। 'ইতালির ভিসা' বলে বড় অঙ্কের টাকা চাইলে সতর্ক হোন।", source: "paItaly" } },
    { id: "romania", region: "europe", access: { state: "limited", note: "শ্রমবাজার খোলা, কিন্তু বহু বাংলাদেশি বিপুল টাকা দিয়েও প্রতিশ্রুত কাজ বা ওয়ার্ক পারমিট পাননি।", source: "tbsRomania" }, detail: { employerNote: "২০২০ সালে সরকারি ব্যবস্থায় ১,৬৫,০০০ টাকা নির্ধারিত ছিল বলে প্রতিবেদন আছে, অথচ বেসরকারি রিক্রুটারদের আসল খরচ ১০–১২ লাখ টাকা বলা হয়েছে। রোমানিয়ার শ্রমবাজার খুলছে বলেও প্রতিবেদন আছে।", status: "news", source: "dsRomania" },
      name: "রোমানিয়া", flag: "🇷🇴", cap: null, reported: { min: 600000, max: 800000, source: "tbsRomania", note: "এজেন্সির নেওয়া টাকা (টিবিএসের প্রতিবেদন); অন্য খবরে ১০–১২ লাখ টাকাও বলা হয়েছে" }, visaCheck: false,
      warning: { text: "রোমানিয়ার বাংলাদেশ চেম্বার অন্তত ২০০টি প্রতিশ্রুতি ভঙ্গের অভিযোগ সামলেছে। আগে নিশ্চিত হোন চাকরিদাতা ও ওয়ার্ক পারমিট সত্যি কিনা, এরপর টাকা দিন।", source: "tbsRomania" } },
    { id: "libya", region: "africa", irregular: true, access: { state: "unknown", note: "লিবিয়া বাংলাদেশি কর্মী নেওয়ার আগ্রহ জানালেও ২০২৬ সালেও লিবিয়া থেকে বহু বাংলাদেশিকে ফেরত আনা হচ্ছে। নির্ভরযোগ্য বৈধ পথের তথ্য পাইনি।", source: "dsLibyaReturn" }, detail: { employerNote: "লিবিয়া দক্ষ ও আধা-দক্ষ কর্মী (চিকিৎসা কর্মীসহ) নেওয়ার আগ্রহ আবার জানিয়েছে (প্রতিবেদনের তারিখ অস্পষ্ট)। তবু ফেরত আসা কর্মীদের বেশিরভাগই অবৈধভাবে ইউরোপ যেতে লিবিয়ায় ঢুকেছিলেন।", status: "news", source: "libyaMonitor" },
      name: "লিবিয়া", flag: "🇱🇾", cap: null, reported: null, visaCheck: false,
      warning: { text: "২০২৬ সালের সেপ্টেম্বরে লিবিয়ার আটককেন্দ্র থেকে ১৭৪ বাংলাদেশি ফিরেছেন। ইউরোপ যাওয়ার লোভ দেখিয়ে লিবিয়া হয়ে সাগরপথে নিয়ে যাওয়ার প্রস্তাব বিপজ্জনক ও অবৈধ।", source: "dsLibyaReturn" } },
    { id: "serbia", region: "europe", irregular: true, access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "সার্বিয়া", flag: "🇷🇸", cap: null, reported: null, visaCheck: false },
    { id: "bosnia", region: "europe", irregular: true, access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "বসনিয়া", flag: "🇧🇦", cap: null, reported: null, visaCheck: false },
    { id: "kosovo", region: "europe", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "কসোভো", flag: "🇽🇰", cap: null, reported: null, visaCheck: false },
    { id: "moldova", region: "europe", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "মলদোভা", flag: "🇲🇩", cap: null, reported: null, visaCheck: false },
    { id: "belarus", region: "europe", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "বেলারুশ", flag: "🇧🇾", cap: null, reported: null, visaCheck: false },
    { id: "ukraine", region: "europe", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "ইউক্রেন", flag: "🇺🇦", cap: null, reported: null, visaCheck: false },
    { id: "vietnam", region: "asia", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "ভিয়েতনাম", flag: "🇻🇳", cap: null, reported: null, visaCheck: false },
    { id: "laos", region: "asia", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "লাওস", flag: "🇱🇦", cap: null, reported: null, visaCheck: false },
    { id: "cambodia", region: "asia", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "কম্বোডিয়া", flag: "🇰🇭", cap: null, reported: null, visaCheck: false,
      warning: { text: "কম্বোডিয়ায় চাকরির নামে বাংলাদেশিদের স্ক্যাম কম্পাউন্ডে পাচারের খবর আছে। টুরিস্ট ভিসায় যাবেন না।", source: "kathmanduCambodia" } },

    /* ===== added 2026-11: more countries ===== */
    /* --- Asia --- */
    { id: "hongkong", region: "asia", name: "হংকং", flag: "🇭🇰", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "নারী কর্মীদের গন্তব্যের তালিকায় হংকং আছে, কিন্তু খুব কম কর্মী যান।", source: "rmmruUnb" } },
    { id: "mongolia", region: "asia", name: "মঙ্গোলিয়া", flag: "🇲🇳", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "নতুন বাজার। ২০২৬ সালে সরকারি প্রতিষ্ঠান BOESL-এর মাধ্যমে প্রথম দলে ১২ জন কর্মী গেছেন, আরও ১৮ জন যাওয়ার প্রস্তুতিতে।", source: "mongoliaFe" },
      detail: { routes: ["সরকারি প্রতিষ্ঠান BOESL-এর মাধ্যমে"], employerNote: "মন্ত্রী জানিয়েছেন, কর্মী অসুস্থ হলে নিয়োগকারী কোম্পানি চিকিৎসার খরচ দেবে।", status: "news", source: "mongoliaFe" } },
    { id: "kyrgyzstan", region: "asia", name: "কিরগিজস্তান", flag: "🇰🇬", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "২০২৫ সালের মে মাসে যেসব দেশে বেশি কর্মী গেছেন, সেই তালিকায় কিরগিজস্তান ছিল। খরচ ও নিয়মের সরকারি তথ্য পাইনি।", source: "tbsMay" } },
    { id: "thailand", region: "asia", name: "থাইল্যান্ড", flag: "🇹🇭", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "সরকার থাইল্যান্ডকে বিকল্প শ্রমবাজার হিসেবে চিহ্নিত করেছে, কিন্তু কাজে যাওয়ার বৈধ পথের তথ্য এখনো পাইনি।", source: "ittefaqAlt" },
      warning: { text: "থাইল্যান্ডে অফিস, আইটি বা রেস্টুরেন্টের চাকরির কথা বলে মিয়ানমার-কম্বোডিয়ার প্রতারণা কেন্দ্রে পাচারের খবর আছে। টুরিস্ট ভিসায় কাজে যাবেন না।", source: "dsScamGangs" } },

    /* --- Europe --- */
    { id: "greece", region: "europe", irregular: true, name: "গ্রিস", flag: "🇬🇷", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "২০২২ সালের চুক্তিতে প্রতি বছর ৪,০০০ বাংলাদেশি মৌসুমি কৃষিশ্রমিকের বৈধভাবে যাওয়ার কথা। কিন্তু চুক্তির পর নিয়োগ শুরু হতে দেরি হয়েছে।", source: "dsGreeceDelay" },
      detail: { routes: ["গ্রিস-বাংলাদেশ মৌসুমি শ্রমিক চুক্তি (কৃষি খাত)"], employerNote: "চুক্তি অনুযায়ী অনুমতি ৫ বছরের, বছরে সর্বোচ্চ ৯ মাস থাকা যায়। এতে পরিবার নেওয়া বা পরে নাগরিকত্বের সুযোগ নেই।", status: "official", source: "greeceGov" },
      warning: { text: "লিবিয়ার তবরুক থেকে নৌকায় গ্রিসে যাওয়ার পথে ২০২৬ সালের মার্চে অন্তত ১৮ জন বাংলাদেশি মারা গেছেন, তাঁদের ১২ জন সুনামগঞ্জের। লাশ সাগরে ফেলে দেওয়া হয়েছিল।", source: "dtGreeceMar" },
      stats: [ { label: "লিবিয়া থেকে সাগরপথে পৌঁছেছেন (জানু–জুন ২০২৬)", n: 3608, note: "এই পথে সব দেশের মধ্যে বাংলাদেশিরাই সবচেয়ে বেশি", status: "news", source: "starBrac" },
               { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৩০ হাজার", kind: "live", note: "দূতাবাসের হিসাব, প্রায় অর্ধেকের বৈধ কাগজ নেই", status: "news", source: "tbsGreece" } ] },
    { id: "portugal", region: "europe", name: "পর্তুগাল", flag: "🇵🇹", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "সরকারি তালিকায় পর্তুগালে কর্মী যাচ্ছেন। তবে অনেক কর্মী অনুমতির দেশ ছেড়ে অন্য দেশে চলে যাওয়ায় ইউরোপের দেশগুলো বাংলাদেশিদের কম ভিসা দিচ্ছে বলে রিক্রুটাররা জানিয়েছেন।", source: "tbsEurope" },
      stats: [ { label: "এক মাসে গেছেন (জানুয়ারি)", n: 458, note: "ইউরোপের দেশগুলোর মধ্যে সবচেয়ে বেশি", status: "news", source: "tbsEurope" } ] },
    { id: "croatia", region: "europe", irregular: true, name: "ক্রোয়েশিয়া", flag: "🇭🇷", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "২০২৪ সালে ক্রোয়েশিয়া বাংলাদেশিদের ১২,৪০০টি কাজের অনুমতি দিয়েছিল, কিন্তু ৮,০০০ জন সেখানে পৌঁছাননি। অনুমতি নিয়ে অন্য দেশে চলে যাওয়ায় ক্রোয়েশিয়া কড়াকড়ি শুরু করেছে।", source: "tbsEurope" },
      warning: { text: "ক্রোয়েশিয়ার অনুমতি নিয়ে অন্য শেনজেন দেশে গেলে আপনি অবৈধ হয়ে যাবেন, আর পরের বাংলাদেশিদের ভিসাও কঠিন হয়। বসনিয়া থেকে অবৈধভাবে সীমান্ত পার হতে গিয়ে ২০২৬ সালের সেপ্টেম্বরে ৩৬ বাংলাদেশি আটক হয়েছেন।", source: "bosniaDetain" },
      stats: [ { label: "এখন কাজ করছেন (আনুমানিক)", text: "৬–৭ হাজার", kind: "live", note: "নির্মাণ, রেস্টুরেন্ট ও খাবার ডেলিভারিতে", status: "news", source: "tbsEurope" } ] },
    { id: "hungary", region: "europe", name: "হাঙ্গেরি", flag: "🇭🇺", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "কিছু কর্মী যাচ্ছেন। পূর্ব ইউরোপের বেশিরভাগ দেশের দূতাবাস ঢাকায় না থাকায় ভিসার জন্য দিল্লিতে যেতে হয়।", source: "paDelhi" },
      stats: [ { label: "এক মাসে গেছেন (জানুয়ারি)", n: 135, status: "news", source: "tbsEurope" } ] },
    { id: "northmacedonia", region: "europe", name: "উত্তর মেসিডোনিয়া", flag: "🇲🇰", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "মন্ত্রী সংসদে জানিয়েছেন মেসিডোনিয়ায় কর্মী পাঠানো হচ্ছে। খরচের সরকারি তথ্য পাইনি।", source: "minister2026" },
      stats: [ { label: "এক মাসে গেছেন (জানুয়ারি)", n: 86, status: "news", source: "tbsEurope" } ] },
    { id: "poland", region: "europe", name: "পোল্যান্ড", flag: "🇵🇱", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "নিয়োগকর্তার কাজের অনুমতি পেলেও ভিসার জন্য দিল্লির দূতাবাসে যেতে হয়। একজন কর্মী ৯ লাখ টাকা দিয়েও ভিসার অপেক্ষায় ছিলেন বলে প্রতিবেদন আছে।", source: "polandFe" } },
    { id: "malta", region: "europe", name: "মাল্টা", flag: "🇲🇹", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "২০২০–২০২৪ সালে বাংলাদেশিরা মাল্টায় কাজে গেছেন, তবে এখনকার নিয়ম ও খরচ নিয়ে নির্ভরযোগ্য তথ্য পাইনি।", source: "euaa" } },
    { id: "cyprus", region: "europe", name: "সাইপ্রাস", flag: "🇨🇾", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "২০২০–২০২৪ সালে বাংলাদেশিরা সাইপ্রাসে কাজে গেছেন, সরকার বিকল্প বাজার হিসেবেও দেখছে। খরচের সরকারি তথ্য পাইনি।", source: "ittefaqAlt" } },
    { id: "albania", region: "europe", name: "আলবেনিয়া", flag: "🇦🇱", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "২০২০–২০২৪ সালে বাংলাদেশিরা আলবেনিয়ায় কাজে গেছেন। বলকানের দেশগুলো অবৈধভাবে ইউরোপে ঢোকার পথ হিসেবেও ব্যবহার হয়।", source: "bonikEurope" } },
    { id: "uk", region: "europe", name: "যুক্তরাজ্য", flag: "🇬🇧", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "শ্রমিক পাঠানোর সরকারি চুক্তি নেই; কেয়ার বা স্কিলড ওয়ার্কার ভিসায় নিয়োগকর্তার স্পনসরশিপে যেতে হয়। স্পনসরশিপের খরচ নিয়োগকর্তার দেওয়ার কথা, কর্মীর নয়।", source: "ukCare" },
      warning: { text: "কেয়ার ভিসার নামে অনেককে ১০ হাজার পাউন্ডের বেশি নেওয়া হয়েছে, গিয়ে কাজ পাননি। 'স্পনসরশিপ সার্টিফিকেট (CoS) কিনতে হবে' বলে টাকা চাইলে সেটা প্রতারণা।", source: "ukCare" },
      stats: [ { label: "বাংলাদেশি বংশোদ্ভূত মানুষ (ইংল্যান্ড ও ওয়েলস)", n: 644881, kind: "live", note: "২০২১ সালের আদমশুমারি", status: "official", source: "ukCensus" } ] },
    { id: "spain", region: "europe", name: "স্পেন", flag: "🇪🇸", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "স্পেনে কাজে যাওয়ার সরকারি চুক্তির তথ্য পাইনি।", source: null },
      stats: [ { label: "এখন থাকেন (আনুমানিক)", text: "৫০–৮০ হাজার", kind: "live", status: "draft", source: "wikiDiaspora" } ] },

    /* --- Africa --- */
    { id: "mauritius", region: "africa", name: "মরিশাস", flag: "🇲🇺", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "প্রায় চার বছর বন্ধ থাকার পর শ্রমবাজার আবার খুলতে সমঝোতা স্মারক সই করতে দুই দেশ রাজি হয়েছে (জুন ২০২৬)। চুক্তি সইয়ের আগে টাকা দেবেন না।", source: "mauritius2026" } },
    { id: "seychelles", region: "africa", name: "সেশেলস", flag: "🇸🇨", cap: null, reported: null, visaCheck: false,
      access: { state: "open", note: "সরকার জানিয়েছে সেশেলসে কর্মী যাচ্ছেন। ২০১৯ সালের চুক্তিতে দক্ষ কর্মী নেওয়া হয়।", source: "minister2026" },
      detail: { employerNote: "BMET-এর মহাপরিচালক বলেছিলেন, সেশেলসে যেতে কর্মীর টাকা খরচ করতে হয় না, নিয়োগকর্তা খরচ দেন। কেউ বড় অঙ্কের টাকা চাইলে সতর্ক হোন।", status: "news", source: "seychellesDs" } },
    { id: "southafrica", region: "africa", irregular: true, name: "দক্ষিণ আফ্রিকা", flag: "🇿🇦", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "কাজে যাওয়ার সরকারি পথের তথ্য পাইনি। পাচারকারীরা অন্য আফ্রিকান দেশের ভিসা নিয়ে মোজাম্বিকের মতো দেশ হয়ে সীমান্ত পার করায়; গড়ে ১০ লাখ টাকা নেয় বলে প্রতিবেদন আছে।", source: "saMurder" },
      warning: { text: "২০১৯ সালের এক প্রতিবেদনে বলা হয়, চার বছরে দক্ষিণ আফ্রিকায় ৪০০-এর বেশি বাংলাদেশি খুন হয়েছেন, বেশিরভাগ ব্যবসায়িক বা ব্যক্তিগত বিরোধে।", source: "saWion" },
      stats: [ { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৩ লাখ", kind: "live", note: "২০১৯ সালের হিসাব, অনেকের বৈধ কাগজ নেই", status: "news", source: "saWion" } ] },

    /* --- Americas --- */
    { id: "usa", region: "americas", irregular: true, name: "যুক্তরাষ্ট্র", flag: "🇺🇸", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "শ্রমিক পাঠানোর সরকারি ব্যবস্থা নেই। বাংলাদেশিরা ডিভি লটারিতে আবেদন করতে পারেন না।", source: "dv2026" },
      warning: { text: "দালালরা ব্রাজিল, বলিভিয়া, পানামার জঙ্গল (ডারিয়েন গ্যাপ) ও মেক্সিকো হয়ে অবৈধভাবে আমেরিকায় নেওয়ার প্রস্তাব দেয়। পথে নতুন দালাল আরও টাকা চায়; ধরা পড়ে অনেকে শিকল পরা অবস্থায় ফেরত এসেছেন।", source: "usDeport" },
      stats: [ { label: "এখন থাকেন (আনুমানিক)", text: "৩.৫–৬ লাখ", kind: "live", note: "একেক জায়গায় একেক হিসাব", status: "draft", source: "wikiDiaspora" } ] },
    { id: "canada", region: "americas", name: "কানাডা", flag: "🇨🇦", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "শ্রমিক পাঠানোর সরকারি চুক্তির তথ্য পাইনি। কানাডার ভিসা শুধু কানাডা সরকারের অফিসিয়াল ব্যবস্থায় হয়।", source: null },
      stats: [ { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ১.২ লাখ", kind: "live", status: "draft", source: "wikiDiaspora" } ] },
    { id: "brazil", region: "americas", irregular: true, name: "ব্রাজিল", flag: "🇧🇷", cap: null, reported: null, visaCheck: false,
      access: { state: "limited", note: "সরকার ব্রাজিলকে বিকল্প শ্রমবাজার হিসেবে দেখছে। কিন্তু ফেরত আসা ৩৯ জনের ৩৪ জনই বৈধভাবে ব্রাজিল গিয়ে সেখান থেকে অবৈধভাবে আমেরিকার পথে গিয়েছিলেন।", source: "usDeport" },
      warning: { text: "'ব্রাজিলে চাকরি' বলে নিয়ে গিয়ে জঙ্গলপথে আমেরিকা পাঠানোর প্রস্তাব বিপজ্জনক। চাকরিদাতা আসল কিনা আগে যাচাই করুন।", source: "usDeport" } },

    /* --- Oceania --- */
    { id: "fiji", region: "oceania", name: "ফিজি", flag: "🇫🇯", cap: null, reported: null, visaCheck: false,
      access: { state: "open", note: "সরকার জানিয়েছে ফিজিতে কর্মী যাচ্ছেন।", source: "minister2026" },
      detail: { employerNote: "বাংলাদেশ হাইকমিশনের এক কর্মকর্তার মতে বছরে ৭০০–১,০০০ কর্মী পাঠানো সম্ভব, নির্মাণ, পোশাক ও কৃষি খাতে।", status: "news", source: "fijiDs" } },
    { id: "australia", region: "oceania", name: "অস্ট্রেলিয়া", flag: "🇦🇺", cap: null, reported: null, visaCheck: false,
      access: { state: "unknown", note: "শ্রমিক পাঠানোর সরকারি চুক্তির তথ্য পাইনি।", source: null },
      stats: [ { label: "এখন থাকেন (আনুমানিক)", text: "প্রায় ৪১ হাজার", kind: "live", status: "draft", source: "wikiDiaspora" } ] }
  ],

  /* ---------- BANGLADESHIS ABROAD: overall numbers (#stats) ---------- */
  STATS: {
    overview: [
      { label: "২০২৫ সালে কাজে বিদেশ গেছেন", n: 1128423, status: "news", source: "bmet2025" },
      { label: "এর মধ্যে নারী", n: 62163, status: "news", source: "bmet2025" },
      { label: "২০২৫ সালে যত দেশে গেছেন", n: 141, unit: "টি দেশ", note: "কিন্তু ৯০% গেছেন মাত্র ৫টি দেশে", status: "news", source: "rmmruDs" },
      { label: "২০২৫ সালে রেমিট্যান্স", text: "৩,২৮২ কোটি ডলার", note: "২৫ বছরে সর্বোচ্চ", status: "news", source: "rmmruDs" },
      { label: "১৯৭৬ থেকে মার্চ ২০২৩ পর্যন্ত মোট", n: 15093044, status: "news", source: "bmet1976" }
    ],
    top2025: { title: "২০২৫ সালে কোন দেশে সবচেয়ে বেশি কর্মী গেছেন", source: "bmet2025",
      rows: [ ["saudi", 752705], ["qatar", 107472], ["singapore", 70056], ["kuwait", 42716], ["maldives", 40018] ] },
    topAll: { title: "১৯৭৬–মার্চ ২০২৩: সব মিলিয়ে কোন দেশে বেশি গেছেন", source: "bmet1976",
      rows: [ ["saudi", 5403532], ["uae", 2528899], ["oman", 1802929], ["malaysia", 1190210], ["singapore", 897404], ["qatar", 852813], ["kuwait", 660897], ["bahrain", 410485], ["lebanon", 269235], ["jordan", 211923] ] },
    districts: { text: "২০২৫ সালে সবচেয়ে বেশি কর্মী গেছেন কুমিল্লা থেকে। এরপর ব্রাহ্মণবাড়িয়া, ঢাকা, টাঙ্গাইল, কিশোরগঞ্জ, চাঁদপুর, চট্টগ্রাম, নোয়াখালী, নরসিংদী ও ময়মনসিংহ।", source: "rmmruUnb" },
    caveat: { text: "ফেরত আসা কর্মীদের হিসাব রাখা হয় না, তাই এখন ঠিক কতজন বাংলাদেশি বিদেশে আছেন, তার নির্ভরযোগ্য সরকারি সংখ্যা নেই। নিচের 'এখন থাকেন' সংখ্যাগুলো বিভিন্ন জায়গা থেকে নেওয়া আনুমানিক হিসাব।", source: "rmmruUnb" }
  },

  /* ---------- IRREGULAR ROUTES & RISK (#risk) ---------- */
  RISK: {
    tiles: [
      { label: "২০০৯ থেকে জুন ২০২৬ পর্যন্ত লিবিয়া হয়ে সাগরপথে ইউরোপে ঢুকেছেন", text: "প্রায় ১.১০ লাখ", status: "news", source: "starBrac" },
      { label: "শুধু ২০২৫ সালে সাগর পেরিয়ে ইউরোপে গেছেন", n: 20259, status: "news", source: "starBrac" },
      { label: "২০২৫ সালে মধ্য-ভূমধ্যসাগরে মৃত বা নিখোঁজ (সব দেশের মানুষ)", n: 1330, note: "আসল সংখ্যা আরও বেশি হতে পারে", status: "news", source: "iom2025" },
      { label: "২০২৬ সালের জানুয়ারি–ফেব্রুয়ারিতে ভূমধ্যসাগরে মৃত্যু", n: 559, note: "আগের বছর একই সময়ে ছিল ২৮৭", status: "news", source: "dtGreeceRescue" }
    ],
    compare: { title: "২০২০–২০২৪: ইউরোপে বৈধ পথে বনাম অবৈধ পথে", source: "bonikEurope",
      rows: [ { label: "কাজের অনুমতি নিয়ে বৈধভাবে (BMET)", n: 98866, kind: "legal" }, { label: "অবৈধভাবে ঢুকেছেন (IOM)", n: 97832, kind: "irregular" } ],
      note: "যতজন বৈধভাবে গেছেন, প্রায় ততজনই জীবনের ঝুঁকি নিয়ে অবৈধ পথে গেছেন।" },
    arrivals: { title: "সাগরপথে ইতালিতে পৌঁছানো বাংলাদেশি",
      note: "প্রতিটি সংখ্যার সময়কাল আলাদা, তাই সরাসরি তুলনা করবেন না।",
      rows: [ { label: "২০২৩ (পুরো বছর)", n: 12774, source: "dsItaly2024" }, { label: "২০২৪ (জানু–অক্টো)", n: 11231, source: "dsItaly2024" },
              { label: "২০২৫ (জানু–৩ অক্টো)", n: 15476, source: "rmmruFe" }, { label: "২০২৬ (জানু–জুন)", n: 4249, source: "starBrac" } ] },
    route: [
      { title: "দালালের প্রস্তাব", text: "'ইতালিতে ভালো আয়, পথ নিরাপদ' — গ্রামের পরিচিত দালাল এমন বলে। মাদারীপুর, শরীয়তপুরের গ্রামে বহু তরুণ এই ঝুঁকি নিচ্ছেন।", source: "dsRoute" },
      { title: "ঢাকা → দুবাই → মিশর → বেনগাজি", text: "ভিজিট ভিসায় দুবাই, সেখান থেকে মিশর হয়ে লিবিয়ার বেনগাজি। কাজের বৈধ ছাড়পত্র থাকে না, তাই বিপদে পড়লে সরকারি সাহায্য পাওয়া কঠিন।", source: "dsRoute" },
      { title: "'গেম ঘর'-এ আটক ও নির্যাতন", text: "লিবিয়ায় পৌঁছানোর পর আটকে রাখা হয়। নির্যাতনের ভিডিও পরিবারকে পাঠিয়ে মুক্তিপণ চায়। ৭ মাসে ১,৫৪৫ জনকে লিবিয়া থেকে ফেরত আনতে হয়েছে।", source: "dtLibyaPay" },
      { title: "খরচ: ৯–১৪ লাখ টাকা, তারপর মুক্তিপণ", text: "যাত্রার জন্য জনপ্রতি প্রায় ৯.৫ লাখ টাকা নিয়ে, লিবিয়ায় পৌঁছানোর পর আরও ১০ লাখ টাকা মুক্তিপণ চাওয়ার ঘটনা আছে। এক পরিবার ৪২ লাখ টাকা দিয়েও ছেলেকে বাঁচাতে পারেনি।", source: "dsGameGhar", extra: ["ds42lakh"] },
      { title: "রাবারের নৌকায় সাগর পাড়ি", text: "২৫ জনের নৌকায় ৪২ জন, একটি মাত্র ইঞ্জিন। ইঞ্জিন বন্ধ হয়ে ১১ দিন ভেসে থাকার সময় খাবার-পানি ছাড়া মানুষ মারা গেছেন, লাশ সাগরে ফেলতে হয়েছে।", source: "starBrac" },
      { title: "ধরা পড়লে আটককেন্দ্র, ফিরলে ঋণ", text: "ধরা পড়লে লিবিয়ার ভিড়ে ঠাসা আটককেন্দ্রে মাসের পর মাস থাকতে হয়। যাঁরা ফেরেন, ঋণের বোঝা আর মানসিক আঘাত নিয়ে ফেরেন।", source: "dsRoute" }
    ],
    otherRoutes: [
      { name: "লিবিয়া থেকে গ্রিস (তবরুক বন্দর)", country: "greece", text: "২০২৬ সালের প্রথম ছয় মাসে ৩,৬০৮ বাংলাদেশি এই পথে গ্রিসে পৌঁছেছেন, সংখ্যায় সবার ওপরে। মার্চে এক নৌকায় ১৮ জন ও আগস্টে আরেক নৌকায় ৯ জন বাংলাদেশি মারা গেছেন।", source: "starBrac" },
      { name: "বলকান পথ (সার্বিয়া/বসনিয়া → ক্রোয়েশিয়া)", country: "bosnia", text: "কাজের ভিসায় বলকানের দেশে গিয়ে অবৈধভাবে সীমান্ত পেরিয়ে ইইউতে ঢোকার চেষ্টা। ২০২৬ সালের সেপ্টেম্বরে বসনিয়া সীমান্তে ৩৬ বাংলাদেশি আটক হন। IOM-এর হিসাবে ২০১৪ থেকে এই পথে ৪০০-এর বেশি মানুষ মারা গেছেন বা নিখোঁজ।", source: "observerBalkan" },
      { name: "দক্ষিণ আফ্রিকা (মোজাম্বিক হয়ে)", country: "southafrica", text: "অন্য আফ্রিকান দেশের ভিসা নিয়ে সীমান্ত পার করানো হয়, গড়ে ১০ লাখ টাকা নেওয়া হয় বলে প্রতিবেদন আছে।", source: "saMurder" },
      { name: "ব্রাজিল থেকে আমেরিকা (ডারিয়েন জঙ্গল)", country: "usa", text: "বৈধভাবে ব্রাজিল গিয়ে কয়েক মাস ধরে জঙ্গল-পাহাড় পেরিয়ে মেক্সিকো হয়ে আমেরিকা। মেক্সিকোয় এক দালাল জনপ্রতি আরও ৬ লাখ টাকা নিয়েছে; ধরা পড়লে ফেরত পাঠানো হয়।", source: "usDeport" }
    ],
    incidents: [
      { date: "2026-09-01", text: "লিবিয়ার আটককেন্দ্র থেকে ১৭৪ বাংলাদেশি দেশে ফিরেছেন।", source: "dsLibyaReturn" },
      { date: "2026-08-17", text: "লিবিয়া থেকে গ্রিসগামী নৌকা ১১ দিন ভেসে মিশরে পৌঁছায়; অন্তত ৯ বাংলাদেশির মৃত্যু, ২৯ জন হাসপাতালে।", source: "dtEgypt" },
      { date: "2026-05-19", text: "বেনগাজিতে আটকে থাকা ১৭০ বাংলাদেশি ফিরেছেন; অনেককে অপহরণ ও নির্যাতন করা হয়েছিল।", source: "bdnLibya170" },
      { date: "2026-05-12", text: "লিবিয়া-ইতালি পথে মৃত্যুর পর সরকার অবৈধ অভিবাসনে 'জিরো টলারেন্স' ঘোষণা করেছে।", source: "feZero" },
      { date: "2026-03-29", text: "তবরুক থেকে গ্রিসগামী নৌকায় ১৮ বাংলাদেশির মৃত্যু, ১২ জন সুনামগঞ্জের।", source: "dtGreeceMar" },
      { date: "2025-11-16", text: "লিবিয়ার আল খুমস উপকূলে দুই নৌকাডুবিতে ৪ বাংলাদেশির মৃত্যু।", source: "ittefaqKhums" }
    ],
    family: [
      "দালাল 'ইতালি', 'গেম' বা 'বোট' বললে টাকা দেবেন না। লিবিয়া হয়ে নৌকায় ইউরোপ যাওয়া অবৈধ, আর এতে মৃত্যুর ঝুঁকি আছে।",
      "কেউ লিবিয়ায় আটকে মুক্তিপণ চাইলে টাকা পাঠানোর আগে ৯৯৯-এ ফোন করে পুলিশকে জানান। টাকা দিয়েও অনেকে ছাড়া পাননি।",
      "দালালের নাম, ঠিকানা, ফোন ও বিকাশ নম্বর, লেনদেনের রসিদ সব লিখে ও সংরক্ষণ করে রাখুন — মামলায় লাগবে।",
      "ইউরোপে যেতে চাইলে বৈধ পথ দেখুন: গ্রিসের মৌসুমি চুক্তি, ইতালি বা রোমানিয়ার কাজের ভিসা, শুধু লাইসেন্সধারী এজেন্সির মাধ্যমে।"
    ]
  },

  /* ---------- CANCELLED / SUSPENDED AGENCIES (from news or BMET) ---------- */
  // rl = licence number only (digits). Always cite a source.
  AGENCIES_FLAGGED: [
    { rl: "1428", name: "RS International",     status: "cancelled", date: "২০২৬ সালের ১ জুন", reason: "রাশিয়ায় ভুয়া প্রতিশ্রুতিতে কর্মী পাঠানোর অভিযোগ", source: "paRussia" },
    { rl: "2505", name: "Jabal-E-Noor",         status: "cancelled", date: "২০২৬ সালের ১ জুন", reason: "রাশিয়ায় ভুয়া প্রতিশ্রুতিতে কর্মী পাঠানোর অভিযোগ", source: "paRussia" },
    { rl: "1755", name: "TS Overseas Limited",  status: "cancelled", date: "২০২৬ সালের ১ জুন", reason: "রাশিয়ায় ভুয়া প্রতিশ্রুতিতে কর্মী পাঠানোর অভিযোগ", source: "paRussia" }
  ],

  /* ---------- WHAT BROKERS SAY (red flags) ---------- */
  RED_FLAGS: [
    { claim: "রসিদ লাগবে না, নগদ টাকা দেন।", why: "রসিদ না থাকলে প্রতারিত হলে টাকা ফেরত পাওয়ার বা অভিযোগ করার কোনো প্রমাণ থাকে না।", todo: "রসিদ ছাড়া এক টাকাও দেবেন না।" },
    { claim: "স্মার্ট কার্ড বা BMET ছাড়পত্র লাগবে না।", why: "ছাড়পত্র ছাড়া গেলে আপনি অবৈধ কর্মী হয়ে যেতে পারেন, বিদেশে বিপদে পড়লে সরকারি সহায়তা পাওয়া কঠিন।", todo: "ছাড়পত্র ছাড়া যাবেন না।" },
    { claim: "ভিজিট/ট্যুরিস্ট ভিসায় যান, ওখানে গিয়ে কাজের ভিসা হয়ে যাবে।", why: "এভাবে গিয়ে অনেকে কাজ পান না, আটকে পড়েন বা গ্রেপ্তার হন।", todo: "শুধু কাজের ভিসায় যান।" },
    { claim: "বেতন অনেক বেশি, কাজ খুব সহজ।", why: "অস্বাভাবিক বেশি বেতনের প্রস্তাব প্রতারণার সাধারণ কৌশল। রাশিয়া ও কম্বোডিয়ায় এমন প্রস্তাবে অনেকে বিপদে পড়েছেন।", todo: "বেতন লিখিত নিন, কোম্পানির খোঁজ নিন।" },
    { claim: "চুক্তিপত্র পরে দেব, বিদেশে গিয়ে দেখবেন।", why: "লিখিত চুক্তি না থাকলে বেতন বা কাজ নিয়ে পরে কিছু দাবি করা যায় না।", todo: "যাওয়ার আগে চুক্তি হাতে নিন ও পড়ে বুঝে নিন।" },
    { claim: "পাসপোর্ট আমার কাছে রেখে দিন।", why: "পাসপোর্ট অন্যের হাতে থাকলে আপনাকে আটকে রাখা বা চাপ দেওয়া সহজ হয়।", todo: "পাসপোর্ট নিজের কাছে রাখুন, প্রয়োজনে শুধু ফটোকপি দিন।" },
    { claim: "সরকারি খরচে হয় না, এর চেয়ে বেশি লাগবেই।", why: "সরকার নির্ধারিত খরচের বেশি নেওয়া নিয়মবিরুদ্ধ। বেশি টাকা ধার করে গেলে ঋণ শোধ করতেই বছর চলে যায়।", todo: "দেশের পাতায় সরকারি খরচ দেখে নিন, বেশি চাইলে অভিযোগ করুন।" },
    { claim: "এজেন্সির নাম বলা যাবে না, আমিই সব করে দেব।", why: "লাইসেন্স ছাড়া কেউ বিদেশে কর্মী পাঠাতে পারে না। নাম লুকালে যাচাই করার উপায় থাকে না।", todo: "এজেন্সির নাম ও RL নম্বর চেয়ে নিন, তারপর যাচাই করুন।" }
  ],

  /* ---------- OFFER CHECK ("দালাল নাকি?" warning signs, #check) ----------
     fact = the warning sign shown as a heading (all signs are shown at once;
            the user ticks the ones that match their offer). q = old question form, kept for reference.
     Every question is phrased so that "হ্যাঁ" (yes) is the risky answer.
     level: "high"   = a yes makes the result red
            "medium" = a yes makes the result at least yellow
     "জানি না" (don't know) counts as yellow. Each question needs a source. */
  OFFER_CHECK: [
    { icon: "📱", level: "medium", source: "gvDigitalScam",
      fact: "ফেসবুক, হোয়াটসঅ্যাপ, টিকটক বা ইউটিউবে পাওয়া চাকরির খবর প্রায়ই ভুয়া",
      q: "চাকরির খবর কি ফেসবুক, হোয়াটসঅ্যাপ, টিকটক বা ইউটিউবে পেয়েছেন?",
      why: "প্রতারকরা ভুয়া কোম্পানির পাতা ও সফল প্রবাসীর বানানো গল্প দিয়ে সামাজিক মাধ্যমে লোক ধরে।" },
    { icon: "🛂", level: "high", source: "dsScamGangs",
      fact: "টুরিস্ট, ভিজিট বা হজ-ওমরাহ ভিসায় বিদেশে কাজ করা যায় না",
      q: "কাজের জন্য কি টুরিস্ট, ভিজিট বা হজ-ওমরাহ ভিসায় যেতে বলছে?",
      why: "এসব ভিসায় কাজ করা যায় না। এভাবে নিয়ে অনেককে কম্বোডিয়া-মিয়ানমারের প্রতারণা কেন্দ্রে বিক্রি করা হয়েছে।" },
    { icon: "📄", level: "high", source: "gvDigitalScam",
      fact: "লিখিত চুক্তিপত্র হাতে না পেয়ে টাকা দেবেন না",
      q: "কাজের লিখিত চুক্তিপত্র কি এখনো হাতে পাননি?",
      why: "লিখিত চুক্তি ছাড়া বেতন বা কাজ নিয়ে পরে কিছু দাবি করা যায় না। প্রতারকরা বলে \"চুক্তি পরে দেব\"।" },
    { icon: "💸", level: "high", source: "gvDigitalScam",
      fact: "বিকাশ-নগদে কিস্তিতে বা রসিদ ছাড়া টাকা চাওয়া বিপদের লক্ষণ",
      q: "টাকা কি বিকাশ-নগদে কিস্তিতে, বা রসিদ ছাড়া চাইছে?",
      why: "মোবাইলে কিস্তিতে দেওয়া টাকা পরে খুঁজে বের করা বা ফেরত পাওয়া প্রায় অসম্ভব। রসিদ ছাড়া অভিযোগের প্রমাণ থাকে না।" },
    { icon: "⚠️", level: "high", source: "paRussiaWar",
      fact: "রাশিয়া, এবং কম্বোডিয়া, লাওস, মিয়ানমার বা থাইল্যান্ডে অফিস-আইটি-রেস্টুরেন্টের চাকরির প্রস্তাবে বিশেষ সাবধান",
      q: "রাশিয়ায় কারখানা বা নির্মাণের কাজ, অথবা কম্বোডিয়া, লাওস, মিয়ানমার বা থাইল্যান্ডে অফিস, আইটি বা রেস্টুরেন্টের কাজের কথা বলছে?",
      why: "রাশিয়ায় চাকরির কথা বলে নিয়ে অনেককে যুদ্ধে পাঠানো হয়েছে, ৩ বছরে অন্তত ৫৪ জন মারা গেছেন। ওই চার দেশে চাকরির নামে প্রতারণা কেন্দ্রে পাচারের খবর আছে।" },
    { icon: "🪪", level: "high", source: "tbs12Countries",
      fact: "BMET ছাড়পত্র (স্মার্ট কার্ড) ছাড়া কাজে যাওয়া যায় না — \"এয়ারপোর্টে লোক ম্যানেজ করা আছে\" মানেই বিপদ",
      q: "বলছে কি BMET ছাড়পত্র বা স্মার্ট কার্ড লাগবে না, বা \"এয়ারপোর্টে লোক ম্যানেজ করা আছে\"?",
      why: "ছাড়পত্র ছাড়া গেলে আপনি অবৈধ কর্মী, বিপদে পড়লে সরকারি সাহায্য পাওয়া কঠিন। ১২টি দেশে এখন মন্ত্রণালয়ের অনুমতিও লাগে।" }
  ],

  /* ---------- UPDATES TRACKER (recent changes that affect people going abroad) ---------- */
  // level: "urgent" = act/avoid now, "change" = rule or cost changed, "info" = good to know
  // Add new items at the top. Every item needs a date, a plain-language "todo" and a source.
  UPDATES: [
    { date: "2026-11-04", level: "urgent", country: null,
      countries: ["serbia","moldova","belarus","kosovo","bosnia","japan","iraq","laos","vietnam","cambodia","ukraine","libya"],
      title: "১২ দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের অনুমোদন বাধ্যতামূলক",
      what: "৪ নভেম্বর ২০২৬ থেকে সার্বিয়া, মলদোভা, বেলারুশ, কসোভো, বসনিয়া, জাপান, ইরাক, লাওস, ভিয়েতনাম, কম্বোডিয়া, ইউক্রেন ও লিবিয়ায় কাজে যেতে মন্ত্রণালয়ের নিয়োগানুমতি লাগবে। এই অনুমোদন ছাড়া BMET বহির্গমন ছাড়পত্র (স্মার্ট কার্ড) দেবে না, আর ছাড়পত্র ছাড়া কাজের জন্য দেশ ছাড়া যায় না। শুধু ইউরোপ নয়, এশিয়া ও আফ্রিকার দেশও তালিকায় আছে। মন্ত্রণালয়ের চিঠিতে কারণ লেখা নেই; কর্মকর্তারা প্রতারণা ঠেকানো ও কর্মীদের নিরাপত্তার কথা বলেছেন। একটি পত্রিকার তালিকা একটু আলাদা (কসোভো, বসনিয়া ও কম্বোডিয়ার জায়গায় কঙ্গো, রাশিয়া ও ক্রোয়েশিয়া), সরকারি চিঠি দেখে নিশ্চিত হওয়া বাকি।",
      todo: "এসব দেশের প্রস্তাব পেলে টাকা দেওয়ার আগে এজেন্সির কাছে মন্ত্রণালয়ের নিয়োগানুমতির কপি চান এবং BMET-এ যাচাই করুন। 'ভিসা হয়ে গেছে' বললেই হবে না — অনুমোদন না থাকলে ছাড়পত্র মিলবে না। লাইসেন্সধারী এজেন্সি ছাড়া কারো মাধ্যমে যাবেন না।",
      status: "news", source: "tbs12Countries", extra: ["dhakamail12Countries", "bt12Countries"] },
    { date: "2026-10-26", level: "info", country: "saudi",
      title: "ফ্লাইট বাতিলে আকামার মেয়াদ শেষ হলেও সৌদি আরবে ফেরা যাবে",
      what: "যুদ্ধের কারণে ফ্লাইট বাতিল হওয়ায় যাঁরা সময়মতো সৌদি আরবে ফিরতে পারেননি এবং এর মধ্যে আকামার মেয়াদ শেষ হয়ে গেছে, তাঁরা আবার দেশটিতে ঢুকতে পারবেন — ২৬ অক্টোবর ২০২৬ ঢাকায় সৌদি রাষ্ট্রদূতের উপস্থিতিতে প্রবাসীকল্যাণমন্ত্রী আরিফুল হক চৌধুরী এ কথা জানান। মন্ত্রীর কথায়, ফিরতে পারলে ইলেকট্রনিক সিস্টেমে স্বয়ংক্রিয়ভাবে এন্ট্রি হবে। সৌদি সরকারের লিখিত নির্দেশনা এখনো আমরা দেখিনি।",
      todo: "আকামা শেষ হয়ে গেছে বলে কাউকে 'নতুন ভিসা' বা 'আকামা ঠিক করে দেওয়ার' টাকা দেবেন না — এই সুযোগের নাম করে দালালরা টাকা চাইতে পারে। নিজের নিয়োগকর্তা (কফিল) ও রিয়াদের বাংলাদেশ দূতাবাসের সঙ্গে যোগাযোগ করে নিশ্চিত হোন।",
      status: "news", source: "paSaudiIqama", extra: ["dtSaudiIqama"] },
    { date: "2026-10-12", level: "urgent", country: "malaysia",
      title: "মালয়েশিয়ার শ্রমবাজার আবার খুলছে, কিন্তু চূড়ান্ত খরচ এখনো ঘোষণা হয়নি",
      what: "৩৩৮টি প্রতিষ্ঠান অনুমোদিত (২৫টি মূল এজেন্সি, ৩১২টি সহযোগী, BOESL)। ৩০ সেপ্টেম্বর ২০২৬ পর্যন্ত খরচ, যাত্রার সময় ও পুরো নিয়ম ঘোষণা হয়নি। শিল্প সংশ্লিষ্টরা ৬ লাখ টাকার বেশি খরচের আশঙ্কা করছেন।",
      todo: "সরকারি নির্দেশনা না আসা পর্যন্ত কাউকে টাকা দেবেন না, মেডিকেল করাবেন না, পাসপোর্ট জমা দেবেন না।",
      source: "gvMalaysia2026" },
    { date: "2026-10-01", level: "change", country: null,
      title: "প্রবাসী কল্যাণ ফি বেড়ে ৫,৫০০ টাকা",
      what: "১ অক্টোবর ২০২৬ থেকে ওয়েজ আর্নার্স ওয়েলফেয়ার বোর্ডের ফি ৫,৫০০ টাকা।",
      todo: "এই ফির রসিদ নিন। এর বেশি চাইলে অভিযোগ করুন।",
      source: "tbsWelfare" },
    { date: "2026-07-18", level: "info", country: null,
      title: "‘প্রবাসী কার্ড’ আসছে — চালু হলে আলাদা BMET কার্ড লাগবে না",
      what: "১৮ জুলাই ২০২৬ প্রধানমন্ত্রীর কার্যালয়ের বৈঠকে জানানো হয়, প্রবাসী কার্ড পরীক্ষামূলকভাবে চালু হবে। প্রথম পর্যায়ে জনতা ব্যাংক প্রবাসী ডেবিট (ডুয়াল কারেন্সি) কার্ড দেবে; লক্ষ্য ডিসেম্বর ২০২৬-এর মধ্যে ৫০ হাজার ও জুন ২০২৭-এর মধ্যে ২ লাখ কার্ড। সরকারি হাসপাতালে প্রবাসী সেবা বুথসহ ১০টি সুবিধার কথা বলা হয়েছে, পরে প্রবাসী কল্যাণ ব্যাংক কার্যক্রম চালাবে। মন্ত্রী বলেছেন, এটি চালু হলে আলাদা BMET কার্ড লাগবে না। সবাই কবে পাবেন ও কীভাবে আবেদন করবেন, সে নির্দেশনা এখনো আসেনি।",
      todo: "প্রবাসী কার্ড 'করে দেওয়ার' নামে কাউকে টাকা দেবেন না — সরকারি আবেদনের নিয়ম ঘোষণার অপেক্ষা করুন। এখন যাঁরা কাজে যাচ্ছেন, তাঁদের BMET বহির্গমন ছাড়পত্র (স্মার্ট কার্ড) আগের মতোই লাগবে।",
      status: "news", source: "bssProbashiCard", extra: ["jugBmetCard", "bbProbashiCard"] },
    { date: "2026-07-16", level: "urgent", country: "cambodia",
      title: "কম্বোডিয়ায় চাকরির নামে স্ক্যাম কম্পাউন্ডে পাচার",
      what: "বাংলাদেশি চাকরিপ্রার্থীদের কম্বোডিয়ার স্ক্যাম কম্পাউন্ডে পাচার করার ঘটনা নিয়ে প্রতিবেদন প্রকাশিত হয়েছে।",
      todo: "কম্বোডিয়ার চাকরির প্রস্তাব পেলে BMET-এ যাচাই ছাড়া যাবেন না। টুরিস্ট ভিসায় যাবেন না।",
      source: "kathmanduCambodia" },
    { date: "2026-06-02", level: "change", country: "russia",
      title: "রাশিয়ায় ভুয়া প্রতিশ্রুতিতে কর্মী পাঠানোয় ৩টি এজেন্সির লাইসেন্স বাতিল",
      what: "৩০ জন বাংলাদেশিকে প্রতারণামূলকভাবে পাঠানোর অভিযোগে RS International, Jabal-E-Noor ও TS Overseas Limited-এর লাইসেন্স বাতিল।",
      todo: "এজেন্সির RL নম্বর দিয়ে যাচাই করুন।",
      source: "paRussia" }
  ],

  /* ---------- NEWS (last 30 days, shown on top of the home page) ---------- */
  // date = "YYYY-MM-DD". The app hides anything older than 30 days automatically.
  // Add a new item at the top each week or month: headline as printed, outlet, link. Do not paste article text.
  NEWS: [
    { date: "2026-10-26", title: "আকামার মেয়াদ শেষ হলেও সৌদি প্রবেশের সুযোগ পাবেন প্রবাসীরা: প্রবাসীকল্যাণমন্ত্রী", outlet: "প্রথম আলো", tag: "সৌদি আরব",
      url: "https://www.prothomalo.com/bangladesh/1mfvqk17iy" },
    { date: "2026-11-04", title: "মন্ত্রণালয়ের অনুমোদন ছাড়া কর্মী পাঠানো যাবে না যে ১২ দেশে", outlet: "ঢাকা মেইল", tag: "নতুন নিয়ম",
      url: "https://dhakamail.com/national/340986" },
    { date: "2026-11-02", title: "পাসপোর্টের ৭ ‘দালালকে’ বিভিন্ন মেয়াদে সাজা", outlet: "বাংলা ট্রিবিউন", tag: "দালাল",
      url: "https://banglatribune.com/law-and-crime/978319/%E0%A6%AA%E0%A6%BE%E0%A6%B8%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B0-%E0%A7%AD-%E2%80%98%E0%A6%A6%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%95%E0%A7%87%E2%80%99-%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A8-%E0%A6%AE%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%A6%E0%A7%87-%E0%A6%B8%E0%A6%BE%E0%A6%9C%E0%A6%BE" },
    { date: "2026-10-09", title: "বিদেশে চাকরি দেওয়ার নামে প্রতারণা, গ্রেফতার ১২", outlet: "এশিয়ান টিভি", tag: "প্রতারণা",
      url: "https://www.asiantvonline.com/news/crime/72883/8a61-20261009" }
  ],
  NEWS_SEARCH_URL: "https://www.google.com/search?tbm=nws&tbs=qdr:m&q=%E0%A6%AC%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0+%E0%A6%A6%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%B2+%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%A3%E0%A6%BE",

  /* ---------- MYTHS & FACTS (things many people wrongly believe) ---------- */
  // Each item: myth (the common belief), fact (the truth), todo (what to do), status, source.
  MYTHS: [
    { myth: "বাংলাদেশ থেকে আমেরিকার ডিভি (গ্রিন কার্ড) লটারিতে আবেদন করা যায়।",
      fact: "বাংলাদেশের নাগরিকরা ডিভি লটারিতে আবেদন করতে পারেন না। ২০১২ সাল থেকে বাংলাদেশ এই কর্মসূচির বাইরে, কারণ গত পাঁচ বছরে ৫০ হাজারের বেশি বাংলাদেশি যুক্তরাষ্ট্রে অভিবাসী হয়েছেন। ২০২৬ সালের তালিকাতেও বাংলাদেশ বাদ ছিল। ২০২৭ সালের তালিকা প্রকাশের আগে নিশ্চিত করে কিছু বলা যায় না, তাই শুধু মার্কিন সরকারের সাইটে দেখুন।",
      todo: "ডিভি লটারির নামে কাউকে টাকা, NID বা পাসপোর্টের কপি দেবেন না। মার্কিন সরকার ইমেইল বা ফোনে লটারি জেতার খবর জানায় না।",
      status: "news", source: "dv2026", extra: ["dvEmbassy", "dvFraud", "dvJago"] },
    { myth: "টাকা দিলে 'গ্রিন কার্ড' বা আমেরিকার ভিসা নিশ্চিত করে দেওয়া যায়।",
      fact: "কেউ ভিসা বা গ্রিন কার্ডের নিশ্চয়তা দিতে পারে না। ভিসা দেওয়ার সিদ্ধান্ত নেয় শুধু সংশ্লিষ্ট দেশের দূতাবাস বা সরকার। এ ধরনের প্রস্তাব প্রায় সবসময় প্রতারণা।",
      todo: "ভিসার তথ্য শুধু দূতাবাসের অফিসিয়াল ওয়েবসাইট থেকে নিন।",
      status: "draft" },
    { myth: "ট্যুরিস্ট বা ভিজিট ভিসায় গিয়ে ওখানে কাজের ভিসা করে নেওয়া যায়।",
      fact: "বেশিরভাগ দেশে এটা সম্ভব নয়। এভাবে গিয়ে কাজ করলে অবৈধ হিসেবে ধরা পড়তে, জেল বা দেশে ফেরত পাঠানোর ঝুঁকি থাকে।",
      todo: "শুধু কাজের ভিসা (ওয়ার্ক পারমিট) ও BMET ছাড়পত্র নিয়ে যান।",
      status: "draft" },
    { myth: "সোশ্যাল মিডিয়ায় 'ঘরে বসে বিদেশে চাকরি' বা 'ফ্রি ভিসা' বিজ্ঞাপন সত্য।",
      fact: "ফেসবুক পেজ ও জব সাইটে ভুয়া বিজ্ঞাপন দিয়ে ছবি, NID নম্বর ও টাকা নেওয়ার ঘটনা ঘটেছে। 'ফ্রি ভিসা' মানে সাধারণত নিজে চাকরি খুঁজতে হবে এবং অনেক সময় অবৈধ অবস্থায় পড়তে হয়।",
      todo: "বিজ্ঞাপনে এজেন্সির RL নম্বর না থাকলে এড়িয়ে যান, নম্বর থাকলে সরকারি তালিকায় মিলিয়ে নিন।",
      status: "draft" },
    { myth: "বেশি টাকা দিলে সবকিছু দ্রুত ও নিরাপদে হয়ে যায়।",
      fact: "সরকার প্রতিটি দেশের জন্য সর্বোচ্চ খরচ ঠিক করেছে। এর বেশি দিলে নিরাপত্তা বাড়ে না, ঋণের বোঝা বাড়ে।",
      todo: "দেশের পাতায় সরকারি খরচ দেখুন, বেশি চাইলে রসিদ চান ও অভিযোগ করুন।",
      status: "draft" }
  ],

  /* ---------- WHERE TO GET HELP ---------- */
  // phone: null = not yet verified, app will show "নম্বর যাচাই চলছে"
  CONTACTS: [
    { name: "আমি প্রবাসী — ভিসা যাচাই", phone: "16768", note: "সৌদি আরব, কাতার, ওমানের ভিসা যাচাই (সামান্য ফি)", url: null, source: "amiProbashiIvr" },
    { name: "BMET — এজেন্সি তালিকা", phone: null, note: "এজেন্সির লাইসেন্স অবস্থা দেখুন", url: "https://oep.gov.bd/agencies" },
    { name: "BAIRA — সদস্য এজেন্সি তালিকা", phone: null, note: "দ্বিতীয়বার যাচাইয়ের জন্য", url: "https://baira.org.bd/dir/all-member-list" },
    { name: "জেলা কর্মসংস্থান ও জনশক্তি অফিস (DEMO)", phone: null, note: "নিজের জেলার অফিসে সরাসরি অভিযোগ করুন", url: null },
    { name: "BMET প্রধান কার্যালয়, ঢাকা", phone: null, note: "প্রতারণার অভিযোগ", url: "https://bmet.gov.bd" }
  ]
};
