const loaderElement = document.querySelector('.loader-element');

function on() {
  loaderElement.insertAdjacentHTML('beforeend', '<span class="loader"></span>');
}

function off() {
  loaderElement.innerHTML = '';
}

export { on, off };
