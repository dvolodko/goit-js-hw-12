import { fetchImages } from './js/pixabay-api';

const form = document.querySelector('.form');
form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  fetchImages(e.target.elements.searchField.value);
  form.reset();
}
