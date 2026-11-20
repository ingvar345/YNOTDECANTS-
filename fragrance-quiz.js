(() => {
  const form = document.querySelector('#scent-quiz-form');
  if (!form) return;
  const content = document.querySelector('#scent-quiz-content');
  const back = document.querySelector('#scent-quiz-back');
  const next = document.querySelector('#scent-quiz-next');
  const progress = document.querySelector('#scent-quiz-progress');
  const stepLabel = document.querySelector('#scent-quiz-step');
  const steps = [
    {key:'collection',title:'Where should we start?',intro:'A collection is just a starting point. Follow what feels like you.',options:[
      ['men','For men','Fresh, woody and aromatic.','assets/men-category.png'],
      ['women','For women','Floral, soft and captivating.','assets/women-category.png'],
      ['unisex','Unisex','Great scents, without labels.','assets/placeholder-unisex.png'],
      ['all','Keep me curious','Explore the whole collection.','assets/ynotdecants-packaging.png']
    ]},
    {key:'families',title:'Which notes draw you in?',intro:'Choose one or two scent families. There’s no wrong combination.',multi:true,max:2,options:[
      ['fresh','Fresh & bright','Citrus, green notes and a breath of fresh air.','assets/quiz/bergamot.webp'],
      ['floral','Soft & floral','Rose, jasmine and freshly picked petals.','assets/quiz/jasmine.webp'],
      ['woody','Woods & depth','Cedar, sandalwood and earthy warmth.','assets/quiz/cedar.webp'],
      ['warm','Warm & comforting','Amber, vanilla and a touch of sweetness.','assets/quiz/amber.webp']
    ]},
    {key:'occasion',title:'When will you wear it?',intro:'Think of the moments you’d like your fragrance to be part of.',options:[
      ['day','Everyday moments','Work, coffee and everything in between.','assets/quiz/espresso.webp'],
      ['night','After dark','Dinner dates and evenings that linger.','assets/quiz/candlelight.webp'],
      ['any','Whenever I feel like it','No occasion needed.','assets/quiz/carry-atomizer.webp']
    ]},
    {key:'season',title:'What’s the feeling outside?',intro:'We’ll use the catalogue’s wear suggestions to guide your matches.',options:[
      ['warm','Sun on my skin','Spring days and summer evenings.','assets/quiz/summer.webp'],
      ['cool','A little cooler','Autumn layers and winter nights.','assets/quiz/winter.webp'],
      ['any','A scent for every season','Something to reach for all year.','assets/quiz/four-seasons.webp']
    ]},
    {key:'avoid',title:'Anything you’d rather skip?',intro:'Optional: select notes you don’t enjoy, or continue with an open mind.',multi:true,optional:true,options:[
      ['sweet','Very sweet notes','Sugar, caramel and candy-like sweetness.','assets/quiz/caramel.webp'],
      ['rose','Rose','Skip fragrances with rose in their listed notes.','assets/quiz/rose.webp'],
      ['oud','Oud','Skip oud and agarwood notes.','assets/quiz/oud.webp'],
      ['tobacco','Tobacco','Skip fragrances with tobacco notes.','assets/quiz/tobacco.webp']
    ]},
    {key:'budget',title:'What’s your discovery budget?',intro:'Choose a starting price for a 2ml decant. Catalogue prices are estimates in USD.',options:[
      ['10','Up to USD 10','A little everyday discovery.','assets/quiz/sample-vial.webp'],
      ['20','Up to USD 20','A little more room to explore.','assets/quiz/sample-pair.webp'],
      ['any','Keep my options open','Let the notes lead the way.','assets/quiz/discovery-set.webp']
    ]}
  ];
  let position = 0;
  const preferences = {families:[],avoid:[]};
  let resultMode = false;
  const familyTerms = {
    fresh:['citrus','fresh','green','aquatic','bergamot','lemon','neroli','marine'],
    floral:['floral','rose','jasmine','peony','violet','iris','gardenia','tuberose'],
    woody:['woody','wood','cedar','sandalwood','vetiver','patchouli','earthy'],
    warm:['amber','vanilla','sweet','tonka','warm spicy','caramel','benzoin']
  };
  const avoidTerms = {sweet:['sweet','sugar','caramel','candy','cotton candy'],rose:['rose'],oud:['oud','agarwood'],tobacco:['tobacco']};
  const matchesTerm = (text, term) => new RegExp('\\b'+term+'\\b','i').test(text);
  const familyLabel = {fresh:'Fresh & bright',floral:'Soft & floral',woody:'Woods & depth',warm:'Warm & comforting'};
  function selected(step, value) {
    return step.multi ? (preferences[step.key] || []).includes(value) : preferences[step.key] === value;
  }
  function valid(step) {return step.optional || (step.multi ? preferences[step.key]?.length > 0 : Boolean(preferences[step.key]));}
  function updateNavigation() {
    next.disabled = !valid(steps[position]);
    next.innerHTML = position === steps.length-1 ? 'Find my matches <span aria-hidden="true">→</span>' : 'Continue <span aria-hidden="true">→</span>';
    back.hidden = position === 0;
    stepLabel.textContent = `QUESTION ${position+1} OF ${steps.length}`;
    progress.setAttribute('aria-valuenow', position);
    progress.setAttribute('aria-valuetext', `Question ${position+1} of ${steps.length}`);
    progress.firstElementChild.style.width = `${(position+1)/steps.length*100}%`;
  }
  function focusHeading() {content.querySelector('h1').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  function render(shouldFocus = true) {
    resultMode = false;
    const step = steps[position];
    form.classList.remove('showing-matches');
    form.querySelector('.scent-quiz-actions').hidden = false;
    content.innerHTML = `<div class="scent-question-heading"><p class="eyebrow">FIND YOUR NEXT SIGNATURE</p><h1 tabindex="-1">${esc(step.title)}</h1><p>${esc(step.intro)}</p></div><fieldset class="scent-choices scent-choices-visual ${step.options.length===3?'scent-choices-three':''}"><legend class="sr-only">${esc(step.title)}</legend>${step.options.map(([value,title,description,art])=>`<label class="scent-choice ${selected(step,value)?'is-selected':''}"><input type="${step.multi?'checkbox':'radio'}" name="${step.key}" value="${value}" ${selected(step,value)?'checked':''}><span class="scent-choice-check" aria-hidden="true">✓</span><img src="${art}" alt="" width="400" height="400"><span class="scent-choice-copy"><strong>${esc(title)}</strong><span>${esc(description)}</span></span></label>`).join('')}</fieldset><p id="scent-choice-feedback" class="scent-choice-feedback" role="status">${step.multi&&!step.optional?'Choose up to two.':''}</p>`;
    updateNavigation();
    if (shouldFocus) focusHeading();
  }
  form.addEventListener('change', e => {
    const input = e.target.closest('.scent-choice input');
    if (!input || resultMode) return;
    const step = steps[position];
    if (step.multi) {
      let values = preferences[step.key] || [];
      if (input.checked && step.max && values.length >= step.max) {
        input.checked = false;
        document.querySelector('#scent-choice-feedback').textContent = 'Choose up to two families. Deselect one to try another.';
        return;
      }
      preferences[step.key] = input.checked ? [...values,input.value] : values.filter(v=>v!==input.value);
    } else preferences[step.key] = input.value;
    form.querySelectorAll('.scent-choice').forEach(card=>card.classList.toggle('is-selected',card.querySelector('input').checked));
    document.querySelector('#scent-choice-feedback').textContent = step.multi&&!step.optional ? 'Choose up to two.' : '';
    updateNavigation();
  });
  function recommendations() {
    return products.filter(p => {
      if (preferences.collection !== 'all' && !p.categories.includes(preferences.collection)) return false;
      const text = `${p.description} ${p.notes.join(' ')}`.toLowerCase();
      if (preferences.avoid.some(a=>avoidTerms[a].some(t=>matchesTerm(text,t)))) return false;
      if (preferences.budget !== 'any' && (!Number.isFinite(p.prices[2]) || p.prices[2]>Number(preferences.budget))) return false;
      return true;
    }).map(p => {
      const accords = p.notes.join(' ').toLowerCase(), text = `${accords} ${p.description}`.toLowerCase(), wear = p.wear.toLowerCase();
      let score = 0; const reasons = [];
      for (const family of preferences.families) {
        if (familyTerms[family].some(t=>matchesTerm(text,t))) {
          score += familyTerms[family].some(t=>matchesTerm(accords,t)) ? 8 : 4;
          reasons.push(familyLabel[family]+' notes');
        }
      }
      if (preferences.occasion!=='any' && matchesTerm(wear,preferences.occasion)) {score+=3;reasons.push(preferences.occasion==='day'?'Listed for daytime':'Listed for evenings');}
      const seasons = preferences.season==='warm'?['spring','summer']:preferences.season==='cool'?['autumn','fall','winter']:[];
      if (seasons.some(s=>matchesTerm(wear,s))) score+=2;
      if (Number.isFinite(p.prices[2])) score+=0.5;
      if (preferences.budget!=='any') reasons.push('Within your 2ml budget');
      return {p,score,reasons};
    }).filter(match=>match.reasons.some(r=>r.endsWith(' notes'))).sort((a,b)=>b.score-a.score||a.p.name.localeCompare(b.p.name)).slice(0,3);
  }
  function results() {
    resultMode = true;
    const matches = recommendations();
    form.classList.add('showing-matches');
    form.querySelector('.scent-quiz-actions').hidden = true;
    progress.setAttribute('aria-valuenow','6'); progress.setAttribute('aria-valuetext','Quiz complete');progress.firstElementChild.style.width='100%';
    content.innerHTML = `<div class="scent-question-heading"><p class="eyebrow">A LITTLE CHEMISTRY, JUST FOR YOU</p><h1 tabindex="-1">${matches.length?'Meet your <em>matches.</em>':'Let’s try a different direction.'}</h1><p>${matches.length?'A few scents to get to know, chosen from the notes and moments you love.':'No fragrances match all of those choices. Try another scent family, fewer exclusions or a wider budget.'}</p></div><div class="scent-preferences">${preferences.families.map(f=>`<span>${esc(familyLabel[f])}</span>`).join('')}<span>${esc(preferences.collection==='all'?'All collections':preferences.collection+' collection')}</span></div><div class="scent-match-grid">${matches.map(({p,reasons},i)=>`<article class="scent-match-card"><div class="scent-match-art"><span class="scent-match-rank">YOUR MATCH</span><img src="${image(p)}" alt="Generated fragrance placeholder" width="400" height="400"><button type="button" class="save-button ${saved.has(p.id)?'saved':''}" data-save="${p.id}" aria-label="Save ${esc(p.name)}" aria-pressed="${saved.has(p.id)}"><svg><use href="#i-heart"/></svg></button></div><div class="scent-match-copy"><p class="eyebrow">${esc(p.brand)}</p><h2>${esc(p.name)}</h2><p>${esc(p.notes.slice(0,3).join(' · '))}</p><ul>${reasons.slice(0,3).map(r=>`<li>${esc(r)}</li>`).join('')}</ul><strong class="scent-match-price">${p.price!==null?'From '+money(p.price):'Price to confirm'}</strong><button type="button" class="button primary" data-product="${p.id}">Explore this scent</button></div></article>`).join('')}</div><div class="scent-result-actions"><button type="button" class="button scent-outline" id="scent-edit-answers">Change my answers</button><button type="button" class="text-link" id="scent-start-over">Start again</button><a class="text-link" href="index.html#shop">Explore all fragrances</a></div><p class="scent-result-note">Suggestions are based on catalogue notes and wear schedules. How a fragrance feels on your skin is personal. Prices are estimates in USD; images are generated placeholders.</p>`;
    focusHeading();
  }
  form.addEventListener('submit', e=>{e.preventDefault();if(resultMode||!valid(steps[position]))return;if(position<steps.length-1){position++;render();}else results();});
  back.addEventListener('click',()=>{if(position>0){position--;render();}});
  content.addEventListener('click', e=>{
    if(e.target.closest('#scent-edit-answers')){position=0;render();}
    if(e.target.closest('#scent-start-over')){for(const key of Object.keys(preferences))delete preferences[key];preferences.families=[];preferences.avoid=[];position=0;render();}
  });
  // Keep saved-state buttons on the results in sync with the shared shopping controls.
  document.addEventListener('click', e=>{const b=e.target.closest('[data-save]');if(b&&form.contains(b))queueMicrotask(()=>{b.classList.toggle('saved',saved.has(b.dataset.save));b.setAttribute('aria-pressed',String(saved.has(b.dataset.save)));});});
  render(false);
})();
