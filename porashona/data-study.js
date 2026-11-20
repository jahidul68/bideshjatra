/* Student section data (dalalnaki.com/porashona/).
   Update this file when a rule changes, then change META.checked.
   Each fact row: [label, text, status]; status 'draft' = taken from a news or university site, official page not yet read. */
window.STUDY_DATA = {
META: { checked: '১৬ নভেম্বর ২০২৬', version: 'খসড়া ২' },

COUNTRIES: [
{
  id: 'uk', short: '£১০,৮২৭ / ৯ মাস', flag: '../flags/gb.png', name: 'যুক্তরাজ্য', en: 'United Kingdom',
  visa: 'Student visa', who: 'UK Visas and Immigration (UKVI)',
  official: 'https://www.gov.uk/student-visa',
  money: { big: '£১০,৮২৭', unit: 'থাকা-খাওয়ার জন্য (লন্ডনের বাইরে, ৯ মাস)',
    note: 'লন্ডনে পড়লে £১৪,১৩০। এর সাথে প্রথম বছরের বাকি টিউশন ফি। টাকা টানা ২৮ দিন অ্যাকাউন্টে থাকতে হবে।' },
  rows: [
    ['মাসিক হার', '৩০ নভেম্বর ২০২৬ থেকে মাসে £১,২০৩ (লন্ডনের বাইরে) ও £১,৫৭০ (লন্ডন), সর্বোচ্চ ৯ মাস। এর আগে আবেদন করলে £১,১৭১ ও £১,৫২৯।'],
    ['ভিসা ফি', '£৫৫৮, সাথে প্রতি বছরের জন্য £৭৭৬ হেলথ সারচার্জ (IHS)। দুটোই আবেদনের সময় দিতে হয়।'],
    ['ইংরেজি', 'ইংরেজির প্রমাণ লাগে। কোন পরীক্ষা চলবে তা বিশ্ববিদ্যালয় ঠিক করে, আপনার CAS-এ লেখা থাকে।'],
    ['কাজ', 'ডিগ্রি পর্যায়ে ক্লাস চলাকালে সপ্তাহে সর্বোচ্চ ২০ ঘণ্টা, ছুটিতে পুরো সময়।'],
    ['পড়া শেষে', 'Graduate visa: ১ জানুয়ারি ২০২৭ বা তার পরে আবেদন করলে ১৮ মাস (আগে ছিল ২ বছর)। PhD হলে ৩ বছর।']
  ],
  news: ['৩০ নভেম্বর ২০২৬ থেকে দেখানোর টাকা বাড়ছে।', '১ জানুয়ারি ২০২৭ থেকে Graduate visa ২ বছর থেকে কমে ১৮ মাস।'],
  docs: [
    ['পাসপোর্ট', 'মেয়াদ পুরো পড়ার সময় জুড়ে থাকলে ভালো'],
    ['CAS নম্বর', 'বিশ্ববিদ্যালয় অফার কনফার্ম করলে দেয়'],
    ['ব্যাংক স্টেটমেন্ট', 'টানা ২৮ দিন টাকা ছিল, আর সেই ২৮ দিন শেষ হয়েছে আবেদনের ৩১ দিনের মধ্যে'],
    ['যক্ষ্মা (TB) পরীক্ষার সনদ', 'বাংলাদেশ থেকে ৬ মাসের বেশি থাকলে লাগে, শুধু UK-অনুমোদিত ক্লিনিক থেকে'],
    ['আগের সার্টিফিকেট ও মার্কশিট', 'CAS-এ যেগুলো লেখা আছে'],
    ['ইংরেজির প্রমাণ', 'CAS-এ যেটি লেখা আছে']
  ],
  src: [
    ['GOV.UK: Student visa', 'https://www.gov.uk/student-visa', 'official'],
    ['Student visa maintenance funds increase (OTS Solicitors)', 'https://www.otssolicitors.co.uk/news/student-visa-maintenance-funds-increase-from-30-november-2026/', 'news'],
    ['Changes to Graduate visas from 1 January 2027 (University of Salford)', 'https://www.salford.ac.uk/askus/immigration-and-visas/changes-to-graduate-visas-from-1-january-2027', 'news']
  ]
},
{
  id: 'au', short: 'AUD ২৯,৭১০ / বছর', flag: '../flags/au.png', name: 'অস্ট্রেলিয়া', en: 'Australia',
  visa: 'Student visa (subclass 500)', who: 'Department of Home Affairs',
  official: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
  money: { big: 'AUD ২৯,৭১০', unit: 'এক বছরের থাকা-খাওয়া',
    note: 'এর সাথে টিউশন ফি ও যাতায়াত। কাকে টাকা দেখাতে হবে তা দেশ ও প্রতিষ্ঠান অনুযায়ী আলাদা হতে পারে।' },
  rows: [
    ['ভিসা ফি', '১ জুলাই ২০২৬ থেকে AUD ২,৫০০ (আগে ২,০০০)। ভিসা না পেলেও ফেরত হয় না।'],
    ['Genuine Student', 'কেন এই কোর্স, কেন অস্ট্রেলিয়া, পড়া শেষে কী করবেন: এই প্রশ্নগুলোর উত্তর নিজের ভাষায় লিখতে হয়।'],
    ['স্বাস্থ্য বীমা', 'পুরো ভিসার মেয়াদের জন্য OSHC বীমা বাধ্যতামূলক।'],
    ['কাজ', 'ক্লাস চলাকালে দুই সপ্তাহে সর্বোচ্চ ৪৮ ঘণ্টা, ছুটিতে বেশি।'],
    ['পড়া শেষে', 'Temporary Graduate visa (subclass 485)। এর আবেদন ফি AUD ৫,৭৫০ থেকে শুরু।', 'draft']
  ],
  news: ['১ জুলাই ২০২৬ থেকে ভিসা ফি AUD ২,৫০০।'],
  docs: [
    ['CoE (Confirmation of Enrolment)', 'বিশ্ববিদ্যালয় টিউশনের প্রথম কিস্তি পেলে দেয়'],
    ['পাসপোর্ট', ''],
    ['Genuine Student-এর উত্তর', 'নিজে লিখুন; কনসালটেন্সির কপি করা লেখা ধরা পড়ে'],
    ['টাকার প্রমাণ', 'ব্যাংক স্টেটমেন্ট, লোন বা বৃত্তির কাগজ, টাকার উৎস সহ'],
    ['ইংরেজি পরীক্ষার ফল', 'IELTS, PTE বা অনুমোদিত অন্য পরীক্ষা'],
    ['OSHC বীমার প্রমাণ', ''],
    ['স্বাস্থ্য পরীক্ষা ও বায়োমেট্রিক', 'বলা হলে']
  ],
  src: [
    ['Home Affairs: Student visa (subclass 500)', 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500', 'official'],
    ['Student visa fee from 1 July 2026 (IDP)', 'https://www.idp.com/australia/study-to-migrate/student-visa-500/', 'news'],
    ['Financial capacity 2026: AUD 29,710 (One Planet Migration Law)', 'https://oneplanetmigrationlaw.com.au/immigration-blog/student-visa-500-financial-capacity-requirement-2026/', 'news'],
    ['Visa fees from July 2026 (Tuoi Tre)', 'https://news.tuoitre.vn/australia-increases-student-visa-fee-including-one-for-vietnamese-students-10326070514532829.htm', 'news']
  ]
},
{
  id: 'ca', short: 'CAD ২৩,৪৪৮ / বছর', flag: '../flags/ca.png', name: 'কানাডা', en: 'Canada',
  visa: 'Study permit', who: 'IRCC (Immigration, Refugees and Citizenship Canada)',
  official: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
  money: { big: 'CAD ২৩,৪৪৮', unit: 'এক বছরের থাকা-খাওয়া (একজন, কুইবেকের বাইরে)',
    note: '১ সেপ্টেম্বর ২০২৬ বা পরে আবেদনে। এর সাথে প্রথম বছরের টিউশন ও যাতায়াতের টাকা আলাদা দেখাতে হয়। কুইবেকের নিয়ম আলাদা।' },
  rows: [
    ['আবেদন ফি', 'CAD ১৫০, সাথে বায়োমেট্রিক CAD ৮৫।'],
    ['PAL চিঠি', 'বেশিরভাগ আবেদনে প্রদেশের Provincial Attestation Letter লাগে, কারণ দেশে নতুন স্টাডি পারমিটের সংখ্যা সীমিত।'],
    ['টাকার উৎস', 'শুধু টাকার পরিমাণ নয়, টাকা কোথা থেকে এলো সেটাও খুঁটিয়ে দেখা হয়। হঠাৎ বড় জমা থাকলে ব্যাখ্যা দিন।'],
    ['কাজ', 'ক্লাস চলাকালে ক্যাম্পাসের বাইরে সপ্তাহে সর্বোচ্চ ২৪ ঘণ্টা, ছুটিতে পুরো সময়।'],
    ['পড়া শেষে', 'Post-Graduation Work Permit (PGWP), প্রোগ্রাম অনুযায়ী সর্বোচ্চ ৩ বছর। সব কোর্স যোগ্য নয়, ভর্তির আগে মিলিয়ে নিন।']
  ],
  news: ['১ সেপ্টেম্বর ২০২৬ থেকে দেখানোর টাকা CAD ২২,৮৯৫ থেকে বেড়ে ২৩,৪৪৮।'],
  docs: [
    ['ভর্তির চিঠি (DLI থেকে)', 'প্রতিষ্ঠানটি সরকারের DLI তালিকায় আছে কিনা দেখুন'],
    ['PAL', 'প্রতিষ্ঠান সাধারণত ব্যবস্থা করে দেয়'],
    ['পাসপোর্ট', ''],
    ['টাকার প্রমাণ', 'GIC, ব্যাংক স্টেটমেন্ট, লোন বা বৃত্তি, উৎসের প্রমাণসহ'],
    ['স্টাডি প্ল্যান / চিঠি', 'কেন এই কোর্স, পড়া শেষে কী করবেন'],
    ['বায়োমেট্রিক ও স্বাস্থ্য পরীক্ষা', 'বলা হলে']
  ],
  src: [
    ['IRCC: Study permit', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html', 'official'],
    ['Updated financial requirements from 1 September 2026 (SFU)', 'https://www.sfu.ca/students/isap/news/newsletters/new-financial-requirements-for-study-permit-application--effecti.html', 'news'],
    ['Canada hikes funds needed by study permit applicants (CIC News)', 'https://www.cicnews.com/2026/08/canada-hikes-funds-needed-by-study-permit-applicants-0879805.html', 'news']
  ]
},
{
  id: 'nz', short: 'NZD ২০,০০০ / বছর', flag: '../flags/nz.svg', name: 'নিউজিল্যান্ড', en: 'New Zealand',
  visa: 'Fee Paying Student Visa', who: 'Immigration New Zealand (INZ)',
  official: 'https://www.immigration.govt.nz/visas/fee-paying-student-visa/',
  money: { big: 'NZD ২০,০০০', unit: 'প্রতি বছরের থাকা-খাওয়া',
    note: 'এক বছরের কম কোর্স হলে মাসে NZD ১,৬৬৭। টিউশন ফি দেওয়া হয়েছে তার প্রমাণও লাগে।' },
  rows: [
    ['ভিসা ফি', 'NZD ৮৫০ থেকে (অনলাইনে)।', 'draft'],
    ['কাজ', '৩ নভেম্বর ২০২৫ থেকে ক্লাস চলাকালে সপ্তাহে সর্বোচ্চ ২৫ ঘণ্টা (আগে ২০), যদি ভিসার শর্তে কাজের অনুমতি থাকে। ছুটিতে পুরো সময়।'],
    ['বীমা', 'পুরো সময়ের জন্য ভ্রমণ ও স্বাস্থ্য বীমা লাগে।'],
    ['পড়া শেষে', 'Post Study Work Visa, যোগ্যতা অনুযায়ী সর্বোচ্চ ৩ বছর।']
  ],
  news: ['সপ্তাহে কাজের সীমা ২০ থেকে ২৫ ঘণ্টা হয়েছে।'],
  docs: [
    ['Offer of Place', 'অনুমোদিত প্রতিষ্ঠান থেকে'],
    ['টিউশন ফি দেওয়ার প্রমাণ', ''],
    ['টাকার প্রমাণ', 'পরিষ্কার লেনদেনের ইতিহাসসহ ব্যাংক স্টেটমেন্ট'],
    ['স্বাস্থ্য পরীক্ষা ও বুকের এক্স-রে', 'থাকার মেয়াদ অনুযায়ী'],
    ['পুলিশ ক্লিয়ারেন্স', 'লম্বা সময় থাকলে'],
    ['বীমার প্রমাণ', '']
  ],
  src: [
    ['INZ: Fee Paying Student Visa', 'https://www.immigration.govt.nz/visas/fee-paying-student-visa/', 'official'],
    ['Student visa funds and work rights (Visa Atlas, checked July 2026)', 'https://visaatlas.org/visas/new-zealand/student-visa-nz', 'news']
  ]
},
{
  id: 'dk', short: 'টিউশন দিলে লাগে না', flag: '../flags/dk.svg', name: 'ডেনমার্ক', en: 'Denmark',
  visa: 'Residence permit, higher education (ST1)', who: 'SIRI (nyidanmark.dk)',
  official: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-education',
  money: { big: 'DKK ৭,৪২৬', unit: 'প্রতি মাস, শুধু টিউশন না দিলে',
    note: 'পুরো ডিগ্রির টিউশন দিলে সাধারণত আলাদা টাকা দেখাতে হয় না। টিউশন মওকুফ পেলে মাসে DKK ৭,৪২৬ (২০২৬), এক বছরের বেশি হলে সর্বোচ্চ ১২ মাস = DKK ৮৯,১১২। টাকা হতে হবে আপনার নিজের নামে।' },
  rows: [
    ['আবেদন ফি', 'DKK ৩,০৬০। আগে case order ID বানিয়ে ফি দিতে হয়, ব্যাংকের রসিদ রাখুন।'],
    ['সময়', 'সাধারণত ২ মাস।'],
    ['কাজ', 'সেপ্টেম্বর থেকে মে পর্যন্ত মাসে ৯০ ঘণ্টা, জুন থেকে আগস্ট পুরো সময়।'],
    ['পরিবার', 'ব্যাচেলর ও মাস্টার্সে ১ অক্টোবর ২০২৬ বা পরে আবেদন করলে স্বামী/স্ত্রী বা সন্তান আনতে পারবেন না। পিএইচডি ছাত্রছাত্রীরা এখনো পরিবার আনতে পারবেন।'],
    ['পড়া শেষে', 'চাকরি খোঁজার অনুমতি। ১ অক্টোবর ২০২৬ বা পরে আবেদনে সাধারণত ৬ মাস বা ১ বছর, স্টাডি পারমিটের সাথেই দেওয়া হয়।']
  ],
  news: ['১ অক্টোবর ২০২৬ থেকে পরিবার আনা ও চাকরি খোঁজার অনুমতির নিয়ম বদলেছে।'],
  docs: [
    ['ভর্তির চিঠি', 'রাষ্ট্র-অনুমোদিত প্রোগ্রামে, ফুল টাইম'],
    ['Case order ID ও ফির রসিদ', ''],
    ['ST1 আবেদন ফর্ম', 'বিশ্ববিদ্যালয় অংশটি পূরণ করে'],
    ['পাসপোর্ট', ''],
    ['টাকার প্রমাণ', 'শুধু টিউশন না দিলে; নিজের নামে'],
    ['বায়োমেট্রিক', 'আবেদনের পর দূতাবাস বা VFS-এ']
  ],
  src: [
    ['nyidanmark.dk: Higher education', 'https://nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education/', 'official'],
    ['nyidanmark.dk: Financial self-support', 'https://nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Self-support---SIRI', 'official'],
    ['nyidanmark.dk: Work permits for students', 'https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Work-permits-for-students-in-higher-educational-programmes', 'official'],
    ['nyidanmark.dk: New rules for students from 1 Oct 2026', 'https://www.nyidanmark.dk/en-GB/News-Front-Page/2026/09/SIRI---Nye-regler-for-studerende', 'official'],
    ['nyidanmark.dk: Extension, higher education', 'https://nyidanmark.dk/en-GB/You-want-to-extend/Study---extension/Higher-education', 'official'],
    ['Denmark ST1 summary (Nomad Watch, checked Oct 2026)', 'https://nomad.watch/visas/student-visas/denmark-residence-permit-studies-st1', 'news']
  ]
},
{
  id: 'fi', short: '€৯,৬০০ / বছর', flag: '../flags/fi.svg', name: 'ফিনল্যান্ড', en: 'Finland',
  visa: 'Residence permit for studies', who: 'Migri (Finnish Immigration Service)',
  official: 'https://migri.fi/en/studying-in-finland',
  money: { big: '€৯,৬০০', unit: 'এক বছরের থাকা-খাওয়া (মাসে €৮০০)',
    note: 'টিউশন বাকি থাকলে সেটার টাকাও আলাদা দেখাতে হয়। থাকার টাকা দিয়ে টিউশন দেখানো যায় না।' },
  rows: [
    ['আবেদন ফি', '২০২৬-এ অনলাইনে €৬০০, কাগজে €৭৫০।', 'draft'],
    ['কোথায় আবেদন', 'Enter Finland ওয়েবসাইটে অনলাইনে, তারপর দূতাবাস বা VFS-এ পরিচয় যাচাই।'],
    ['বীমা', 'চিকিৎসা খরচ কভার করে এমন স্বাস্থ্য বীমা লাগে।'],
    ['কাজ', 'ক্লাস চলাকালে সপ্তাহে গড়ে ৩০ ঘণ্টা, ছুটিতে পুরো সময়।', 'draft'],
    ['পড়া শেষে', 'চাকরি খোঁজার জন্য সর্বোচ্চ ২ বছরের অনুমতি, তখনও মাসে €৮০০ দেখাতে হয়।', 'draft']
  ],
  news: [],
  docs: [
    ['ভর্তির চিঠি', ''],
    ['পাসপোর্ট', ''],
    ['টাকার প্রমাণ', 'নিজের নামে, অন্তত প্রথম বছরের'],
    ['টিউশন দেওয়ার প্রমাণ বা বৃত্তির চিঠি', ''],
    ['স্বাস্থ্য বীমা', '']
  ],
  src: [
    ['Migri: Studying in Finland', 'https://migri.fi/en/studying-in-finland', 'official'],
    ['Migri: Income requirement for students', 'https://migri.fi/en/income-requirement-for-students', 'official'],
    ['University of Helsinki: Residence permit for degree students', 'https://studies.helsinki.fi/instructions/article/residence-permit-degree-students', 'news']
  ]
},
{
  id: 'se', short: 'SEK ১০,৬৫৬ / মাস', flag: '../flags/se.svg', name: 'সুইডেন', en: 'Sweden',
  visa: 'Residence permit, higher education', who: 'Migrationsverket (Swedish Migration Agency)',
  official: 'https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education',
  money: { big: 'SEK ১০,৬৫৬', unit: 'প্রতি মাস (২০২৬-এ আবেদন)',
    note: 'যতদিনের পারমিট চাইছেন ততদিনের টাকা। ব্যাংক স্টেটমেন্ট পারমিট শুরুর তারিখের ৪ মাসের বেশি পুরনো হতে পারবে না।' },
  rows: [
    ['আবেদন ফি', 'SEK ১,৫০০। আবেদন বাতিল হলে ফেরত হয় না।'],
    ['টিউশন আগে', 'আবেদনের আগেই প্রথম কিস্তির টিউশন দিতে হয়। বিশ্ববিদ্যালয় Migrationsverket-কে জানায়।'],
    ['কাজ', '১১ জুন ২০২৬ বা পরে পারমিট পেলে ব্যাচেলর/মাস্টার্সে সপ্তাহে সর্বোচ্চ ১৫ ঘণ্টা।'],
    ['মেয়াদ বাড়াতে', '১১ জুন ২০২৬ বা পরে পারমিট পেলে প্রথম বছরে অন্তত ৬২.৫% ও পরের প্রতি বছরে ৭৫% পড়া শেষ করতে হবে।'],
    ['পড়া শেষে', 'চাকরি খোঁজার জন্য আলাদা পারমিট আছে (ফি SEK ১,৫০০)।']
  ],
  news: ['১১ জুন ২০২৬ থেকে কাজের সীমা সপ্তাহে ১৫ ঘণ্টা, পড়ার অগ্রগতির শর্তও নতুন।'],
  docs: [
    ['চূড়ান্ত ভর্তির চিঠি (universityadmissions.se)', ''],
    ['টিউশন দেওয়ার প্রমাণ', ''],
    ['ব্যাংক স্টেটমেন্ট', '৪ মাসের বেশি পুরনো নয়'],
    ['পাসপোর্টের কপি', ''],
    ['বীমা', 'এক বছরের কম পড়লে']
  ],
  src: [
    ['Migrationsverket: Higher education', 'https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education', 'official'],
    ['Migrationsverket: Application fees for students', 'https://migrationsverket.se/English/Private-individuals/Studying-in-Sweden/Fees.html', 'official']
  ]
},
{
  id: 'no', short: 'NOK ১,৭০,৩৬৮ / বছর', flag: '../flags/no.svg', name: 'নরওয়ে', en: 'Norway',
  visa: 'Study permit (studietillatelse)', who: 'UDI (Norwegian Directorate of Immigration)',
  official: 'https://www.udi.no/en/want-to-apply/studies/studietillatelse/university-college-or-university/',
  money: { big: 'NOK ১,৭০,৩৬৮', unit: 'এক শিক্ষাবর্ষের থাকা-খাওয়া (মাসে NOK ১৫,৪৮৮)',
    note: 'টিউশন দিতে হলে সেটার টাকাও আলাদা, বা দেওয়া হয়েছে তার প্রমাণ। সাধারণত বিশ্ববিদ্যালয়ের দেওয়া অ্যাকাউন্টে টাকা জমা রাখতে বলা হয়।' },
  rows: [
    ['আবেদন ফি', 'আবেদন ফি দিতে হয়। পরিমাণ UDI-র ফি তালিকায় দেখে নিন; বিভিন্ন সাইটে ভিন্ন অঙ্ক দেখা যাচ্ছে।', 'draft'],
    ['থাকার জায়গা', 'নরওয়েতে কোথায় থাকবেন তার ব্যবস্থা থাকতে হবে।'],
    ['টিউশন', '২০২৩ থেকে EU-র বাইরের ছাত্রছাত্রীদের সরকারি বিশ্ববিদ্যালয়েও টিউশন দিতে হয়।'],
    ['কাজ', 'সপ্তাহে সর্বোচ্চ ২০ ঘণ্টা (রিমোট কাজসহ), ছুটিতে পুরো সময়।'],
    ['বিশ্ববিদ্যালয়', 'প্রতিষ্ঠানটি NOKUT-এর অনুমোদিত তালিকায় থাকতে হবে।']
  ],
  news: [],
  docs: [
    ['ভর্তির চিঠি', ''],
    ['টাকার প্রমাণ', 'বিশ্ববিদ্যালয়ের অ্যাকাউন্টে জমা, লোন বা বৃত্তি'],
    ['টিউশন দেওয়ার প্রমাণ', 'প্রযোজ্য হলে'],
    ['থাকার জায়গার কাগজ', ''],
    ['UDI পোর্টালের কভার লেটার ও চেকলিস্ট', 'VFS/দূতাবাসে নিয়ে যেতে হয়']
  ],
  src: [
    ['UDI: Study permit, university', 'https://www.udi.no/en/want-to-apply/studies/studietillatelse/university-college-or-university/', 'official'],
    ['UDI: Where will you be studying?', 'https://www.udi.no/en/want-to-apply/studies/studietillatelse/', 'official']
  ]
},
{
  id: 'de', short: '€১১,৯০৪ / বছর', flag: '../flags/de.svg', name: 'জার্মানি', en: 'Germany',
  visa: 'National visa (D) for study', who: 'German Embassy Dhaka',
  official: 'https://dhaka.diplo.de/bd-en/service/2682868-2682868',
  money: { big: '€১১,৯০৪', unit: 'এক বছরের থাকা-খাওয়া (মাসে €৯৯২)',
    note: 'সাধারণত blocked account-এ পুরো টাকা জমা রাখতে হয়; জার্মানিতে পৌঁছে মাসে €৯৯২ করে তোলা যায়। জার্মান সরকার বা EU-র বৃত্তি থাকলে সেটিও প্রমাণ হিসেবে চলে। ২০২৭ সালের গ্রীষ্ম সেমিস্টার থেকে BAföG বাড়ছে, তাই এই অঙ্কও বাড়তে পারে; আবেদনের আগে দূতাবাসের চেকলিস্ট দেখে নিন।' },
  rows: [
    ['কীভাবে আবেদন', '১ জানুয়ারি ২০২৭ থেকে ব্যাচেলর ও মাস্টার্স দুটোরই আবেদন অনলাইন Consular Services Portal-এ (digital.diplo.de): ফর্ম পূরণ ও কাগজ আপলোড। VFS আগে কাগজ দেখে নেয়, তারপর ছোট একটি সাক্ষাতে বায়োমেট্রিক ও ফি। সিদ্ধান্ত দেয় শুধু দূতাবাস; VFS-এর কোনো হাত নেই।'],
    ['পুরনো অপেক্ষা-তালিকা', 'আগের অ্যাপয়েন্টমেন্ট তালিকা ২০২৬ সালের শেষে বন্ধ হচ্ছে। আগে নাম লিখিয়ে থাকলেও পোর্টালে নতুন অ্যাকাউন্ট খুলে আবার আবেদন করতে হবে। পুরনো সিরিয়াল "ট্রান্সফার" করে দেওয়ার কথা বলে কেউ টাকা চাইলে সাবধান।'],
    ['অপেক্ষার সময়', 'পুরনো ব্যবস্থায় বৃত্তি ছাড়া অপেক্ষা ২৭ মাসেরও বেশি ছিল। নতুন ব্যবস্থায় অপেক্ষা অনেক কমবে বলে দূতাবাস আশা করছে, তবে কত তা জানায়নি। আবেদন পুরো হয়ে দূতাবাসে পৌঁছানোর পর সাধারণ সময় ৪ সপ্তাহ, অপেক্ষার সময় বাদে।'],
    ['APS', 'বাংলাদেশিদের APS সনদ লাগে না; ঢাকার দূতাবাস APS অফিস ব্যবহার করে না।'],
    ['ফি', '€৭৫, সাক্ষাতের শেষে টাকায় নগদ; ভিসা না পেলেও ফেরত নেই। সরকারি অর্থের বৃত্তি থাকলে ভিসা ফি মওকুফ। কাগজ যাচাই করাতে হলে আলাদা ৩৫,০০০ টাকা।'],
    ['প্রত্যাখ্যাত হলে', '১ জুলাই ২০২৫ থেকে দূতাবাসে পুনর্বিবেচনার (remonstration) আবেদন আর নেই; একমাত্র পথ বার্লিনের প্রশাসনিক আদালতে মামলা।'],
    ['কাজ', 'বছরে ১৪০ পূর্ণ দিন বা ২৮০ অর্ধ দিন।', 'draft'],
    ['পড়া শেষে', 'চাকরি খোঁজার জন্য ১৮ মাস পর্যন্ত থাকার অনুমতি।', 'draft']
  ],
  news: ['১ জানুয়ারি ২০২৭ থেকে ছাত্র ভিসার আবেদন শুধু অনলাইন পোর্টালে; পুরনো অপেক্ষা-তালিকা ২০২৬-এর শেষে বাতিল, সবাইকে নতুন করে আবেদন করতে হবে।', '২০২৭ থেকে BAföG বাড়ছে; blocked account-এর অঙ্ক বদলাতে পারে।'],
  docs: [
    ['ভর্তির চিঠি', 'জার্মান বিশ্ববিদ্যালয় থেকে'],
    ['Blocked account-এর নিশ্চয়তাপত্র', 'অথবা জার্মান/EU বৃত্তির চিঠি'],
    ['পাসপোর্ট', ''],
    ['HSC সনদ ও মার্কশিট', 'মাস্টার্সে ব্যাচেলরের ট্রান্সক্রিপ্টও'],
    ['মোটিভেশন লেটার', 'দূতাবাসের চেকলিস্টে দেওয়া প্রশ্নগুলোর উত্তর দিয়ে'],
    ['ভাষার প্রমাণ', 'কোর্স যে ভাষায়, সেই ভাষার'],
    ['স্বাস্থ্য বীমা', ''],
    ['অনুবাদ', 'বাংলা কাগজের ইংরেজি বা জার্মান অনুবাদ; সব কাগজ A4']
  ],
  src: [
    ['German Embassy Dhaka: National Visa (digital student visa from 1 Jan 2027, fees)', 'https://dhaka.diplo.de/bd-en/service/2682868-2682868', 'official'],
    ['German Embassy Dhaka: Student visa', 'https://dhaka.diplo.de/bd-en/service/2685884-2685884', 'official'],
    ['German Embassy Dhaka: FAQ Student Visa', 'https://dhaka.diplo.de/bd-en/service/2689586-2689586', 'official'],
    ['German embassy to launch digital student visa system in January (TBS News, 15 Nov 2026)', 'https://www.tbsnews.net/bangladesh/education/german-embassy-launch-digital-student-visa-application-system-january-1602951', 'news'],
    ['Blocked account amount 2026 (study.eu)', 'https://www.study.eu/article/germany-blocked-bank-accounts-for-students-guide', 'news'],
    ['BAföG increase from summer 2027 (The Local)', 'https://www.thelocal.de/20260710/bafog-reform-germany-agrees-aid-increase-for-students-but-not-until-summer-2027', 'news']
  ]
},
{
  id: 'ie', short: '€১০,০০০ / বছর', flag: '../flags/ie.svg', name: 'আয়ারল্যান্ড', en: 'Ireland',
  visa: 'Long stay (D) study visa, Stamp 2', who: 'Embassy of Ireland, New Delhi Visa Office',
  official: 'https://assets.ireland.ie/documents/20250425_Study_visa_information_leaflet.pdf',
  money: { big: '€১০,০০০', unit: 'প্রথম বছরের থাকা-খাওয়া',
    note: 'টাকা এমন অ্যাকাউন্টে থাকতে হবে যেখান থেকে সাথে সাথে তোলা যায়। এর সাথে টিউশন দেওয়ার প্রমাণ। ৮ মাস বা কম কোর্সে মাসে €৮৩৩।' },
  rows: [
    ['কোথায় আবেদন', 'অনলাইনে AVATS-এ ফর্ম পূরণ। বাংলাদেশে থাকা ছাত্রছাত্রীদের আবেদন দেখে নয়াদিল্লির আইরিশ দূতাবাসের ভিসা অফিস। কাগজ কোথায় পাঠাবেন তা ফর্ম প্রিন্ট করলে লেখা থাকে।'],
    ['ভিসা ফি', 'একবার প্রবেশ €৬০, একাধিক €১০০। আয়ারল্যান্ডে পৌঁছে IRP নিবন্ধনে আরও €৩০০।', 'draft'],
    ['কাজ', 'Stamp 2-তে ক্লাস চলাকালে সপ্তাহে ২০ ঘণ্টা, নির্ধারিত ছুটিতে ৪০ ঘণ্টা।'],
    ['পরিবার', 'পড়ার ভিসায় স্বামী/স্ত্রী বা সন্তান সাথে আনা যায় না।', 'draft'],
    ['পড়া শেষে', 'Stamp 1G: ব্যাচেলর (Level 8) শেষে ১২ মাস, মাস্টার্স (Level 9) বা বেশিতে ২৪ মাস পর্যন্ত।', 'draft']
  ],
  news: [],
  docs: [
    ['Unconditional offer letter', 'ILEP তালিকাভুক্ত কোর্সে'],
    ['টিউশন দেওয়ার রসিদ', 'সরাসরি কলেজ বা বিশ্ববিদ্যালয়ে দেওয়া'],
    ['ব্যাংক স্টেটমেন্ট', 'টাকা কোথা থেকে এলো তার ব্যাখ্যাসহ'],
    ['ইংরেজির প্রমাণ', 'IELTS, PTE বা কলেজ যা মানে'],
    ['স্বাস্থ্য বীমা', 'বেসরকারি, পুরো সময়ের জন্য'],
    ['AVATS ফর্মের সারাংশ পাতা', 'সই করা'],
    ['পড়াশোনায় বিরতি থাকলে ব্যাখ্যা', '']
  ],
  src: [
    ['Embassy of Ireland: Applying for a visa to study (India, Nepal, Bangladesh…)', 'https://assets.ireland.ie/documents/20250425_Study_visa_information_leaflet.pdf', 'official'],
    ['Ireland student visa: fees, €10,000, Stamp 2 (AECC)', 'https://www.aeccglobal.com/study-in-ireland/visas/student', 'news'],
    ['New visa rules 2026: Ireland (IDP)', 'https://www.idp.com/thailand/blog/visa-rules-for-international-students-ireland/?lang=en', 'news']
  ]
},
{
  id: 'nl', short: '€১,১৩১ / মাস', flag: '../flags/nl.svg', name: 'নেদারল্যান্ডস', en: 'Netherlands',
  visa: 'MVV + residence permit (study)', who: 'IND (Immigration and Naturalisation Service)',
  official: 'https://ind.nl/en/required-amounts-income-requirements',
  money: { big: '€১,১৩০.৭৭', unit: 'প্রতি মাস, বিশ্ববিদ্যালয় বা HBO-তে (২০২৬)',
    note: 'সাধারণত ১২ মাসের জন্য, মোট প্রায় €১৩,৫৬৯। টিউশন এর বাইরে। অনেক বিশ্ববিদ্যালয় এই টাকা নিজেদের অ্যাকাউন্টে জমা নেয়।' },
  rows: [
    ['কে আবেদন করে', 'আপনি নিজে নন। IND-স্বীকৃত বিশ্ববিদ্যালয় আপনার হয়ে আবেদন করে; ফিও দেন বিশ্ববিদ্যালয়ের মাধ্যমে।'],
    ['ফি', '২০২৬-এ €২৫৪।', 'draft'],
    ['MVV', 'বাংলাদেশিদের প্রবেশ ভিসা (MVV) লাগে। অনুমোদনের পর ঢাকার নেদারল্যান্ডস দূতাবাসে বায়োমেট্রিক দিয়ে সংগ্রহ করতে হয়।', 'draft'],
    ['যক্ষ্মা (TB)', 'পৌঁছানোর পর TB পরীক্ষা করাতে হয়।', 'draft'],
    ['কাজ', 'নিয়োগকর্তাকে কাজের অনুমতি (TWV) নিতে হয়; সপ্তাহে সর্বোচ্চ ১৬ ঘণ্টা, অথবা জুন থেকে আগস্ট পুরো সময়।', 'draft'],
    ['পড়া শেষে', 'চাকরি খোঁজার জন্য ১ বছরের "orientation year" (zoekjaar)।', 'draft']
  ],
  news: [],
  docs: [
    ['ভর্তির চিঠি', 'IND-স্বীকৃত প্রতিষ্ঠান থেকে'],
    ['পাসপোর্ট', ''],
    ['টাকার প্রমাণ', 'অথবা বিশ্ববিদ্যালয়ে জমার রসিদ'],
    ['ইংরেজির প্রমাণ', 'বিশ্ববিদ্যালয় যা চায়'],
    ['TB পরীক্ষার ঘোষণা', 'বিশ্ববিদ্যালয় ফর্ম পাঠায়']
  ],
  src: [
    ['IND: Required amounts income requirements', 'https://ind.nl/en/required-amounts-income-requirements', 'official'],
    ['IND: Fees and required amounts for 2026 known', 'https://ind.nl/en/news/fees-and-required-amounts-for-2026-known', 'official'],
    ['Netherlands student residence permit 2026 (FindLawyer.nl)', 'https://findlawyer.nl/netherlands-student-visa/', 'news']
  ]
},
{
  id: 'fr', short: '€৬১৫ / মাস', flag: '../flags/fr.svg', name: 'ফ্রান্স', en: 'France',
  visa: 'VLS-TS étudiant (long-stay student visa)', who: 'Campus France Bangladesh ও ঢাকার ফরাসি দূতাবাস',
  official: 'https://france-visas.gouv.fr/en/bangladesh',
  money: { big: '€৬১৫', unit: 'প্রতি মাস, যতদিনের ভিসা',
    note: 'টিউশন আলাদা। বৃত্তি থাকলে বা কেউ থাকার খরচ দিলে তার কাগজ দিয়েও দেখানো যায়।' },
  rows: [
    ['প্রথম ধাপ', 'ভিসার আবেদনের আগে Campus France Bangladesh-এর সাথে যোগাযোগ করতে হয় (bangladesh@campusfrance.org)। ফ্রান্সের ভিসা সাইট এই কথাই বলে।'],
    ['দুটি সাক্ষাৎকার', 'প্রথমে দূতাবাসের সাংস্কৃতিক বিভাগ আপনার পড়াশোনা যাচাই করে, তারপর ভিসা বিভাগে সাক্ষাৎকার।'],
    ['ভিসা ফি', '€৫০। পৌঁছে OFII-তে ভিসা চালু করতে আলাদা ফি।', 'draft'],
    ['কাজ', 'বছরে সর্বোচ্চ ৯৬৪ ঘণ্টা।', 'draft'],
    ['পড়া শেষে', 'মাস্টার্স শেষে চাকরি খোঁজার জন্য ১ বছরের অনুমতি (APS) নেওয়া যায়।', 'draft']
  ],
  news: [],
  docs: [
    ['ভর্তির চিঠি', 'ফরাসি প্রতিষ্ঠান থেকে'],
    ['Campus France-এর ধাপ শেষ হওয়ার প্রমাণ', ''],
    ['টাকার প্রমাণ', 'মাসে €৬১৫ হিসাবে, বা বৃত্তির চিঠি'],
    ['থাকার জায়গার প্রমাণ', 'অন্তত শুরুর কয়েক মাসের'],
    ['পাসপোর্ট', ''],
    ['ভাষার প্রমাণ', 'কোর্স অনুযায়ী ফরাসি বা ইংরেজি'],
    ['স্বাস্থ্য বীমা', 'ভিসার সময় পর্যন্ত']
  ],
  src: [
    ['France-Visas: Bangladesh', 'https://france-visas.gouv.fr/en/bangladesh', 'official'],
    ['Campus France Bangladesh', 'https://www.bangladesh.campusfrance.org/en/faq', 'official'],
    ['France student visa 2026: €615/month, 964 hours (Study Abroad)', 'https://www.study-abroad.org/blog/fr-student-visa-guide', 'news']
  ]
},
{
  id: 'it', short: '€১০,১৮০ / বছর', flag: '../flags/it.svg', name: 'ইতালি', en: 'Italy',
  visa: 'National visa (D) – university enrolment', who: 'Embassy of Italy in Dhaka (VFS-এর মাধ্যমে)',
  official: 'https://ambdhaka.esteri.it/wp-content/uploads/2026/07/Study-University-pre-enrolment.pdf',
  money: { big: '€১০,১৭৯.৮৫', unit: 'প্রতি বছরের থাকা-খাওয়া (২০২৬-২৭ ও ২০২৭-২৮)',
    note: 'এর সাথে দেশে ফেরার খরচের টাকাও দেখাতে হয়। ঢাকার দূতাবাস চায় গত ১২ মাসের নিজের ব্যাংক স্টেটমেন্ট; স্পনসর হলে শুধু নিকট পরিবারের সদস্য।' },
  rows: [
    ['Universitaly', 'ভিসার আগে universitaly.it-এ pre-enrolment করতে হয়। বিশ্ববিদ্যালয় শর্ত ছাড়া অনুমোদন দিলে তবেই ভিসার আবেদন।'],
    ['ভর্তি মানেই ভিসা নয়', 'Universitaly-তে অনুমোদন থাকলেও দূতাবাস আপনার টাকা ও পড়াশোনার পটভূমি দেখে আলাদা সিদ্ধান্ত নেয়।'],
    ['শেষ তারিখ', '২০২৬-২৭ শিক্ষাবর্ষের ভিসা আবেদন সাধারণত ৩০ নভেম্বর ২০২৬-এর পরে নেওয়া হয় না।', 'draft'],
    ['কাজ', 'সপ্তাহে সর্বোচ্চ ২০ ঘণ্টা (বছরে ১,০৪০)।', 'draft'],
    ['পড়া শেষে', 'চাকরি খোঁজার জন্য ১২ মাস পর্যন্ত থাকার অনুমতি।', 'draft']
  ],
  news: ['২০২৬-২৭ থেকে দেখানোর টাকা বছরে €১০,১৭৯.৮৫।'],
  docs: [
    ['D ভিসার আবেদন ফর্ম', ''],
    ['পাসপোর্ট', 'ভিসা শেষের পরও অন্তত ৩ মাস মেয়াদ, ২টি খালি পাতা'],
    ['Universitaly pre-enrolment রসিদ', 'টিউশন ফির অঙ্ক লেখা থাকতে হবে'],
    ['গত ১২ মাসের ব্যাংক স্টেটমেন্ট', 'বাংলাদেশের ব্যাংক থেকে'],
    ['স্পনসরের ব্যাংক স্টেটমেন্ট', 'শুধু নিকট পরিবার'],
    ['থাকার জায়গার প্রমাণ', ''],
    ['স্বাস্থ্য বীমা', '']
  ],
  src: [
    ['Embassy of Italy Dhaka: Study visa checklist (Bangla + English)', 'https://ambdhaka.esteri.it/wp-content/uploads/2026/07/Study-University-pre-enrolment.pdf', 'official'],
    ['Embassy of Italy Abu Dhabi: €10,179.85 per year (2026-27)', 'https://ambabudhabi.esteri.it/wp-content/uploads/2026/07/GUIDELINES-and-UNIVERSITY-ENROLMENT-CHECKLIST-2026-27_rev2.pdf', 'official'],
    ['Italy raises financial proof for student visas (ProPakistani)', 'https://propakistani.pk/2026/05/01/italy-massively-increases-bank-statement-requirement-for-student-visas/', 'news']
  ]
},
{
  id: 'hu', short: 'Stipendium বৃত্তি', flag: '../flags/hu.svg', name: 'হাঙ্গেরি', en: 'Hungary',
  visa: 'Residence permit for study', who: 'Embassy of Hungary, New Delhi (ঢাকায় BLS আবেদনকেন্দ্র)',
  official: 'https://hungary.blsinternational.com/bangladesh/assets/pdf/Cheklist-Residence-permit-for-STUDY-purpose.pdf',
  money: { big: 'নির্দিষ্ট অঙ্ক নেই', unit: 'থাকা-খাওয়া ও চিকিৎসার খরচ মেটানোর প্রমাণ',
    note: 'Stipendium Hungaricum বৃত্তি পেলে টিউশন মওকুফ, সাথে মাসিক ভাতা ও থাকার সাহায্য। নিজে খরচ দিলে ব্যাংক স্টেটমেন্ট বা পরিবারের সহায়তার কাগজ লাগে।' },
  rows: [
    ['বৃত্তি', 'Stipendium Hungaricum সাধারণত নভেম্বরে খোলে, শেষ ১৫ জানুয়ারি। হাঙ্গেরির পোর্টালে আবেদনের পাশাপাশি বাংলাদেশের শিক্ষা মন্ত্রণালয়েও (Sending Partner) আলাদা আবেদন করতে হয়; একটি বাদ পড়লে আবেদন বাতিল।'],
    ['কোথায় আবেদন', '৯০ দিনের বেশি থাকতে residence permit লাগে। কাগজ জমা ঢাকার বনানীতে BLS-এর হাঙ্গেরি আবেদনকেন্দ্রে; সিদ্ধান্ত নয়াদিল্লির দূতাবাসের।'],
    ['কাজ', 'ক্লাস চলাকালে সপ্তাহে ৩০ ঘণ্টা পর্যন্ত।', 'draft'],
    ['মনে রাখুন', 'হাঙ্গেরির ছাত্র পারমিট দিয়ে অন্য শেনজেন দেশে থেকে কাজ বা পড়া যায় না।']
  ],
  news: [],
  docs: [
    ['Residence permit আবেদন ফর্ম', 'হাঙ্গেরির ইমিগ্রেশন সাইট থেকে'],
    ['ভর্তির চিঠি', ''],
    ['বৃত্তির চিঠি বা টাকার প্রমাণ', ''],
    ['থাকার জায়গার প্রমাণ', ''],
    ['স্বাস্থ্য বীমা বা চিকিৎসার খরচের প্রমাণ', ''],
    ['পাসপোর্ট ও সব কাগজের এক সেট কপি', 'শুধু মূল কাগজ গ্রহণ করা হয়']
  ],
  src: [
    ['BLS Dhaka: Checklist, residence permit for study', 'https://hungary.blsinternational.com/bangladesh/assets/pdf/Cheklist-Residence-permit-for-STUDY-purpose.pdf', 'official'],
    ['Embassy of Hungary New Delhi: Consular information', 'https://delhi.mfa.gov.hu/hun/page/consular-information', 'official'],
    ['Stipendium Hungaricum: Sending Partners', 'https://stipendiumhungaricum.hu/partners/', 'official']
  ]
},
{
  id: 'us', short: 'I-20 অনুযায়ী', flag: '../flags/us.png', name: 'যুক্তরাষ্ট্র', en: 'United States', light: true,
  visa: 'F-1 student visa', who: 'U.S. Embassy Dhaka',
  official: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
  money: { big: 'I-20-তে যা লেখা', unit: 'প্রথম বছরের মোট খরচ',
    note: 'দেশজুড়ে নির্দিষ্ট অঙ্ক নেই। বিশ্ববিদ্যালয় I-20-তে প্রথম বছরের খরচ লেখে; সেই পরিমাণ টাকা দেখাতে হয়।' },
  rows: [
    ['সরকারি ফি', 'ভিসা আবেদন (MRV) $১৮৫ ও SEVIS I-901 $৩৫০। ২০২৫ সালের আইনে $২৫০ "visa integrity fee" যোগ হয়েছে; ঢাকায় এটি নেওয়া শুরু হয়েছে কিনা দূতাবাসের সাইটে দেখে নিন।', 'draft'],
    ['সাক্ষাৎকার', 'ঢাকার মার্কিন দূতাবাসে। পড়ার পরিকল্পনা, টাকা আর দেশে ফেরার টান (পরিবার, সম্পত্তি, চাকরির সুযোগ) নিয়ে প্রশ্ন হয়।'],
    ['কাজ', 'ক্লাস চলাকালে সাধারণত ক্যাম্পাসের ভেতরে সপ্তাহে ২০ ঘণ্টা। বাইরে কাজ শুধু CPT/OPT-এর মাধ্যমে।'],
    ['পড়া শেষে', 'OPT ১২ মাস; STEM বিষয়ে আরও ২৪ মাস পর্যন্ত বাড়ানো যায়।']
  ],
  news: [],
  docs: [
    ['I-20', 'SEVP-অনুমোদিত বিশ্ববিদ্যালয় থেকে'],
    ['SEVIS ফির রসিদ', ''],
    ['DS-160 কনফার্মেশন পাতা', ''],
    ['MRV ফির রসিদ ও সাক্ষাৎকারের সময়', ''],
    ['টাকার প্রমাণ', 'I-20-র অঙ্কের সাথে মিলিয়ে'],
    ['আগের সার্টিফিকেট ও পরীক্ষার ফল', '']
  ],
  src: [
    ['travel.state.gov: Student visa', 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html', 'official'],
    ['US student visa interview in Bangladesh (uni2study, Oct 2026)', 'https://www.uni2study.com/articles/us-student-visa-interview-in-bangladesh-consulates-wait-times-and-refusal-reasons', 'news'],
    ['Visa Integrity Fee (Boston University ISSO)', 'https://www.bu.edu/isso/2026/05/19/visa-integrity-fee/', 'news']
  ]
},
{
  id: 'jp', short: 'COE-তে যাচাই', flag: '../flags/jp.png', name: 'জাপান', en: 'Japan',
  visa: 'Student visa (留学 Ryūgaku)', who: 'Embassy of Japan in Bangladesh',
  official: 'https://www.bd.emb-japan.go.jp/itpr_en/visadocuments.html',
  money: { big: 'COE-র সময় যাচাই', unit: 'আপনার বা স্পনসরের আয় ও সঞ্চয়',
    note: 'দেশজুড়ে নির্দিষ্ট অঙ্ক নেই। জাপানের স্কুল বা বিশ্ববিদ্যালয় COE-র আবেদনের সময় আপনার টাকার কাগজ জাপানের ইমিগ্রেশনে জমা দেয়; কত লাগবে তা প্রতিষ্ঠান বলে দেয়।' },
  rows: [
    ['COE', 'আগে জাপানের প্রতিষ্ঠান Immigration Services Agency থেকে Certificate of Eligibility (COE) আনে। COE হাতে পেলে তবেই ঢাকায় ভিসার আবেদন।'],
    ['ভাষা স্কুল', 'জাপানি ভাষা স্কুলে যেতে অন্তত A1 মানের জাপানি লাগে: JLPT N5 বা JFT-Basic A1, অথবা ISA-স্বীকৃত আরও কিছু পরীক্ষা।'],
    ['কাজ', 'আলাদা অনুমতি নিলে সপ্তাহে ২৮ ঘণ্টা, লম্বা ছুটিতে দিনে ৮ ঘণ্টা।', 'draft'],
    ['মনে রাখুন', 'ভাষা স্কুলে উপস্থিতি কম হলে বা শুধু কাজের জন্য গেলে ভিসা নবায়ন হয় না।', 'draft']
  ],
  news: ['আগস্ট ২০২৬ থেকে ভাষা স্কুলের জন্য JFT-Basic A1 ফল JLPT N5-এর সমান ধরা হয়।'],
  docs: [
    ['ভিসা আবেদন ফর্ম', ''],
    ['পাসপোর্ট ও ছবি', ''],
    ['COE', 'মূল কপি'],
    ['ভর্তির চিঠি', 'স্কুল বা বিশ্ববিদ্যালয় থেকে']
  ],
  src: [
    ['Embassy of Japan in Bangladesh: Documents required', 'https://www.bd.emb-japan.go.jp/itpr_en/visadocuments.html', 'official'],
    ['Embassy of Japan: For Bangladeshis considering Japanese-language schools (Aug 2026)', 'https://www.bd.emb-japan.go.jp/itpr_en/ISA.pdf', 'official']
  ]
},
{
  id: 'kr', short: '≈ USD ২০,০০০ ব্যালান্স', flag: '../flags/kr.png', name: 'দক্ষিণ কোরিয়া', en: 'South Korea',
  visa: 'D-2 student visa', who: 'Embassy of the Republic of Korea in Bangladesh',
  official: 'https://www.mofa.go.kr/bd-en/brd/m_2124/view.do?seq=760105',
  money: { big: '≈ USD ২০,০০০', unit: 'ব্যাংক ব্যালান্স (প্রচলিত হিসাব)',
    note: 'দূতাবাসের পাতায় নির্দিষ্ট অঙ্ক এখনো মেলানো হয়নি। বিশ্ববিদ্যালয় ও বিভিন্ন সূত্রে USD ১৬,০০০ থেকে ২০,০০০ বলা হয়; সিউলের বাইরে কম লাগতে পারে। ভর্তি অফিসের কাছে লিখিতভাবে জেনে নিন।' },
  rows: [
    ['কোথায় আবেদন', '২ সেপ্টেম্বর ২০২৬ থেকে ঢাকার Korea Visa Application Center-এ (বনানী, B&T Nehaleeya Tower), আগে অনলাইনে অ্যাপয়েন্টমেন্ট নিয়ে। সিদ্ধান্ত দেয় দূতাবাস।'],
    ['ভিসা ফি', 'ভিসার ধরন ও মেয়াদ অনুযায়ী USD ৪০, ৬০, ৭০ বা ৯০; টাকায় দেওয়া যায়।'],
    ['যক্ষ্মা (TB)', 'বাংলাদেশিদের D-2 ভিসায় দূতাবাস-নির্ধারিত হাসপাতালের TB সনদ লাগে।', 'draft'],
    ['কাজ', 'অনুমতি নিলে ব্যাচেলরে সপ্তাহে ২৫ ঘণ্টা পর্যন্ত; কোরিয়ান ভাষার (TOPIK) স্তর অনুযায়ী কম-বেশি।', 'draft'],
    ['পড়া শেষে', 'চাকরি খোঁজার জন্য D-10 ভিসা।', 'draft']
  ],
  news: ['২ সেপ্টেম্বর ২০২৬ থেকে আবেদন জমা নেয় ঢাকার Korea Visa Application Center, দূতাবাস নয়।'],
  docs: [
    ['Certificate of Admission', 'কোরিয়ার বিশ্ববিদ্যালয় থেকে'],
    ['ভিসা ফর্ম, পাসপোর্ট ও ছবি', ''],
    ['সার্টিফিকেট ও মার্কশিট', 'সত্যায়িত'],
    ['ব্যাংক স্টেটমেন্ট ও সলভেন্সি সার্টিফিকেট', ''],
    ['TB পরীক্ষার সনদ', 'নির্ধারিত হাসপাতাল থেকে']
  ],
  src: [
    ['Embassy of Korea in Bangladesh: Visa Application Center notice', 'https://www.mofa.go.kr/bd-en/brd/m_2124/view.do?seq=760105', 'official'],
    ['VFS Global launches Korea visa services in Bangladesh (Sept 2026)', 'https://www.vfsglobal.com/en/PDF/media-releases/2026/MR_South_Korea_launch_in_Bangladesh_Sept_2026.pdf', 'news'],
    ['South Korea student visa from Bangladesh (Aspire Global Pathways)', 'https://aspireglobalpathways.com/south-korea-student-visa-process-from-bangladesh/', 'news']
  ]
},
{
  id: 'my', short: 'EMGS ফি RM ১,৬০০+', flag: '../flags/my.png', name: 'মালয়েশিয়া', en: 'Malaysia',
  visa: 'Student Pass', who: 'EMGS (Education Malaysia Global Services)',
  official: 'https://educationmalaysia.gov.my/visa-new-application',
  money: { big: 'RM ১,৬০০+', unit: 'EMGS প্রসেসিং ফি (নতুন ছাত্র, ৬-১২ মাস)',
    note: 'এর সাথে eVAL RM ১৫০, i-Kad RM ৫০, স্বাস্থ্য পরীক্ষা RM ২৫০ ও বাধ্যতামূলক বীমা। থাকা-খাওয়ার জন্য দেশজুড়ে নির্দিষ্ট অঙ্ক নেই; বিশ্ববিদ্যালয় যা চায় তা দেখাতে হয়।' },
  rows: [
    ['কে আবেদন করে', 'আপনি নিজে নন। EMGS-নিবন্ধিত বিশ্ববিদ্যালয় EMGS-এ আপনার কাগজ জমা দেয়।'],
    ['VAL', 'অনুমোদন হলে ইমিগ্রেশন ইলেকট্রনিক Visa Approval Letter (eVAL) দেয়; সময় জমার দিন থেকে ১৪ কর্মদিবস।'],
    ['দ্রুত করার টাকা নয়', 'EMGS নিজে জানিয়েছে, তারা "দ্রুত করিয়ে দেওয়ার" জন্য কোনো টাকা নেয় না। কেউ টাকা নিয়ে তাড়াতাড়ি করিয়ে দেওয়ার কথা বললে সেটা অপরাধ।'],
    ['স্বাস্থ্য পরীক্ষা', 'EMGS-নিবন্ধিত ক্লিনিকে, যাওয়ার আগে বা পৌঁছানোর ৭ দিনের মধ্যে।', 'draft'],
    ['কাজ', 'শুধু সেমিস্টারের লম্বা ছুটিতে, সপ্তাহে সর্বোচ্চ ২০ ঘণ্টা।', 'draft']
  ],
  news: [],
  docs: [
    ['পাসপোর্ট', 'সব পাতার কপি'],
    ['ভর্তির চিঠি', 'EMGS-নিবন্ধিত প্রতিষ্ঠান থেকে'],
    ['সার্টিফিকেট ও মার্কশিট', ''],
    ['ছবি', ''],
    ['স্বাস্থ্য পরীক্ষার রিপোর্ট', ''],
    ['eVAL', 'যাওয়ার সময় সাথে রাখুন']
  ],
  src: [
    ['Education Malaysia: New student visa application', 'https://educationmalaysia.gov.my/visa-new-application', 'official'],
    ['EMGS: Schedule of fees', 'https://visa.educationmalaysia.gov.my/media/cms_upload/Schedule_fees_-_v1.7.pdf', 'official'],
    ['EMGS: no fee for expediting applications', 'https://hub.emgs.com.my/members/emgsconnected', 'official']
  ]
},
{
  id: 'cn', short: 'X1 ভিসা, JW202', flag: '../flags/cn.svg', name: 'চীন', en: 'China',
  visa: 'X1 student visa', who: 'Chinese Visa Application Service Center, Dhaka',
  official: 'https://bio.visaforchina.cn/DAC4_EN/tongzhigonggao',
  money: { big: 'নির্দিষ্ট অঙ্ক নেই', unit: 'ব্যাংক স্টেটমেন্ট দিতে হয়',
    note: 'চীনা সরকারের (CSC) বা বিশ্ববিদ্যালয়ের বৃত্তি পেলে খরচ অনেক কমে। বৃত্তির আবেদন সাধারণত ফেব্রুয়ারি থেকে এপ্রিলে।' },
  rows: [
    ['JW202', 'বিশ্ববিদ্যালয় ভর্তির চিঠির সাথে JW201 বা JW202 ফর্ম পাঠায়। এটি ছাড়া X1 ভিসা হয় না।'],
    ['এজেন্সি', 'জুলাই ২০২৬ থেকে কোনো ট্রাভেল এজেন্সি আপনার হয়ে আবেদন জমা দিলে তার IATA স্বীকৃতি থাকতে হবে। ছাত্র ভিসার নিয়ম বদলায়নি; নিজে সরাসরি ঢাকার ভিসা সেন্টারেও জমা দেওয়া যায়।'],
    ['স্বাস্থ্য পরীক্ষা', 'Foreigner Physical Examination Form পূরণ করে স্বাস্থ্য পরীক্ষা।', 'draft'],
    ['পৌঁছে', '৩০ দিনের মধ্যে স্থানীয় ইমিগ্রেশনে residence permit-এর আবেদন।', 'draft'],
    ['কাজ', 'বিশ্ববিদ্যালয় ও ইমিগ্রেশনের অনুমতি ছাড়া কাজ করা যায় না।', 'draft']
  ],
  news: ['জুলাই ২০২৬ থেকে শুধু IATA-স্বীকৃত এজেন্সি অন্যের হয়ে আবেদন জমা দিতে পারে।'],
  docs: [
    ['পাসপোর্ট', 'অন্তত ৬ মাস মেয়াদ ও খালি পাতা'],
    ['ভর্তির চিঠি', ''],
    ['JW201 বা JW202', 'মূল কপি'],
    ['স্বাস্থ্য পরীক্ষার ফর্ম', ''],
    ['পুলিশ ক্লিয়ারেন্স', ''],
    ['ব্যাংক স্টেটমেন্ট', ''],
    ['সত্যায়িত সার্টিফিকেট', 'শিক্ষা বোর্ড ও প্রয়োজনে দূতাবাসে সত্যায়িত']
  ],
  src: [
    ['Chinese Visa Application Service Center Dhaka: Notices', 'https://bio.visaforchina.cn/DAC4_EN/tongzhigonggao', 'official'],
    ['China issues new visa application process for Bangladeshi students (Daily Observer)', 'https://observerbd.com/news/584922', 'news'],
    ['Study in China guide for Bangladeshi students 2026 (WentChina)', 'https://wentchina.com/complete-guide-for-bangladeshi-students-to-study-in-china-2026-mbbs-engineering-scholarships-visa-and-campus-life/', 'news']
  ]
}
],

/* consultancy red flags: tick the ones that match what you were told */
FLAGS: [
  { t: '"১০০% ভিসা গ্যারান্টি"', d: 'ভিসা দেয় শুধু দূতাবাস বা সেই দেশের ইমিগ্রেশন অফিস। কোনো কনসালটেন্সি গ্যারান্টি দিতে পারে না।', hi: true },
  { t: '"ব্যাংক স্টেটমেন্ট / সলভেন্সি আমরা ম্যানেজ করে দেব"', d: 'ধার করা টাকা কিছুদিনের জন্য জমা রাখা বা বানানো কাগজ ধরা পড়লে ভিসা বাতিল হয়, কয়েক বছরের জন্য আবেদনেও নিষেধাজ্ঞা আসতে পারে। ক্ষতিটা আপনার, কনসালটেন্সির নয়।', hi: true },
  { t: 'টিউশন ফি কনসালটেন্সির অ্যাকাউন্টে দিতে বলছে', d: 'টিউশন সবসময় সরাসরি বিশ্ববিদ্যালয়ের অ্যাকাউন্টে। অ্যাকাউন্ট নম্বর বিশ্ববিদ্যালয়ের নিজের ওয়েবসাইট বা অফার লেটার থেকে মিলিয়ে নিন।', hi: true },
  { t: 'অফার লেটার "আমরাই এনে দেব", আপনি নিজে কোথাও আবেদন করেননি', d: 'বিশ্ববিদ্যালয়ের admissions অফিসে নিজে ইমেইল করে জিজ্ঞেস করুন অফারটি আসল কিনা। ইমেইল ঠিকানা নিন বিশ্ববিদ্যালয়ের ওয়েবসাইট থেকে, চিঠি থেকে নয়।' },
  { t: '"পড়ার পাশাপাশি কাজ করে সব খরচ তুলে নেবেন"', d: 'প্রায় সব দেশে কাজের ঘণ্টা বাঁধা (যেমন সুইডেনে সপ্তাহে ১৫, যুক্তরাজ্যে ২০)। আর ভিসার আগেই পুরো টাকা দেখাতে হয়; ভবিষ্যতের আয় গোনা হয় না।' },
  { t: 'সরকারি ফির চেয়ে বেশি "ভিসা ফি" চাইছে', d: 'প্রতিটি দেশের পাতায় সরকারি ফি লেখা আছে। সরকারি ফি দিন সরকারি ওয়েবসাইটে নিজের কার্ড দিয়ে।' },
  { t: 'পাসপোর্ট বা মূল সার্টিফিকেট রেখে দিতে চাইছে', d: 'কাজ হয়ে গেলে মূল কাগজ ফেরত নিন। কপি দিলেই সাধারণত চলে।' },
  { t: '"আজই টাকা দিলে সিট থাকবে, কাল থাকবে না"', d: 'তাড়া দেওয়া পুরনো কৌশল। বিশ্ববিদ্যালয়ের নিজের ভর্তির সময়সীমা ওয়েবসাইটে দেখে নিন।' },
  { t: '"স্বামী/স্ত্রীকেও সাথে নিয়ে যেতে পারবেন, কোনো সমস্যা নেই"', d: 'অনেক দেশে নিয়ম বদলেছে। যেমন ডেনমার্কে ১ অক্টোবর ২০২৬ থেকে ব্যাচেলর ও মাস্টার্সের ছাত্রছাত্রী পরিবার আনতে পারবেন না (পিএইচডি পারবেন)। দেশের সরকারি সাইটে দেখে নিন।' },
  { t: 'অচেনা কলেজ, "স্টাডি গ্যাপ, IELTS কোনো সমস্যা না, খরচ খুব কম"', d: 'প্রতিষ্ঠানটি সরকারি তালিকায় আছে কিনা দেখুন: UK-তে licensed student sponsor, কানাডায় DLI, অস্ট্রেলিয়ায় CRICOS, নরওয়েতে NOKUT, নেদারল্যান্ডসে IND-স্বীকৃত, মালয়েশিয়ায় EMGS-নিবন্ধিত।' },
  { t: '"দূতাবাসে আমাদের লোক আছে, টাকা দিলে তাড়াতাড়ি করিয়ে দেব"', d: 'দূতাবাসের অপেক্ষা-তালিকা টাকা দিয়ে এগোনো যায় না। যেমন জার্মানির ঢাকা দূতাবাস বলেছে, সিদ্ধান্ত শুধু দূতাবাসের, VFS বা অন্য কারও এতে হাত নেই; আর মালয়েশিয়ার EMGS জানিয়েছে দ্রুত করার জন্য তারা কোনো টাকা নেয় না।', hi: true }
],

STEPS: [
  ['কোর্স ও প্রতিষ্ঠান বাছাই', 'প্রতিষ্ঠানটি সেই দেশের সরকারি তালিকায় আছে কিনা আগে দেখুন। ভালো র‍্যাংকিং-এর দাবি নয়, সরকারি অনুমোদন জরুরি।'],
  ['ইংরেজি পরীক্ষা', 'বিশ্ববিদ্যালয় কোন পরীক্ষা ও কত স্কোর চায়, তাদের ওয়েবসাইটে দেখুন। ভিসার জন্য আলাদা শর্তও থাকতে পারে।'],
  ['নিজে আবেদন করুন', 'বিশ্ববিদ্যালয়ের নিজের পোর্টালে আবেদন করুন। কনসালটেন্সি সাহায্য করলেও পাসওয়ার্ড আর ইমেইল আপনার কাছে রাখুন।'],
  ['অফার যাচাই ও টিউশন', 'অফার আসল কিনা admissions অফিসে নিজে জিজ্ঞেস করুন। টিউশন দিন শুধু বিশ্ববিদ্যালয়ের অ্যাকাউন্টে।'],
  ['টাকার প্রমাণ সাজান', 'কত টাকা, কতদিন অ্যাকাউন্টে থাকতে হবে, কার নামে চলবে: দেশের পাতায় দেখুন। টাকার উৎসের কাগজ (বেতন, জমি বিক্রি, ব্যবসা) রেখে দিন।'],
  ['ভিসার আবেদন', 'সরকারি ওয়েবসাইটে নিজে আবেদন করুন ও ফি দিন। বায়োমেট্রিক দূতাবাস বা VFS-এ।'],
  ['যাওয়ার আগে', 'থাকার জায়গা, বীমা, প্রথম কয়েক মাসের খরচ। ভিসার কাগজের কপি ইমেইলে রাখুন।']
]
};
