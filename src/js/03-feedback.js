import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const savedObject = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedObject));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}

// const inputObj = {};

// const feedbackForm = document.querySelector('.feedback-form');

// const onReload = () => {
//   const savedFeedbackState = localStorage.getItem('feedback-form-state');
//   const parsedFeedbackState = JSON.parse(savedFeedbackState);
//   if (parsedFeedbackState) {
//     feedbackForm.email.value = parsedFeedbackState.email;
//     feedbackForm.message.value = parsedFeedbackState.message;
//   }
// };

// const saveInLocalStorage = event => {
//   const {
//     elements: { email, message },
//   } = event.currentTarget;
//   inputObj.email = email.value;
//   inputObj.message = message.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(inputObj));
// };

// const submitEvent = event => {
//   event.preventDefault();
//   if (feedbackForm.email.value === '' || feedbackForm.message.value === '') {
//     return alert('Fill all fields to send!');
//   }
//   event.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
//   console.log(inputObj);
// };
// onReload();
// feedbackForm.addEventListener('input', throttle(saveInLocalStorage), 500);
// feedbackForm.addEventListener('submit', submitEvent);
