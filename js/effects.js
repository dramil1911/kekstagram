const effectsSlider = document.querySelector('.effect-level__slider');
const scaleValue = document.querySelector('.scale__control--value');
const effectsList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview > img');
const effectsSliderInput = document.querySelector('.img-upload__effect-level ');
const effectLevel = document.querySelector('.effect-level__value');

effectsSliderInput.classList.add('hidden');

const imageScale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

noUiSlider.create(effectsSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      } else {
        return value.toFixed(1);
      }
    },

    from: function (value) {
      return parseFloat(value);
    }
  }
});

const updateEffectsProperties = () => {
  if (currentEffect.name === DEFAULT_EFFECT.name) {
    effectsSliderInput.classList.add('hidden');
  }

  effectsSlider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });
};

const cahngeEffects = (evt) => {
  effectsSliderInput.classList.remove('hidden');
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateEffectsProperties();
};

const updateEffects = () => {
  image.style.filter = 'none';
  image.className = '';
  currentEffect.value = '';
  if (isDefault()) {
    return;
  }


  const value = effectsSlider.noUiSlider.get();
  image.classList.add(`effects__preview--${currentEffect.name}`);
  image.style.filter = `${currentEffect.style}(${value}${currentEffect.unit})`;
  effectLevel.value = value;
};

const resetImageEffects = () => {
  effectsSlider.noUiSlider.reset();
  image.style.filter = 'none';
  image.className = '';
  effectsSliderInput.classList.add('hidden');
};

effectsList.addEventListener('change', cahngeEffects);
effectsSlider.noUiSlider.on('update', updateEffects);

const onZommClick = (evt) => {
  let scale = parseInt(scaleValue.value, 10);
  if (evt.target.classList.contains('scale__control--smaller')) {
    scale = scale - imageScale.STEP;
    if (scale <= imageScale.MIN) {
      scale = imageScale.MIN;
    }
  } else {
    scale = scale + imageScale.STEP;
    if (scale >= imageScale.MAX) {
      scale = imageScale.MAX;
    }
  }
  image.style.transform = `scale( ${scale / 100} )`;
  scaleValue.value = scale;
};

export { resetImageEffects, onZommClick };
