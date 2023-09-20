import { isEscKey } from "./utils.js";

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const socialComments = document.querySelector('.social__comments');
const commentTeamplate = document.querySelector('#comment').content.querySelector('.social__comment');
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');

const renderComment = (userComment) => {
  const comment = commentTeamplate.cloneNode(true);
  comment.querySelector('.social__picture').src = userComment.avatar;
  comment.querySelector('.social__text').textContent = userComment.message;

  return comment;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentsFragment.append(renderComment(comment));
  });
  console.log(commentsFragment.length);
  socialComments.append(commentsFragment);

};



const onEscPush = (evt) => {
  if(isEscKey(evt.key)){
    closeBigPicture();
  }
}

const closeBigPicture = (evt) => {
  bigPicture.classList.add('hidden'); 
  bigPictureCancel.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscPush);
  socialComments.innerHTML = '';
  body.classList.remove('modal-open');
}

const showBigPicture = (photo) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  renderComments(photo.comments);

  bigPicture.classList.remove('hidden');

  bigPictureCancel.addEventListener('click', closeBigPicture);

  document.addEventListener('keydown', onEscPush);
};

export { showBigPicture };
