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

  localStorage.removeItem('email');
  localStorage.removeItem('message');

  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
};

feedbackForm.addEventListener('submit', handleSubmit);

const setLocalStorageValues = (e, name) => {
  localStorage.setItem(name, e.target.value);
};

const setEmailValue = throttle(e => {
  setLocalStorageValues(e, 'email');
}, 500);

const setMessageValue = throttle(e => {
  setLocalStorageValues(e, 'message');
}, 500);

emailInput.addEventListener('input', setEmailValue);
messageTextArea.addEventListener('input', setMessageValue);

const setFormValues = () => {
  feedbackForm.elements.email.value = localStorage.getItem('email');
  feedbackForm.elements.message.value = localStorage.getItem('message');
};

document.addEventListener('DOMContentLoaded', setFormValues);
