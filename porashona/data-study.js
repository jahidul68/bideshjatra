/* Student section data (dalalnaki.com/porashona/).
   Update this file when a rule changes, then change META.checked.
   Each fact row: [label, text, status]; status 'draft' = taken from a news or university site, official page not yet read. */
window.STUDY_DATA = {
META: { checked: '১৪ নভেম্বর ২০২৬', version: 'খসড়া ১' },

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
    ['কাজ', 'সেপ্টেম্বর থেকে মে পর্যন্ত মাসে ৯০ ঘণ্টা, জুন থেকে আগস্ট পুরো সময়।', 'draft'],
    ['পরিবার', '১ অক্টোবর ২০২৬ বা পরে আবেদন করলে বেশিরভাগ ছাত্রছাত্রী স্বামী/স্ত্রী বা সন্তান আনতে পারবেন না।', 'draft'],
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
  { t: '"স্বামী/স্ত্রীকেও সাথে নিয়ে যেতে পারবেন, কোনো সমস্যা নেই"', d: 'অনেক দেশে নিয়ম বদলেছে। যেমন ডেনমার্কে ১ অক্টোবর ২০২৬ থেকে বেশিরভাগ ছাত্রছাত্রী পরিবার আনতে পারবেন না। দেশের সরকারি সাইটে দেখে নিন।' },
  { t: 'অচেনা কলেজ, "স্টাডি গ্যাপ, IELTS কোনো সমস্যা না, খরচ খুব কম"', d: 'প্রতিষ্ঠানটি সরকারি তালিকায় আছে কিনা দেখুন: UK-তে licensed student sponsor, কানাডায় DLI, অস্ট্রেলিয়ায় CRICOS, নরওয়েতে NOKUT।' }
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
