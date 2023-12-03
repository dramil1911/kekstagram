const ALERT_SHOW_TIME = 5000;
const successMessage = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');

const isEscKey = (key) => key === 'Escape' || key === 'Esc';

const checkStringLength = (srting, maxStringLength) => srting.length <= maxStringLength;
const getRandomPositiveNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const onEscPush = (evt) => {
  if (isEscKey(evt.key)) {
    hideMessage();
  }
};

const onBodyClick = (evt) => {
  if (evt.target.closest('.success__inner')) {
    return;
  }
  hideMessage();
};

function hideMessage() {
  const currentMessage = document.querySelector('.success') || document.querySelector('.error');
  currentMessage.remove();
  document.removeEventListener('keydown', onEscPush);
  document.removeEventListener('click', onBodyClick);
}

const renderErrorMessage = () => {
  body.append(errorMessage);
  setTimeout(() => {
    hideMessage();
  }, ALERT_SHOW_TIME);

  errorMessage.querySelector('.error__button').addEventListener('click', () => {
    hideMessage();
  });

  document.addEventListener('keydown', onEscPush);
  document.addEventListener('click', onBodyClick);
};

const renderSuccessMessage = () => {
  body.append(successMessage);
  // setTimeout(() => {
  //   hideMessage();
  // }, ALERT_SHOW_TIME);

  successMessage.querySelector('.success__button').addEventListener('click', () => {
    hideMessage();
  });

  document.addEventListener('keydown', onEscPush);
  document.addEventListener('click', onBodyClick);
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

  };
}

export { getRandomPositiveNumber, checkStringLength, isEscKey, showAlert, renderSuccessMessage, renderErrorMessage, debounce };
