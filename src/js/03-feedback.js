import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextArea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

  console.log(email);
  console.log(message);
});

emailInput.addEventListener('change', e => {
  console.log(e.target.value);
  localStorage.setItem('email', e.target.value);
});
messageTextArea.addEventListener('change', e => {
  console.log(e.target.value);
  localStorage.setItem('message', e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  feedbackForm.elements.email.value = localStorage.getItem('email');
  feedbackForm.elements.message.value = localStorage.getItem('message');
});
