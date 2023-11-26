const getPhotosData = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .catch(() => onError('Не удалось загрузить фото, попробуйте позже'));
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    });
};

export { getPhotosData, sendData };
