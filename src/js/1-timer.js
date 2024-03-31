import flatpickr from "flatpickr";
import iziToast from "izitoast";

import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

document.addEventListener("DOMContentLoaded", () => {
  const datetimePicker = document.getElementById("datetime-picker");
  const startTimerBtn = document.getElementById("start-timer");

  const currentDate = new Date();
  const selectedDate = new Date(datetimePicker.value);
  if (selectedDate > currentDate) {
    startTimerBtn.disabled = false;
  } else {
    startTimerBtn.disabled = true;
  }

  flatpickr(datetimePicker, {
    enableTime: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate > new Date()) {
        startTimerBtn.disabled = false;
      } else {
        iziToast.error({
          title: "Error",
          message: "Please choose a date in the future",
        });
        startTimerBtn.disabled = true;
      }
    },
  });

  startTimerBtn.addEventListener("click", () => {
    const selectedDate = new Date(datetimePicker.value);
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const difference = selectedDate - currentDate;

      if (difference <= 0) {
        clearInterval(countdownInterval);
        iziToast.success({
          title: "Success",
          message: "Countdown Timer Finished",
        });
        iziToast.info({
          title: "Info",
          message: "Please reload the page to restart the timer.",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.querySelector("[data-days]").textContent = addLeadingZero(days);
      document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
      document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
      document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
    }, 1000);

    startTimerBtn.disabled = true;
    datetimePicker.disabled = true;
  });
});