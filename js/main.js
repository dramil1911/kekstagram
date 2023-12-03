import { renderPreviews, } from './preview.js';
import { setUserFormSubmit, closeForm } from './upload-form.js';
import { getPhotosData } from './api.js';
import { showAlert, renderSuccessMessage, renderErrorMessage } from './utils.js';
import { sendData } from './api.js';
import { displayFilters, filterPictures, setOnFilterClick } from './filters.js';

const onGetDataSuccess = (data) => {
  displayFilters(data);
  renderPreviews(filterPictures());
  setOnFilterClick(renderPreviews);
};

const onSendDataSuccess = () => {
  closeForm();
  renderSuccessMessage();
};

const onSendDataError = () => {
  closeForm();
  renderErrorMessage();

};

getPhotosData(onGetDataSuccess, showAlert);

setUserFormSubmit((data) => {
  sendData(onSendDataSuccess, onSendDataError, data);
});

