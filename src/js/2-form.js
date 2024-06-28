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
    clearFormData();
    populateForm();
    localStorage.removeItem(storageKey);
  } else {
    alert('Fill please all fields');
  }
}

function clearFormData() {
  formData.email = '';
  formData.message = '';
}

function populateFormData() {
  formData.email = localStorageData.email;
  formData.message = localStorageData.message;
}

function populateForm() {
  form[0].value = formData.email;
  form[1].value = formData.message;
}
