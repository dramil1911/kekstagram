import { isEscKey } from './utils.js';
import './effects.js';

const COMMENT_ELEMENT_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const socialComments = document.querySelector('.social__comments');
const commentTeamplate = document.querySelector('#comment').content.querySelector('.social__comment');
const socialCommntsCounter = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');


commentsLoader.classList.add('hidden');

const renderComment = (userComment) => {
  const comment = commentTeamplate.cloneNode(true);
  comment.querySelector('.social__picture').src = userComment.avatar;
  comment.querySelector('.social__text').textContent = userComment.message;

  return comment;
};

let commentsBlockLength = COMMENT_ELEMENT_COUNT;

const renderComments = (comments) => {

  const commentsBlock = (comments.length < commentsBlockLength) ? comments.length : commentsBlockLength;

  socialComments.innerHTML = '';
  const onCommentLoaderClick = () => {
    renderComments(comments);
  };

  socialCommntsCounter.textContent = `${commentsBlock} из ${comments.length} комментариев`;

  const loadComments = comments.slice(0, commentsBlock);
  const commentsFragment = document.createDocumentFragment();
  loadComments.forEach((comment) => {
    commentsFragment.append(renderComment(comment));
  });
  socialComments.append(commentsFragment);

  if (comments.length > commentsBlockLength && loadComments.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsBlockLength += COMMENT_ELEMENT_COUNT;
    commentsLoader.addEventListener('click', onCommentLoaderClick, { once: true });

  } else {
    commentsLoader.classList.add('hidden');
  }

};

const onEscPush = (evt) => {
  if (isEscKey(evt.key)) {
    closeBigPicture();
  }
};


function closeBigPicture() {
  bigPicture.classList.add('hidden');
  bigPictureCancel.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscPush);
  socialComments.innerHTML = '';
  body.classList.remove('modal-open');
  commentsBlockLength = COMMENT_ELEMENT_COUNT;
}

const showBigPicture = (photo) => {
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img > img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  renderComments(photo.comments);

  bigPicture.classList.remove('hidden');

  bigPictureCancel.addEventListener('click', closeBigPicture);

  document.addEventListener('keydown', onEscPush);

};

export { showBigPicture };
