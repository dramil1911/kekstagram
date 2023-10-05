import { isEscKey } from './utils.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadCancel = document.querySelector('#upload-cancel');
const uloadButton = document.querySelector('#upload-file');

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
}

const uploadFoto = () => {
  imageUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  uploadCancel.addEventListener('click', closeForm);
  document.addEventListener('keydown', onEscPush);
};

// uloadButton.addEventListener('change', uploadFoto);
// textArea.addEventListener('focus', (evt)=> {
//   evt.target.stopPropagation();
//   console.log('focus');
// })


export { uploadFoto };
