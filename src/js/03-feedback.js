import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextArea = feedbackForm.querySelector('textarea[name="message"]');

const handleSubmit = e => {
  e.preventDefault();

  console.log(localStorage.getItem('email'));
  console.log(localStorage.getItem('message'));

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

const setEmailValue = e => {
  localStorage.setItem('email', e.target.value);
};
const setMessageValue = e => {
  localStorage.setItem('message', e.target.value);
};

emailInput.addEventListener('change', setEmailValue);
messageTextArea.addEventListener('change', setMessageValue);

const setFormValues = () => {
  feedbackForm.elements.email.value = localStorage.getItem('email');
  feedbackForm.elements.message.value = localStorage.getItem('message');
};

const throttledSetFormValues = throttle(setFormValues, 500);

document.addEventListener('DOMContentLoaded', throttledSetFormValues);
