const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const page = fs.readFileSync('contact.html', 'utf8');
assert(page.includes('class="collection-page contact-page"'));
assert.equal((page.match(/id="contact-form"/g) || []).length, 1);
for (const field of ['name','email','topic','message']) {
  assert(page.includes(`for="contact-${field}"`), 'Missing label: '+field);
  assert(new RegExp(`(?:input|select|textarea)[^>]*id="contact-${field}"[^>]*required`).test(page), 'Missing required field: '+field);
}
for (const filename of ['index.html','men.html','women.html','unisex.html','fragrance-quiz.html','contact.html']) {
  const html = fs.readFileSync(filename, 'utf8');
  const nav = html.match(/<nav id="navigation"[\s\S]*?<\/nav>/)[0];
  assert.equal((nav.match(/href="contact.html"/g) || []).length, 1, filename);
}
for (const [,destination] of page.matchAll(/href="([^"#][^"]*\.html)(?:#[^"]*)?"/g)) assert(fs.existsSync(destination), destination);
const elements = new Map();
function element() { return {hidden:true,disabled:true,value:'',textContent:'',handlers:{},addEventListener(type,handler){this.handlers[type]=handler},focus(){this.focused=true}}; }
const document = {querySelector(selector){if(!elements.has(selector))elements.set(selector,element());return elements.get(selector)}};
vm.runInNewContext(fs.readFileSync('contact.js','utf8'), {document});
const topic = elements.get('#contact-topic');
topic.value = 'order';topic.handlers.change();
assert.equal(elements.get('#contact-order-field').hidden,false);
assert.equal(elements.get('#contact-order').disabled,false);
topic.value = 'fragrance';topic.handlers.change();
assert.equal(elements.get('#contact-order-field').hidden,true);
assert.equal(elements.get('#contact-order').disabled,true);
let prevented = false;
elements.get('#contact-form').handlers.submit({preventDefault(){prevented=true}});
assert(prevented);
assert(elements.get('#contact-status').textContent.includes('does not send or store'));
assert(elements.get('#contact-status').focused);
console.log('PASS: Contact navigation, labelled required fields, local links, order topic behaviour and honest preview feedback.');
