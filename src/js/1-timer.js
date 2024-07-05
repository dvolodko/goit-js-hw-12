import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const button = document.querySelector('[data-start]');
const daysNode = document.querySelector('[data-days]');
const hoursNode = document.querySelector('[data-hours]');
const minutesNode = document.querySelector('[data-minutes]');
const secondsNode = document.querySelector('[data-seconds]');

button.addEventListener('click', startButtonHandler);

let userSelectedDate = '';

const flatpickrConfig = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateValidator(selectedDates);
  },
  altInput: true,
  altFormat: 'F j, Y H:i',
  locale: Ukrainian,
};

const iziToastConfig = {
  title: 'Error',
  message: 'Please choose a date in the future',
  position: 'topRight',
};

flatpickr(datetimePicker, flatpickrConfig);

function dateValidator(selectedDates) {
  if (Date.now() < selectedDates[0].getTime()) {
    userSelectedDate = selectedDates[0];
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
    iziToast.error(iziToastConfig);
  }
}

function startButtonHandler() {
  const userSelectedDateInMs = userSelectedDate.getTime();
  button.setAttribute('disabled', '');
  datetimePicker.setAttribute('disabled', '');
  flatpickr(datetimePicker, flatpickrConfig);
  const intervalId = setInterval(() => {
    if (userSelectedDateInMs >= Date.now()) {
      const { days, hours, minutes, seconds } = convertMs(
        userSelectedDateInMs - Date.now()
      );
      daysNode.textContent = days;
      hoursNode.textContent = hours;
      minutesNode.textContent = minutes;
      secondsNode.textContent = seconds;
    } else {
      clearInterval(intervalId);
      datetimePicker.removeAttribute('disabled');
      flatpickr(datetimePicker, flatpickrConfig);
      iziToast.success({
        title: 'Hooray!!!',
        message: 'Your time is up!',
        position: 'center',
      });
    }
  }, 1000);
}
