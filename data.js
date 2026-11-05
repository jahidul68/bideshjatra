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
    lastUpdated: "2026-11-05",
    version: "0.1 (পরীক্ষামূলক)",
    // Put the public link here once hosted (used by the Share button)
    siteUrl: ""
  },

  /* ---------- SOURCES ---------- */
  SOURCES: {
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
    }
  },

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
  COUNTRIES: [
    { id: "saudi", access: { state: "open", note: "বাংলাদেশি কর্মীদের সবচেয়ে বড় গন্তব্য, বাংলাদেশ থেকে যাওয়া কর্মীদের অর্ধেকের বেশি এখানে যান।", source: "bdn24Market" },
      detail: {
        covered: ["বিমান ভাড়া", "পাসপোর্ট ফি", "প্রবাসী কল্যাণ ফি"],
        coveredNote: "২০১৬ সালের প্রতিবেদন অনুযায়ী ১.৬৫ লাখ টাকার মধ্যে এই খরচগুলো ধরা হয়েছে। প্রতিটির আলাদা টাকার অঙ্ক প্রকাশিত নেই।",
        employerNote: "সৌদি নিয়োগকর্তা বিমান ভাড়া দিলে খরচ কমার কথা বলেছেন বিএমইটির মহাপরিচালক।",
        routes: ["লাইসেন্সপ্রাপ্ত রিক্রুটিং এজেন্সির মাধ্যমে (এজেন্সিগুলো বায়রার সঙ্গে সরকারি নির্ধারিত খরচ মানার কথা জানিয়েছিল)"],
        status: "news", source: "dsSaudi"
      },
      name: "সৌদি আরব",   flag: "🇸🇦", cap: { amount: 165000, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: true },
    { id: "malaysia", access: { state: "limited", note: "শ্রমবাজার আবার খুলছে, কিন্তু নতুন পর্বের চূড়ান্ত খরচ ও নিয়ম এখনো ঘোষণা হয়নি।", source: "gvMalaysia2026" },
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
    { id: "qatar", access: { state: "limited", note: "সরকারিভাবে বন্ধ নয়। মন্ত্রণালয় নিষেধাজ্ঞার খবরকে গুজব বলেছিল (প্রায় এক বছর আগের খবর)। তবে সেখানে যাওয়া কর্মীর সংখ্যা কমেছে বলে প্রতিবেদন আছে।", source: "tbsQatarRumour" },     name: "কাতার",      flag: "🇶🇦", cap: { amount: 100780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: true },
    { id: "oman", access: { state: "closed", note: "বাংলাদেশি কর্মী নেওয়া স্থগিত থাকার খবর আছে (সূত্রে তারিখ নিয়ে অমিল)। আবার খোলার আলোচনা চলছে।", source: "dsLabourWall" },      name: "ওমান",       flag: "🇴🇲", cap: { amount: 100780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: true },
    { id: "uae", access: { state: "limited", note: "নতুন কাজের ভিসা বন্ধের সরকারি ঘোষণা পাইনি, দূতাবাস এমন খবরকে গুজব বলেছে। তবে ২০২৬ সালের সেপ্টেম্বরে ৪ হাজারের বেশি বাংলাদেশির ভিসা বাতিল হয়েছে।", source: "dsUaeCancel" },       name: "সংযুক্ত আরব আমিরাত", flag: "🇦🇪", cap: { amount: 107780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "kuwait", access: { state: "unknown", note: "নিষেধাজ্ঞার কোনো খবর পাইনি, কিন্তু নির্ভরযোগ্য সরকারি তথ্যও পাইনি।", source: null },    name: "কুয়েত",      flag: "🇰🇼", cap: { amount: 106780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: false },
    { id: "singapore", access: { state: "open", note: "বাংলাদেশি কর্মী যাচ্ছেন। ২০২৬ সালের প্রথম ছয় মাসে ৩৬ হাজারের বেশি কর্মী গেছেন বলে প্রতিবেদন আছে।", source: "bdn24Market" }, name: "সিঙ্গাপুর",   flag: "🇸🇬", cap: { amount: 262270, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: false },
    { id: "bahrain", access: { state: "closed", note: "বাংলাদেশি কর্মী নেওয়া বন্ধ থাকার তালিকায় আছে। নিশ্চিত হতে BMET-এ দেখুন।", source: "dsLabourWall" },   name: "বাহরাইন",    flag: "🇧🇭", cap: { amount: 97780,  year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "jordan", access: { state: "unknown", note: "এই দেশ নিয়ে নির্ভরযোগ্য তথ্য পাইনি।", source: null },    name: "জর্ডান",     flag: "🇯🇴", cap: { amount: 102780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "maldives", access: { state: "closed", note: "কাজের ভিসা স্থগিত হয়েছিল বলে প্রতিবেদন আছে। অন্য একটি প্রতিবেদনে ভিন্ন তথ্য আছে, তাই BMET-এ নিশ্চিত হয়ে নিন।", source: "dsMaldives" },  name: "মালদ্বীপ",   flag: "🇲🇻", cap: { amount: 115780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "lebanon", access: { state: "unknown", note: "এই দেশ নিয়ে নির্ভরযোগ্য তথ্য পাইনি।", source: null },   name: "লেবানন",     flag: "🇱🇧", cap: { amount: 117780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "brunei", access: { state: "closed", note: "বন্ধ থাকা বাজারের তালিকায় আছে, বর্তমান অবস্থা স্পষ্ট নয়। BMET-এ নিশ্চিত হয়ে নিন।", source: "dsLabourWall" },    name: "ব্রুনাই",     flag: "🇧🇳", cap: { amount: 120780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "iraq", access: { state: "unknown", note: "অতীতে বন্ধ থাকা বাজারের তালিকায় ছিল, বর্তমান অবস্থা নিশ্চিত নয়।", source: "dsLabourWall" },      name: "ইরাক",       flag: "🇮🇶", cap: { amount: 129540, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "japan", access: { state: "limited", note: "চুক্তি আছে, কিন্তু ভাষা ও দক্ষতার শর্তে খুব কম মানুষ যেতে পারছেন।", source: "bonikJapan" },     name: "জাপান",      flag: "🇯🇵", cap: { amount: 148500, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "russia", access: { state: "unknown", note: "সরকারি তথ্য পাইনি। ভুয়া প্রস্তাব নিয়ে সতর্কতা আছে।", source: null },    name: "রাশিয়া",     flag: "🇷🇺", cap: null, reported: null, visaCheck: false,
      warning: { text: "২০২৬ সালের জুনে ভুয়া প্রতিশ্রুতি দিয়ে ৩০ জন তরুণকে রাশিয়ায় পাঠানোর অভিযোগে ৩টি এজেন্সির লাইসেন্স বাতিল করা হয়েছে। বেশি বেতনের লোভনীয় প্রস্তাব পেলে বিশেষ সতর্ক থাকুন।", source: "paRussia" } },
    { id: "korea", access: { state: "limited", note: "সরকার-থেকে-সরকার (EPS) চুক্তির মাধ্যমে কর্মী যান, কিন্তু বরাদ্দ কোটার মাত্র ৩৭% পূরণ হয়েছে। ভাষা পরীক্ষা পাস করতে হয়।", source: "koreaQuota" },
      detail: {
        routes: ["সরকারি প্রতিষ্ঠান BOESL-এর মাধ্যমে (সরকার-থেকে-সরকার চুক্তি)"],
        employerNote: "রিপোর্ট অনুযায়ী পাঁচ বছরে কোটার মাত্র ৩৭% কর্মী পাঠানো গেছে। দালাল বা বেসরকারি এজেন্সিকে টাকা দিয়ে এই পথে যাওয়ার প্রয়োজন নেই।",
        status: "news", source: "koreaQuota",
        latest: { text: "পাঁচ বছরে প্রায় ১৪,৮২৯ জন কর্মী গেছেন, যা বরাদ্দ কোটার প্রায় ৩৭%। ভাষা পরীক্ষা (EPS-TOPIK) পাস করা বহু কর্মী এখনো যাওয়ার অপেক্ষায়।", source: "koreaQuota" }
      },
      name: "দক্ষিণ কোরিয়া", flag: "🇰🇷", cap: null, reported: null, visaCheck: false },
    { id: "italy", access: { state: "limited", note: "ইতালির সঙ্গে ২০২০ সালের চুক্তিতে বৈধ পথ আছে, কিন্তু কম কর্মী যাচ্ছেন। ২০২০–২০২৩ সালে কাজের ভিসায় যাওয়াদের প্রায় ৮০% পরে অবৈধ হয়ে পড়েছেন বলে প্রতিবেদন আছে।", source: "paItaly" }, detail: { routes: ["ইতালি ও বাংলাদেশের মধ্যকার ২০২০ সালের চুক্তির আওতায় বৈধ পথ"], employerNote: "ইতালীয় দূতাবাসের এক বিশেষজ্ঞের মতে ইতালি ১,৫০,০০০ দক্ষ কর্মী নেওয়ার পরিকল্পনা করছে এবং বাংলাদেশ সেই তালিকায় আছে; ভিসা ফি ৬৫ ইউরো।", status: "news", source: "paItalyExpert" },
      name: "ইতালি", flag: "🇮🇹", cap: null, reported: null, visaCheck: false,
      warning: { text: "ভিসার সরকারি ফি মাত্র ৬৫ ইউরো বলে ইতালীয় দূতাবাসের এক বিশেষজ্ঞ জানিয়েছেন, অথচ বাংলাদেশে দালালরা অনেক বেশি টাকা নেয়। 'ইতালির ভিসা' বলে বড় অঙ্কের টাকা চাইলে সতর্ক হোন।", source: "paItaly" } },
    { id: "romania", access: { state: "limited", note: "শ্রমবাজার খোলা, কিন্তু বহু বাংলাদেশি বিপুল টাকা দিয়েও প্রতিশ্রুত কাজ বা ওয়ার্ক পারমিট পাননি।", source: "tbsRomania" }, detail: { employerNote: "২০২০ সালে সরকারি ব্যবস্থায় ১,৬৫,০০০ টাকা নির্ধারিত ছিল বলে প্রতিবেদন আছে, অথচ বেসরকারি রিক্রুটারদের আসল খরচ ১০–১২ লাখ টাকা বলা হয়েছে। রোমানিয়ার শ্রমবাজার খুলছে বলেও প্রতিবেদন আছে।", status: "news", source: "dsRomania" },
      name: "রোমানিয়া", flag: "🇷🇴", cap: null, reported: { min: 600000, max: 800000, source: "tbsRomania", note: "এজেন্সির নেওয়া টাকা (টিবিএসের প্রতিবেদন); অন্য সূত্রে ১০–১২ লাখ টাকাও বলা হয়েছে" }, visaCheck: false,
      warning: { text: "রোমানিয়ার বাংলাদেশ চেম্বার অন্তত ২০০টি প্রতিশ্রুতি ভঙ্গের অভিযোগ সামলেছে। আগে নিশ্চিত হোন চাকরিদাতা ও ওয়ার্ক পারমিট সত্যি কিনা, এরপর টাকা দিন।", source: "tbsRomania" } },
    { id: "libya", access: { state: "unknown", note: "লিবিয়া বাংলাদেশি কর্মী নেওয়ার আগ্রহ জানালেও ২০২৬ সালেও লিবিয়া থেকে বহু বাংলাদেশিকে ফেরত আনা হচ্ছে। নির্ভরযোগ্য বৈধ পথের তথ্য পাইনি।", source: "dsLibyaReturn" }, detail: { employerNote: "লিবিয়া দক্ষ ও আধা-দক্ষ কর্মী (চিকিৎসা কর্মীসহ) নেওয়ার আগ্রহ আবার জানিয়েছে (প্রতিবেদনের তারিখ অস্পষ্ট)। তবু ফেরত আসা কর্মীদের বেশিরভাগই অবৈধভাবে ইউরোপ যেতে লিবিয়ায় ঢুকেছিলেন।", status: "news", source: "libyaMonitor" },
      name: "লিবিয়া", flag: "🇱🇾", cap: null, reported: null, visaCheck: false,
      warning: { text: "২০২৬ সালের সেপ্টেম্বরে লিবিয়ার আটককেন্দ্র থেকে ১৭৪ বাংলাদেশি ফিরেছেন। ইউরোপ যাওয়ার লোভ দেখিয়ে লিবিয়া হয়ে সাগরপথে নিয়ে যাওয়ার প্রস্তাব বিপজ্জনক ও অবৈধ।", source: "dsLibyaReturn" } },
    { id: "serbia", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "সার্বিয়া", flag: "🇷🇸", cap: null, reported: null, visaCheck: false },
    { id: "bosnia", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "বসনিয়া", flag: "🇧🇦", cap: null, reported: null, visaCheck: false },
    { id: "kosovo", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "কসোভো", flag: "🇽🇰", cap: null, reported: null, visaCheck: false },
    { id: "moldova", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "মলদোভা", flag: "🇲🇩", cap: null, reported: null, visaCheck: false },
    { id: "belarus", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "বেলারুশ", flag: "🇧🇾", cap: null, reported: null, visaCheck: false },
    { id: "ukraine", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "ইউক্রেন", flag: "🇺🇦", cap: null, reported: null, visaCheck: false },
    { id: "vietnam", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "ভিয়েতনাম", flag: "🇻🇳", cap: null, reported: null, visaCheck: false },
    { id: "laos", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "লাওস", flag: "🇱🇦", cap: null, reported: null, visaCheck: false },
    { id: "cambodia", access: { state: "limited", note: "৪ নভেম্বর ২০২৬ থেকে এই দেশে কাজে যেতে প্রবাসী কল্যাণ মন্ত্রণালয়ের নিয়োগানুমতি লাগবে, অনুমোদন ছাড়া BMET ছাড়পত্র দেবে না।", source: "tbs12Countries" }, name: "কম্বোডিয়া", flag: "🇰🇭", cap: null, reported: null, visaCheck: false,
      warning: { text: "কম্বোডিয়ায় চাকরির নামে বাংলাদেশিদের স্ক্যাম কম্পাউন্ডে পাচারের খবর আছে। টুরিস্ট ভিসায় যাবেন না।", source: "kathmanduCambodia" } }
  ],

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
