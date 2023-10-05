import { isEscKey } from './utils.js';


const validateForm = () => {

  const uploadForm = document.querySelector('.img-upload__form');
  const hashTagInput = uploadForm.querySelector('.text__hashtags  ');
  const textArea = document.querySelector('.text__description');

  const onEscPushInput = (evt) => {
    if (isEscKey(evt.key)) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };


  uploadForm.addEventListener('input', () => {


    textArea.addEventListener('keydown', onEscPushInput);
    hashTagInput.addEventListener('keydown', onEscPushInput);

    if (hashTagInput.value !== '') {
      const pristine = new Pristine(uploadForm, {
        classTo: 'input__wrapper',
        errorClass: 'input__wrapper--invalid',
        successClass: 'input__wrapper--valid',
        errorTextParent: 'input__wrapper',
        errorTextTag: 'span',
        errorTextClass: 'form__error'
      });

      const validateTagsQuantity = (value) => {
        const tagsArray = value.toLowerCase().trim().split(/\s/);
        return tagsArray.length <= 5;
      };

      const validateHahTagStart = (value) => {
        const tagsArray = value.toLowerCase().trim().split(/\s/);
        const result = tagsArray.every((elem) => (/^#/.test(elem)));
        return result;

      };

      const validateSpecialSymbols = (value) => {
        const tagsArray = value.toLowerCase().trim().split(/\s/);
        const result = tagsArray.every((elem) => (/[a-zа-яё\s0-9]+$/.test(elem)));
        return result;
      };

      const validateOnlyHashTag = (value) => {
        const tagsArray = value.toLowerCase().trim().split(/\s/);
        const result = tagsArray.every((elem) => (!/^#$/.test(elem)));
        return result;
      };

      const validateMaxLength = (value) => {
        const tagsArray = value.toLowerCase().trim().split(/\s/);
        const result = tagsArray.every((elem) => (!/^#\w{20,}$/.test(elem)));
        return result;
      };

      const validateDublicates = (value) => {
        const tagsArray = value.toLowerCase().trim().split(/\s/);
        const result = tagsArray.filter((number, index, numbers) => numbers.indexOf(number) !== index);
        return (result.length === 0);
      };

      pristine.addValidator(hashTagInput, validateTagsQuantity, 'нельзя указывать больше 5 хэш-тегов');
      pristine.addValidator(hashTagInput, validateHahTagStart, 'каждый хеш-тег должен начинаться с символа #');
      pristine.addValidator(hashTagInput, validateSpecialSymbols, 'хеш-тег должен состоять из букв и чисел');
      pristine.addValidator(hashTagInput, validateOnlyHashTag, 'хеш-тег не может состоять только из одной #');
      pristine.addValidator(hashTagInput, validateMaxLength, 'максимальная длина одного хэш-тега 20 символов, включая решётку');
      pristine.addValidator(hashTagInput, validateDublicates, 'хеш-теги не должны повторяться');
      pristine.validate();
    }

  });
};

export { validateForm };
