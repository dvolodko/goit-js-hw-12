import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value.trim());
  const shouldResolve =
    e.target.elements.state.value === 'fulfilled' ? true : false;
  const promise = promiseGenerator(delay, shouldResolve);
  promise
    .then(value => {
      iziToast.success({
        title: `✅ ${value} promise in ${delay}ms`,
        message: '',
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: `❌ ${error} promise in ${delay}ms`,
        message: '',
        position: 'topRight',
      });
    });
  e.target.reset();
}

function promiseGenerator(delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Resolved');
      } else {
        reject('Rejected');
      }
    }, delay);
  });
}
