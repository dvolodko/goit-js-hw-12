import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', submitHandler);

const gallery = document.querySelector('.gallery');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

function submitHandler(e) {
  e.preventDefault();
  const query = e.target.elements.searchField.value.toLowerCase().trim();

  if (!query) {
    iziToast.error({
      title: 'Oops!',
      message:
        'Sorry, you have to type something in the search field. Please try again!',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '<span class="loader"></span>';

  fetchImages(query).then(images => {
    if (images.hits.length === 0) {
      iziToast.error({
        title: 'Oops!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      iziToast.success({
        title: 'Hooray!',
        message: `We have found ${images.hits.length} images for you!`,
        position: 'topRight',
      });
    }

    gallery.innerHTML = '';
    renderImages(images.hits);
    lightBox.refresh();
  });
  form.reset();
}
