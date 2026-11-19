const $ = s => document.querySelector(s);
const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',currencyDisplay:'code',minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
const readStore = (key, fallback) => {try{return JSON.parse(localStorage.getItem(key)) || fallback;}catch{return fallback;}};
let cart = readStore('ynot-bag',[]).filter(x=>products.some(p=>p.id===x.id)&&Number.isFinite(products.find(p=>p.id===x.id)?.prices[x.size])&&Number.isInteger(x.qty)&&x.qty>0);
let saved = new Set(readStore('ynot-saved',[]));
const pageCategory=document.body.dataset.category;
const requestedCategory=pageCategory || new URLSearchParams(location.search).get('category');
let currentFilter=['men','women','unisex'].includes(requestedCategory)?requestedCategory:'all', selectedSize=2, currentProduct, quizStep=0, answers=[];
const priceFor=(p,size)=>p.prices[size];
const sizesFor=p=>[2,5,10,30].filter(s=>Number.isFinite(p.prices[s]));
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const categoryLabel=p=>p.category==='uncategorised'?'Fragrance':p.category;
let catalogLimit=24;
const homeGrid = document.body.classList.contains("home-page");
const twoColumnGrid = homeGrid ? window.matchMedia("(max-width: 1000px)") : null;
const gridProducts = homeGrid ? products.filter(product => product.url) : products;
const image=p=>p.image || `assets/placeholder-${["men","women"].includes(p.category)?p.category:"unisex"}.png`;
const closeButton='<button class="icon-button" data-close aria-label="Close dialog">×</button>';
function persist(){try{localStorage.setItem('ynot-bag',JSON.stringify(cart));localStorage.setItem('ynot-saved',JSON.stringify([...saved]));}catch{} $('#cart-count').textContent=cart.reduce((n,x)=>n+x.qty,0);}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('visible'),3000);}
function openDialog(id){const dialog=$(id);document.querySelectorAll('dialog[open]').forEach(d=>d.close());dialog.showModal();document.body.classList.add('modal-open');}
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('close',()=>document.body.classList.toggle('modal-open',!!document.querySelector('dialog[open]')));d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
function productCardControl(product, className, label, content){
 const attributes = `class="${className}" aria-label="${esc(label)}"`;
 if (homeGrid && product.url) {
  return `<a ${attributes} href="${esc(product.url)}">${content}</a>`;
 }
 return `<button ${attributes} data-product="${esc(product.id)}">${content}</button>`;
}
function productCardAction(product){
 if (homeGrid && product.url) {
  return productCardControl(product, 'quick-view', `View ${product.name} in the shop`, 'View in shop');
 }
 const name = esc(product.name);
 if (sizesFor(product).length) {
  return `<button class="quick-view" data-product="${product.id}" aria-label="Choose a size for ${name}">Choose size</button>`;
 }
 if (typeof product.url === 'string' && /^https?:\/\//i.test(product.url)) {
  return `<a class="quick-view" href="${esc(product.url)}" aria-label="View ${name} in the shop">View product</a>`;
 }
 return `<button class="quick-view" data-product="${product.id}" aria-label="View details for ${name}">View details</button>`;
}
function renderProducts(){
 if(!document.querySelector('#product-grid'))return;
 const productLimit = homeGrid ? 2 * (twoColumnGrid.matches ? 2 : 4) : catalogLimit;
 const filter=pageCategory||currentFilter,term=($('#catalog-search')?.value||'').trim().toLowerCase(),brand=$('#catalog-brand')?.value||'';
 const visible=gridProducts.filter(p=>(filter==='all'||p.categories.includes(filter))&&(!brand||p.brand===brand)&&(!term||[p.name,p.brand,p.description,...p.notes].join(' ').toLowerCase().includes(term)));
 const sort=$('#collection-sort')?.value;
 if(sort==='price-low')visible.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
 if(sort==='price-high')visible.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
 if(sort==='name')visible.sort((a,b)=>a.name.localeCompare(b.name));
 if($('#product-count'))$('#product-count').textContent=visible.length+' SCENTS';
 $('#product-grid').innerHTML=visible.slice(0,productLimit).map(p=>`<article class="product-card"><div class="product-image"><button class="save-button ${saved.has(p.id)?'saved':''}" data-save="${p.id}" aria-label="Save ${esc(p.name)}" aria-pressed="${saved.has(p.id)}"><svg><use href="#i-heart"/></svg></button>${productCardControl(p, 'product-preview', `View ${p.name}`, `<img src="${esc(image(p))}" alt="${p.image ? esc(p.name) : 'Generated fragrance placeholder; actual product image coming soon'}" loading="lazy">`)}${productCardAction(p)}</div><div class="product-details"><div class="product-meta"><span>${esc(p.brand)}</span><span>${categoryLabel(p).toUpperCase()}</span></div>${productCardControl(p, 'product-name', p.name, esc(p.name))}<p class="product-notes">${esc(p.notes.slice(0,3).join(' · ')||'Explore fragrance details')}</p><div class="product-buy"><span class="product-price">${p.price!==null?'<small>From</small>'+money(p.price):'Price to confirm'}</span><button type="button" class="product-add-to-cart" data-product="${esc(p.id)}" aria-label="Add to cart: ${esc(p.name)}"${sizesFor(p).length ? "" : " disabled"}>Add to cart</button></div></div></article>`).join('')||'<p class="catalog-empty">No fragrances match your search.</p>';
 const more=$('#catalog-more');if(more){more.hidden=catalogLimit>=visible.length;more.textContent='Show more fragrances ('+Math.min(catalogLimit,visible.length)+' of '+visible.length+')';}
 document.querySelectorAll('.filter-tab').forEach(b=>{b.classList.toggle('active',b.dataset.filter===currentFilter);b.setAttribute('aria-pressed',b.dataset.filter===currentFilter);});
}
function showProduct(id){
 currentProduct=products.find(p=>p.id===id);if(!currentProduct)return;const p=currentProduct,sizes=sizesFor(p);selectedSize=sizes[0]||null;
 const accords = esc(p.notes.join(" · "));
 $('#product-dialog').innerHTML=`<button class="icon-button product-dialog-close" data-close aria-label="Close product">x</button><div class="product-modal-layout"><div class="product-modal-image"><img src="${esc(image(p))}" alt="${p.image ? esc(p.name) : 'Generated fragrance placeholder; actual product image coming soon'}"></div><div class="product-modal-copy"><p class="eyebrow">${esc(p.brand)} / ${categoryLabel(p)}</p><h2>${esc(p.name)}</h2><p>${esc(p.description)}</p>${accords?`<p class="product-modal-accords"><strong>Main accords</strong><span title="${accords}">${accords}</span></p>`:""}${p.wear?'<h3 class="detail-label">When to wear</h3><p>'+esc(p.wear)+'</p>':''}<span class="size-label">CHOOSE YOUR DECANT</span><div class="size-options" role="group" aria-label="Decant size">${[2,5,10,30].map(s=>'<button class="size-option '+(s===selectedSize?'selected':'')+'" data-size="'+s+'" aria-pressed="'+(s===selectedSize)+'" '+(!sizes.includes(s)?'disabled':'')+'>'+s+'ml</button>').join('')}</div><p class="modal-price" id="modal-price">${selectedSize?money(priceFor(p,selectedSize)):'Price to confirm'}</p>${selectedSize?'<button class="button primary modal-add" data-add>Add to bag <span>+</span></button>':''}<p class="product-disclaimer">${p.pricingConflict?'Price confirmation is needed before this fragrance can be added to your bag. ':''}Prices are estimates in USD. Generated placeholder shown; actual product appearance may differ. Online ordering opens at launch.</p></div></div>`;
 openDialog('#product-dialog');
}
function renderCart(){persist();$('#cart-items').innerHTML=cart.length?cart.map((x,i)=>{const p=products.find(p=>p.id===x.id);return `<article class="cart-item"><img src="${image(p)}" alt="${esc(p.name)}"><div class="cart-item-info"><h3>${esc(p.name)}</h3><p>${x.size}ml decant · ${money(priceFor(p,x.size))} each</p><div class="cart-item-controls"><div class="quantity-control"><button data-qty="${i}" data-delta="-1" aria-label="Decrease ${esc(p.name)} quantity">−</button><span>${x.qty}</span><button data-qty="${i}" data-delta="1" aria-label="Increase ${esc(p.name)} quantity">+</button></div><button class="remove-item" data-remove="${i}">Remove</button></div></div><span class="cart-item-price">${money(priceFor(p,x.size)*x.qty)}</span></article>`;}).join(''):'<div class="empty-state"><h3>A little room for luxury.</h3><p>Your shopping bag is empty.</p><button class="button primary" data-close>Keep exploring</button></div>';$('#cart-summary').innerHTML=cart.length?`<div class="cart-total"><span>Subtotal</span><strong>${money(cart.reduce((n,x)=>n+priceFor(products.find(p=>p.id===x.id),x.size)*x.qty,0))}</strong></div><p class="cart-summary-note">Demo bag only. Shipping and payment will be available at launch.</p><button class="button primary cart-demo-button" data-demo-checkout>Checkout preview</button>`:'';}
function search(){const term=$('#search-input').value.trim().toLowerCase();const list=products.filter(p=>[p.name,p.brand,p.description,...p.notes,...p.categories].join(' ').toLowerCase().includes(term));$('#search-results').innerHTML=list.length?list.slice(0,40).map(p=>`<button class="search-row" data-product="${p.id}"><img src="${image(p)}" alt=""><span><strong>${esc(p.name)}</strong><small>${esc(p.brand)} · ${esc(p.notes.slice(0,3).join(', '))}</small></span><b>${p.price!==null?money(p.price):'Price to confirm'}</b></button>`).join(''):'<p class="empty-state">No scents found. Try a brand, fragrance or note.</p>';}
const questions=[{title:'What draws you in?',options:[['fresh','Fresh & bright','Citrus, sea air, clean beginnings'],['floral','Soft & floral','Petals, musk, a little romance'],['woody','Earthy & woody','Sandalwood, cedar, quiet depth'],['warm','Warm & sensual','Vanilla, amber, after-hours energy']]},{title:'When will you wear it?',options:[['day','Everyday moments','Your desk, your coffee, your routine'],['night','After dark','Dinner dates and late nights'],['weekend','Out of office','Slow mornings and new places'],['any','Whenever I feel like it','No occasion needed']]},{title:'Who are we shopping for?',options:[['men','For him','Start with the men’s edit'],['women','For her','Start with the women’s edit'],['unisex','For everyone','Find something without labels'],['all','Keep me curious','Show me every possibility']]}];
function renderQuiz(){const q=questions[quizStep];$('#quiz-dialog').innerHTML=`<div class="dialog-heading"><span class="eyebrow">YOUR SCENT, YOUR RULES · ${quizStep+1} / 3</span>${closeButton}</div><div class="quiz-progress"><span style="width:${(quizStep+1)/3*100}%"></span></div><h2>${q.title}</h2><div class="quiz-options">${q.options.map(([v,t,s])=>`<button class="quiz-option" data-answer="${v}"><strong>${t}</strong><span>${s}</span></button>`).join('')}</div>${quizStep?'<button class="quiz-back" data-back>← Back</button>':''}`;}
function quizResult(){const ranked=products.map(p=>({p,score:(p.mood===answers[0]?5:0)+(p.category===answers[2]?3:0)+(answers[1]==='night'&&p.mood==='warm'?2:0)+(answers[1]==='day'&&p.mood==='fresh'?1:0)})).sort((a,b)=>b.score-a.score);const p=ranked[0].p;$('#quiz-dialog').innerHTML=`<div class="dialog-heading"><span class="eyebrow">A LITTLE CHEMISTRY, JUST FOR YOU</span>${closeButton}</div><h2>Meet your <em>match.</em></h2><div class="quiz-result"><img src="${image(p)}" alt="${esc(p.name)}"><div><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><button class="button primary" data-product="${p.id}">Try your match</button></div></div><button class="quiz-back" data-restart>Take the quiz again</button><p class="product-disclaimer">A suggestion based on the accords in our collection and your answers.</p>`;}
const info={support:['Let’s talk scent.','Customer support details will be added before launch. For now, browse the collection or use the fragrance quiz to find a starting point.'],shipping:['The journey to your door.','Shipping locations, delivery times and the returns policy will be confirmed before launch. This preview does not accept orders.'],privacy:['Your privacy matters.','This preview saves your bag and favourites in this browser only. The newsletter form does not send or store your email. A full privacy policy will be available before live sign-up and checkout.'],terms:['The finer details.','This is a demonstration storefront. Fragrance details come from our catalogue. Prices are estimates in USD and remain subject to confirmation. No orders or payments are processed. Final store terms will be provided before launch.']};
document.addEventListener('click',e=>{const b=e.target.closest('button,a');if(!b)return;if(b.hasAttribute('data-close')){b.closest('dialog').close();return;}if(b.dataset.filter){currentFilter=b.dataset.filter;catalogLimit=24;renderProducts();$('#navigation').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');}if(b.hasAttribute('data-view-all')){currentFilter='all';renderProducts();}if(b.dataset.product)showProduct(b.dataset.product);if(b.dataset.save){saved.has(b.dataset.save)?saved.delete(b.dataset.save):saved.add(b.dataset.save);persist();renderProducts();toast(saved.has(b.dataset.save)?'Saved to your favourites.':'Removed from favourites.');}if(b.dataset.size){if(!sizesFor(currentProduct).includes(Number(b.dataset.size)))return;selectedSize=Number(b.dataset.size);document.querySelectorAll('.size-option').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',x===b);});$('#modal-price').textContent=money(priceFor(currentProduct,selectedSize));}if(b.hasAttribute('data-add')){if(!Number.isFinite(priceFor(currentProduct,selectedSize)))return;const item=cart.find(x=>x.id===currentProduct.id&&x.size===selectedSize);if(item)item.qty++;else cart.push({id:currentProduct.id,size:selectedSize,qty:1});persist();toast(`${currentProduct.name} added to your bag.`);}if(b.hasAttribute('data-open-cart')){renderCart();openDialog('#cart-dialog');}if(b.dataset.qty!==undefined){const i=Number(b.dataset.qty);cart[i].qty+=Number(b.dataset.delta);if(cart[i].qty<1)cart.splice(i,1);renderCart();}if(b.dataset.remove!==undefined){cart.splice(Number(b.dataset.remove),1);renderCart();}if(b.hasAttribute('data-open-search')){search();openDialog('#search-dialog');$('#search-input').focus();}if(b.hasAttribute('data-open-quiz')||b.hasAttribute('data-restart')){quizStep=0;answers=[];renderQuiz();if(!$('#quiz-dialog').open)openDialog('#quiz-dialog');}if(b.dataset.answer){answers[quizStep]=b.dataset.answer;if(quizStep<2){quizStep++;renderQuiz();}else quizResult();$('#quiz-dialog').querySelector('h2').setAttribute('tabindex','-1');$('#quiz-dialog').querySelector('h2').focus();}if(b.hasAttribute('data-back')){quizStep--;renderQuiz();}if(b.dataset.info){const [title,copy]=info[b.dataset.info];$('#info-content').innerHTML=`<h2>${title}</h2><p>${copy}</p>`;openDialog('#info-dialog');}if(b.hasAttribute('data-demo-checkout'))toast('You’re all set to explore. Live checkout is coming at launch.');if(b.classList.contains('menu-toggle')){const open=$('#navigation').classList.toggle('open');b.setAttribute('aria-expanded',open);}});
$('#search-input').addEventListener('input',search);
$('#year').textContent=new Date().getFullYear();
if(document.querySelector('#product-grid')){
 const controls=document.createElement('div');controls.className='catalog-controls';controls.innerHTML='<div><label for="catalog-search">Find a fragrance</label><input id="catalog-search" type="search" placeholder="Search brand, fragrance or notes"></div><div><label for="catalog-brand">Brand</label><select id="catalog-brand"><option value="">All brands</option>'+[...new Set(gridProducts.filter(p=>!pageCategory||p.categories.includes(pageCategory)).map(p=>p.brand))].sort().map(b=>'<option value="'+esc(b)+'">'+esc(b)+'</option>').join('')+'</select></div>';
 $('#product-grid').before(controls);const pricingNote=document.createElement('p');pricingNote.className='catalog-pricing-note';pricingNote.textContent='Prices in USD · estimates pending confirmation. Bottle photos show the original fragrance. Orders are supplied in decant atomizers.';controls.after(pricingNote);
 if (!homeGrid) {
  const more = document.createElement('button');
  more.id = 'catalog-more';
  more.className = 'button catalog-more';
  more.type = 'button';
  $('#product-grid').after(more);
  more.addEventListener('click', () => { catalogLimit += 24; renderProducts(); });
 }
 $('#catalog-search').addEventListener('input',()=>{catalogLimit=24;renderProducts();});$('#catalog-brand').addEventListener('change',()=>{catalogLimit=24;renderProducts();});
}
twoColumnGrid?.addEventListener('change', renderProducts);
renderProducts();persist();



$('#collection-sort')?.addEventListener('change',renderProducts);

