// import { getRandomPositiveNumber } from './utils.js';

// // const GENERATED_OBJECT_QANTITY = 25;
// // const MIN_PHOTO_LIKES = 15;
// // const MAX_PHOTO_LIKES = 200;
// // const MIN_COMMENT_ID = 100;
// // const MIN_AVATAR_ID = 1;
// // const MAX_AVATAR_ID = 6;
// // const COMMENTS_QUANTITY_MIN = 1;
// // const COMMENTS_QUANTITY_MAX = 10;

// // const usersNames = [
// //   'Андрей',
// //   'Бэлла',
// //   'Виктор',
// //   'Галина',
// //   'Дмитрий',
// //   'Екатерина'
// // ];

// // const commentMessages = [
// //   'Всё отлично!',
// //   'В целом всё неплохо.Но не всё.',
// //   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
// //   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
// //   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
// //   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

// // ];

// // const generateId = (id = 1) => {
// //   let lastId = id;
// //   return function () {
// //     return lastId++;
// //   };
// // };

// // const generatePhotoId = generateId();
// // const generatePhotoUrl = generateId();
// // const generateCommentId = generateId(MIN_COMMENT_ID);

// // const createPhotoComment = () => ({
// //   id: generateCommentId(),
// //   avatar: `img/avatar-${getRandomPositiveNumber(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
// //   message: commentMessages[getRandomPositiveNumber(0, commentMessages.length - 1)],
// //   name: usersNames[getRandomPositiveNumber(0, usersNames.length - 1)],
// // });

// const createPhotoElement = () => ({
//   id: generatePhotoId(),
//   url: `photos/${generatePhotoUrl()}.jpg`,
//   description: 'Описание фото',
//   likes: getRandomPositiveNumber(MIN_PHOTO_LIKES, MAX_PHOTO_LIKES),
//   comments: Array.from({ length: getRandomPositiveNumber(COMMENTS_QUANTITY_MIN, COMMENTS_QUANTITY_MAX) }, createPhotoComment),
// });

// const photosData = () => Array.from({ length: GENERATED_OBJECT_QANTITY }, createPhotoElement);

// export { photosData };
