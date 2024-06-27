const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', inputHandler);

function inputHandler(e) {
  formData[e.target.name] = e.target.value;
}
