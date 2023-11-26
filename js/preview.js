// import { photosData } from './data.js';
import { showBigPicture } from './big-picture.js';


// const photos = getFotosData();
// console.log(photos);

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesList = document.querySelector('.pictures');

const renderPreview = (picture) => {
  const preview = pictureTemplate.cloneNode(true);
  preview.querySelector('.picture__img').src = picture.url;
  preview.querySelector('.picture__comments').textContent = picture.comments.length;
  preview.querySelector('.picture__likes').textContent = picture.likes;

  preview.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  });

  return preview;
};

const renderPreviews = (photos) => {
  const photosFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    photosFragment.append(renderPreview(photo));
  });
  picturesList.append(photosFragment);
};

export { renderPreviews };
