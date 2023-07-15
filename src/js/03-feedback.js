
import throttle from "lodash.throttle";
const ref = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formObjEl = {};
console.log(formObjEl);


enteredText();

ref.message.addEventListener('input', throttle(showTextareaInput, 500));

function showTextareaInput(event) {
  // const funcMessage = event.target.value;
  // console.log(funcMessage);
  // console.log(event.target.name);
  formObjEl[event.target.name] = event.target.value;
  // console.log(formObjEl[event.target.name] = event.target.value);
  // console.log(formObjEl);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObjEl));
  // localStorage.setItem(STORAGE_KEY, funcMessage);
  // console.log(formObjEl);

};

ref.email.addEventListener('input', throttle(showEmail,500));

function showEmail(event) { 
  // const email = event.currentTarget.value;
  formObjEl[event.target.name] = event.target.value;
  // console.log(formObjEl[event.target.name] = event.target.value);
  // console.log(formObjEl);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObjEl));
  // console.log(email);

};

ref.form.addEventListener('submit', submitClick);


function submitClick(event) {
  event.preventDefault();

  const finalObj = localStorage.getItem(STORAGE_KEY);
  // console.log(finalObj);
  console.log(JSON.parse(finalObj));
  // console.log('Форма отправлена, поля очищены');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};


function enteredText() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    // console.log(savedMessage);
    const recoveredFormObjEl = JSON.parse(savedMessage);
    // console.log(recoveredFormObjEl);
    ref.message.value = recoveredFormObjEl.message;
    ref.email.value = recoveredFormObjEl.email;
  }
};





