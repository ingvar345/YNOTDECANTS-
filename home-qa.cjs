const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements=new Map();function element(){return {dataset:{},textContent:'',innerHTML:'',value:'',open:false,classList:{add(){},remove(){},toggle(){}},addEventListener(){},setAttribute(){},focus(){},before(){},after(){},showModal(){this.open=true},close(){this.open=false}}}
const doc={querySelector:s=>{if(!elements.has(s))elements.set(s,element());return elements.get(s)},querySelectorAll:()=>[],createElement:()=>element(),addEventListener(){},body:element()};
const context=vm.createContext({document:doc,location:{search:''},localStorage:{getItem(){return null},setItem(){}},Intl,URLSearchParams,Date,setTimeout,clearTimeout});
vm.runInContext(fs.readFileSync('catalog.js','utf8'),context);vm.runInContext(fs.readFileSync('script.js','utf8'),context);const run=s=>vm.runInContext(s,context);
assert.equal(run('products.length'),352);assert.equal(run('new Set(products.map(p=>p.id)).size'),352);
assert.equal((doc.querySelector('#product-grid').innerHTML.match(/class="product-card"/g)||[]).length,24);
assert.equal(run('priceFor(products.find(p=>p.id==="burberry-britsheer"),30)'),49);assert.equal(run('priceFor(products.find(p=>p.id==="burberry-britsheer"),5)'),10.5);
assert.equal(run('products.filter(p=>p.pricingConflict).length'),13);assert(run('products.filter(p=>p.pricingConflict).every(p=>Object.keys(p.prices).length===0)'));
run('showProduct("alharamain-amberoud")');assert(!doc.querySelector('#product-dialog').innerHTML.includes('data-add'));run('showProduct("burberry-britsheer")');assert(doc.querySelector('#product-dialog').innerHTML.includes('30ml'));
run('cart=[{id:"burberry-britsheer",size:30,qty:2}];renderCart()');assert(doc.querySelector('#cart-summary').innerHTML.includes('98.00'));
assert.equal(run('products.filter(p=>p.categories.includes("women")).length'),66);assert.equal(run('products.filter(p=>p.categories.includes("men")).length'),273);
doc.querySelector('#search-input').value='Brit Sheer';run('search()');assert(doc.querySelector('#search-results').innerHTML.includes('Brit Sheer'));
for(const page of ['index.html','men.html','women.html','about.html']){const html=fs.readFileSync(page,'utf8');assert(html.includes('src="catalog.js"'));for(const [,asset] of html.matchAll(/(?:src|href)="(assets\/[^"#]+)"/g))assert(fs.existsSync(asset),asset);}
assert(run('products.every(p=>Object.values(p.prices).every(n=>Number.isFinite(n)&&n>0))'));
console.log('PASS: catalogue integrity, imported prices, unavailable pricing, four size options, cart totals, category membership, search and page assets.');
