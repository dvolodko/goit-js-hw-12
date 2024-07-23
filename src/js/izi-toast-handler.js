import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function emptyQuery() {
  iziToast.error({
    title: 'Oops!',
    message:
      'Sorry, you have to type something in the search field. Please try again!',
    position: 'topRight',
  });
}

function noImagesFound() {
  iziToast.error({
    title: 'Oops!',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

function imagesFound(totalHits) {
  iziToast.success({
    title: 'Hooray!',
    message: `We have found ${totalHits} images for you!`,
    position: 'topRight',
  });
}

function lastPage() {
  iziToast.info({
    title: 'Oops!',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
  });
}

function error(error) {
  iziToast.error({
    title: 'Oops!',
    message: `Sorry, there is some error: ${error}`,
    position: 'topRight',
  });
}

export { emptyQuery, noImagesFound, imagesFound, lastPage, error };
