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
    lastUpdated: "2026-11-01",
    version: "0.1 (পরীক্ষামূলক)",
    // Put the public link here once hosted (used by the Share button)
    siteUrl: ""
  },

  /* ---------- SOURCES ---------- */
  SOURCES: {
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
    oep: {
      title: "BMET Overseas Employment Platform — agency search",
      url: "https://oep.gov.bd/agencies",
      date: ""
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
    { id: "saudi",     name: "সৌদি আরব",   flag: "🇸🇦", cap: { amount: 165000, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: true },
    { id: "malaysia",  name: "মালয়েশিয়া",  flag: "🇲🇾", cap: { amount: 78990,  year: "২০২২", status: "news", source: "tbsMalaysia" }, reported: null, visaCheck: false },
    { id: "qatar",     name: "কাতার",      flag: "🇶🇦", cap: { amount: 100780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: true },
    { id: "oman",      name: "ওমান",       flag: "🇴🇲", cap: { amount: 100780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: true },
    { id: "uae",       name: "সংযুক্ত আরব আমিরাত", flag: "🇦🇪", cap: { amount: 107780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "kuwait",    name: "কুয়েত",      flag: "🇰🇼", cap: { amount: 106780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "উপসাগরীয় দেশে স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: false },
    { id: "singapore", name: "সিঙ্গাপুর",   flag: "🇸🇬", cap: { amount: 262270, year: "২০১৭", status: "news", source: "tbs2024" }, reported: { min: 400000, max: 1000000, source: "tbs2024", note: "স্বল্পদক্ষ কর্মীদের খরচ (খাত সংশ্লিষ্টদের তথ্য)" }, visaCheck: false },
    { id: "bahrain",   name: "বাহরাইন",    flag: "🇧🇭", cap: { amount: 97780,  year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "jordan",    name: "জর্ডান",     flag: "🇯🇴", cap: { amount: 102780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "maldives",  name: "মালদ্বীপ",   flag: "🇲🇻", cap: { amount: 115780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "lebanon",   name: "লেবানন",     flag: "🇱🇧", cap: { amount: 117780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "brunei",    name: "ব্রুনাই",     flag: "🇧🇳", cap: { amount: 120780, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "iraq",      name: "ইরাক",       flag: "🇮🇶", cap: { amount: 129540, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "japan",     name: "জাপান",      flag: "🇯🇵", cap: { amount: 148500, year: "২০১৭", status: "news", source: "tbs2024" }, reported: null, visaCheck: false },
    { id: "russia",    name: "রাশিয়া",     flag: "🇷🇺", cap: null, reported: null, visaCheck: false,
      warning: { text: "২০২৬ সালের জুনে ভুয়া প্রতিশ্রুতি দিয়ে ৩০ জন তরুণকে রাশিয়ায় পাঠানোর অভিযোগে ৩টি এজেন্সির লাইসেন্স বাতিল করা হয়েছে। বেশি বেতনের লোভনীয় প্রস্তাব পেলে বিশেষ সতর্ক থাকুন।", source: "paRussia" } }
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

  /* ---------- NEWS (last 7 days, shown on top of the home page) ---------- */
  // date = "YYYY-MM-DD". The app hides anything older than 7 days automatically.
  // Add a new item at the top each week: headline as printed, outlet, link. Do not paste article text.
  NEWS: [
    { date: "2026-11-02", title: "পাসপোর্টের ৭ ‘দালালকে’ বিভিন্ন মেয়াদে সাজা", outlet: "বাংলা ট্রিবিউন", tag: "দালাল",
      url: "https://banglatribune.com/law-and-crime/978319/%E0%A6%AA%E0%A6%BE%E0%A6%B8%E0%A6%AA%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B0-%E0%A7%AD-%E2%80%98%E0%A6%A6%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%B2%E0%A6%95%E0%A7%87%E2%80%99-%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%A8-%E0%A6%AE%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%A6%E0%A7%87-%E0%A6%B8%E0%A6%BE%E0%A6%9C%E0%A6%BE" }
  ],
  NEWS_SEARCH_URL: "https://www.google.com/search?tbm=nws&tbs=qdr:w&q=%E0%A6%AC%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0+%E0%A6%A6%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%B2+%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%A3%E0%A6%BE",

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
