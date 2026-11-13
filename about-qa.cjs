const {chromium}=require('playwright');
const path=require('path');
(async()=>{
const browser=await chromium.launch({headless:true,channel:'msedge'});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const base='file:///'+process.cwd().replaceAll('\\','/')+'/';
await page.goto(base+'about.html');
await page.screenshot({path:'about-desktop-qa.png',fullPage:true});
console.log('desktop',await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].every(i=>i.complete&&i.naturalWidth>0)})));
await page.locator('[data-open-search]').click();await page.locator('#search-input').fill('rose');console.log('search results',await page.locator('.search-row').count());await page.locator('#search-dialog [data-close]').click();
await page.locator('[data-open-cart]').click();console.log('bag',await page.locator('#cart-dialog').isVisible());await page.locator('#cart-dialog [data-close]').first().click();
await page.locator('[data-open-quiz]').click();for(let i=0;i<3;i++)await page.locator('[data-answer]').first().click();console.log('quiz result',await page.locator('.quiz-result').count());await page.locator('#quiz-dialog [data-close]').click();
await page.setViewportSize({width:390,height:844});await page.screenshot({path:'about-mobile-qa.png',fullPage:true});
console.log('mobile overflow',await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth));await page.locator('.menu-toggle').click();console.log('menu',await page.locator('#navigation').isVisible());
await page.goto(base+'index.html?category=men#shop');console.log('category cards',await page.locator('.product-card').count());console.log('errors',errors);await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
