export { validityUploadForm }

const inputHastag = document.querySelector('.text__hashtags');

const validityUploadForm = () => {

    inputHastag.addEventListener('input', () => {

        inputHastag.setCustomValidity('');
        const inputHastagText = inputHastag.value.toLowerCase().trim();
        const hashtagArray = inputHastagText.split(/\s/);

        //проверяем количество хештегов
        if (hashtagArray.length > 5) {
            inputHastag.setCustomValidity('Можно вводить не более 5 хештегов');
        };

        const startHahTag = (elem) => {
            return !(/#\w+/.test(elem));
        };

        if (hashtagArray.some(startHahTag)) {
            inputHastag.setCustomValidity('хэш-тег начинается с символа # (решётка)');
        };

        const onlyHashTag = (elem) => {
            return (/^#$/.test(elem));
        };

        if (hashtagArray.some(onlyHashTag)) {
            inputHastag.setCustomValidity('хеш-тег не может состоять только из одной решётки');
        };

        const maxSymbols = (elem) => {
            return (/^#\w{20,}$/.test(elem));
        };

        if (hashtagArray.some(maxSymbols)) {
            inputHastag.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
        };

        const isMultipleHahTag = (elem) => {
            return (/#\w+#\w+/.test(elem));
        };

        if (hashtagArray.some(isMultipleHahTag)) {
            inputHastag.setCustomValidity('##');
        };

        const isReapitingHashtag = hashtagArray.some((item, i, arr) => {
            return arr.indexOf(item, i + 1);
        })

        if (isReapitingHashtag) {
            inputHastag.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
        };

    })
}