import { renderPreviews, } from './preview.js';
import { setUserFormSubmit, closeForm } from './upload-form.js';
import { getPhotosData } from './api.js';
import { showAlert, renderSuccessMessage, renderErrorMessage } from './utils.js';
import { sendData } from './api.js';


const onGetDataSuccess = (data) => {
  renderPreviews(data);
};

getPhotosData(onGetDataSuccess, showAlert);

const onSendDataSuccess = () => {
  closeForm();
  renderSuccessMessage();
};

const onSendDataError = () => {
  closeForm();
  renderErrorMessage();

};

setUserFormSubmit((data) => {
  sendData(onSendDataSuccess, onSendDataError, data);
});

