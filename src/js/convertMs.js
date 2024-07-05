export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  const formattedDays = formatDate(days);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  const formattedHours = formatDate(hours);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const formattedMinutes = formatDate(minutes);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  const formattedSeconds = formatDate(seconds);

  return {
    days: formattedDays,
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
  };
}

function formatDate(number) {
  return number.toString().padStart(2, '0');
}
