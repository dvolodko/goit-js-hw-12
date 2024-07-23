import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import * as iziToast from './js/izi-toast-handler';
import * as loader from './js/loader-handler';

const form = document.querySelector('.form');
form.addEventListener('submit', submitHandler);

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.js-load-more');
loadMoreBtn.addEventListener('click', loadMoreHandler);

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

let query = '';
let page = 1;

async function submitHandler(e) {
  e.preventDefault();
  resetGallery();
  query = e.target.elements.searchField.value.toLowerCase().trim();

  if (!query) {
    iziToast.emptyQuery();
    return;
  }

  loader.on();

  try {
    const images = await fetchImages(query, page);
    if (images.hits.length === 0) {
      iziToast.noImagesFound();
      loader.off();
    } else {
      iziToast.imagesFound(images.totalHits);
      imagesHandler(images);
    }
  } catch (error) {
    iziToast.error(error);
    loader.off();
  }

  form.reset();
}

async function loadMoreHandler() {
  loader.on();

  try {
    const images = await fetchImages(query, page);
    imagesHandler(images);
    scrollByTwoItems();
  } catch (error) {
    iziToast.error(error);
    loader.off();
  }
}

async function imagesHandler(images) {
  loader.off();
  renderImages(images.hits);
  lightBox.refresh();
  const totalPages = Math.ceil(images.totalHits / 15);
  page += 1;
  if (page > totalPages) {
    iziToast.lastPage();
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

function resetGallery() {
  page = 1;
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('hidden');
}

function scrollByTwoItems() {
  const itemHeight = gallery
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: itemHeight * 2,
    behavior: 'smooth',
  });
}
