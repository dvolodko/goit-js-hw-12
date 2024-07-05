const formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const localStorageData = JSON.parse(localStorage.getItem(storageKey));

if (localStorageData) {
  populateFormData();
}

populateForm();

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);

function inputHandler(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function submitHandler(e) {
  e.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    form.reset();
    clearFormData();
    localStorage.removeItem(storageKey);
  } else {
    alert('Fill please all fields');
  }
}

function populateFormData() {
  formData.email = localStorageData.email;
  formData.message = localStorageData.message;
}

function clearFormData() {
  formData.email = '';
  formData.message = '';
}

function populateForm() {
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
