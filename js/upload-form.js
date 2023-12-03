import { isEscKey } from './utils.js';
import { resetImageEffects } from './effects.js';
import { onZommClick } from './effects.js';
import { validateForm } from './validation.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');


const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('#upload-cancel');
const uloadButton = document.querySelector('#upload-file');
const imagePreviev = document.querySelector('.img-upload__preview >img');
const effectsPreview = document.querySelectorAll('.effects__preview');
const uploadInput = document.querySelector('#upload-file');

const onEscPush = (evt) => {
  if (isEscKey(evt.key)) {
    closeForm(evt);
  }
};

const onCancelButtonClick = (evt) => {
  closeForm(evt);
};

function closeForm() {
  imageUpload.classList.add('hidden');
  uploadCancel.removeEventListener('click', closeForm);
  smallerButton.removeEventListener('click', onZommClick);
  biggerButton.removeEventListener('click', onZommClick);
  document.removeEventListener('keydown', onEscPush);
  body.classList.remove('modal-open');
  uloadButton.value = '';
  uploadForm.reset();
  resetImageEffects();
}

const showModal = () => {
  imageUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  uploadCancel.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onEscPush);
  smallerButton.addEventListener('click', onZommClick);
  biggerButton.addEventListener('click', onZommClick);

};

const setUserFormSubmit = (cb) => {
  validateForm();

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    cb(data);
  });
};

const checkValidFormat = (file) => {
  const userImage = file.name.toLowerCase();
  return FILE_TYPES.some((type) => {
    userImage.endsWith(type);
  });
};

const uploadPhoto = () => {
  const image = uploadInput.files[0];
  checkValidFormat(image);
  if (checkValidFormat) {
    imagePreviev.src = URL.createObjectURL(image);
    effectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url(${imagePreviev.src})`;
    });
  }
};

uploadInput.addEventListener('change', uploadPhoto);

uploadForm.addEventListener('change', showModal);


export { setUserFormSubmit, closeForm };
