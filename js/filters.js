import { debounce } from './utils.js';

const PICTURES_COUNT = 15;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filtersList = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');


let pictures = [];
let selectedFilter = Filter.DEFAULT;

const displayFilters = (data) => {
  filtersList.classList.remove('img-filters--inactive');
  pictures = [...data];
};

const discussedSort = (picA, picB) => picB.comments.length - picA.comments.length;
const randomSort = () => {
  for (let i = pictures.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));
    [pictures[i], pictures[j]] = [pictures[j], pictures[i]];

  }
};

const filterPictures = () => {
  switch (selectedFilter) {
    case Filter.DISCUSSED:
      return pictures.sort(discussedSort);

    case Filter.RANDOM:
      return pictures.sort(randomSort).slice(PICTURES_COUNT);

    default:
      return pictures;
  }
};

const removeActiveFilter = () => {
  filterButtons.forEach((element) => {
    if (element.classList.contains('img-filters__button--active')) {
      element.classList.remove('img-filters__button--active');
    }
  });
};

const setOnFilterClick = (cb) => {
  const debounceFilter = debounce(cb);

  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      removeActiveFilter();
      button.classList.add('img-filters__button--active');
      selectedFilter = evt.target.id;
      debounceFilter(filterPictures(PICTURES_COUNT));
    });
  });

};


export { displayFilters, filterPictures, setOnFilterClick };
