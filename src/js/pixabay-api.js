import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderImages } from './render-functions';

const KEY = '32552782-0d4c86680018457e820f20492';
const basicUrl = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: KEY,
    q: toUrlEncoded(query),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
  });
  fetch(`${basicUrl}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Oops!',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      }
      console.log(images.hits);
      renderImages(images.hits);
    })
    .catch(error => console.log(error));
}

function toUrlEncoded(queryToEncode) {
  return queryToEncode.toLowerCase().split(' ').join('+');
}
