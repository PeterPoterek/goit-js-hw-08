import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextArea = feedbackForm.querySelector('textarea[name="message"]');

const handleSubmit = e => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

  const result = { email: email, message: message };
  console.log(result);

  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
};

feedbackForm.addEventListener('submit', handleSubmit);

const setEmailValue = e => {
  localStorage.setItem('email', e.target.value);
};
const setMessageValue = e => {
  localStorage.setItem('message', e.target.value);
};

emailInput.addEventListener('change', setEmailValue);
messageTextArea.addEventListener('change', setMessageValue);

const handlePageReload = () => {
  feedbackForm.elements.email.value = localStorage.getItem('email');
  feedbackForm.elements.message.value = localStorage.getItem('message');

  throttle();
};

document.addEventListener('DOMContentLoaded', handlePageReload);
