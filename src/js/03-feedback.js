import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextArea = feedbackForm.querySelector('textarea[name="message"]');

const handleSubmit = e => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

  console.log(email, message);
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
};

document.addEventListener('DOMContentLoaded', handlePageReload);
