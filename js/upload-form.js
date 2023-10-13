import { isEscKey } from './utils.js';
import { resetImageEffects } from './effects.js';

const imageScale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};


const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('#upload-cancel');
const uloadButton = document.querySelector('#upload-file');

const image = document.querySelector('.img-upload__preview > img');
const scaleValue = document.querySelector('.scale__control--value');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');

const onEscPush = (evt) => {
  if (isEscKey(evt.key)) {
    closeForm(evt);
  }
};

function closeForm() {
  imageUpload.classList.add('hidden');
  imageUpload.removeEventListener('click', closeForm);
  document.removeEventListener('keydown', onEscPush);
  body.classList.remove('modal-open');
  uloadButton.value = '';
  uploadForm.reset();
  resetImageEffects();

}

const onZommClick = (evt) => {
  let scale = parseInt(scaleValue.value, 10);
  if (evt.target.classList.contains('scale__control--smaller')) {
    scale = scale - imageScale.STEP;
    if (scale <= imageScale.MIN) {
      scale = imageScale.MIN;
    }
  } else {
    scale = scale + imageScale.STEP;
    if (scale >= imageScale.MAX) {
      scale = imageScale.MAX;
    }
  }
  image.style.transform = `scale( ${scale / 100} )`;
  scaleValue.value = scale;
};

const uploadFoto = () => {
  imageUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  uploadCancel.addEventListener('click', closeForm);
  document.addEventListener('keydown', onEscPush);
  smallerButton.addEventListener('click', onZommClick);
  biggerButton.addEventListener('click', onZommClick);
};

export { uploadFoto };
