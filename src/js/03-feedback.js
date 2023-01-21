import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onTextareaFormInput);

onTextareaWasLocalStorage();

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function onTextareaFormInput(e) {
  formData[e.target.name] = e.target.value;
  const messageInLocal = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify({...messageInLocal, ...formData}));
};

function onTextareaWasLocalStorage() {
  const messageInLocal = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log('messageInLocal', messageInLocal)

  if (messageInLocal) {
    if (messageInLocal.email) {
      refs.email.value = messageInLocal.email;
    };
    if(messageInLocal.message) {
      refs.textarea.value = messageInLocal.message;
    }
  }
}


