// Lists every Bangla text in data.js that has no English yet in data-en.js.
// Run from the repo folder:  node tools/check-en.js
// Paste the output into data-en.js and replace each "TODO" with the English.
global.window = {};
require('../data.js');
require('../data-en.js');
const D = window.APP_DATA, EN = window.APP_DATA_EN;
const missing = new Set();
(function walk(v, path){
  if(Array.isArray(v)) v.forEach((x, i) => walk(x, path + '[' + i + ']'));
  else if(v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => walk(x, path + '.' + k));
  else if(typeof v === 'string' && /[ঀ-৿]/.test(v) && !/^[০-৯\s.,:\-–/%]+$/.test(v)
          && !path.startsWith('.NEWS_SEARCH_URL') && !(v in EN)) missing.add(v);
})(D, '');
if(!missing.size){ console.log('All Bangla text in data.js has English. 👍'); process.exit(0); }
console.log(`${missing.size} text(s) need English. Add these lines to data-en.js:\n`);
for(const v of missing) console.log('  ' + JSON.stringify(v) + ': "TODO",');
process.exit(1);
