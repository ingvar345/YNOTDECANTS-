const contactForm = document.querySelector('#contact-form');
const contactTopic = document.querySelector('#contact-topic');
const contactOrderField = document.querySelector('#contact-order-field');
const contactOrderInput = document.querySelector('#contact-order');
contactTopic.addEventListener('change', () => {
  const orderSelected = contactTopic.value === 'order';
  contactOrderField.hidden = !orderSelected;
  contactOrderInput.disabled = !orderSelected;
});
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#contact-status');
  status.textContent = 'Your message is ready to review. This preview does not send or store it. You can continue editing the fields above.';
  status.focus();
});
