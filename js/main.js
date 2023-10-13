import { renderPreviews, } from './preview.js';
import { uploadFoto } from './upload-form.js';
import { validateForm } from './validation.js';

renderPreviews();
const uploadForm = document.querySelector('#upload-file');
uploadForm.addEventListener('change', uploadFoto);

validateForm();
