import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateInput = document.querySelector('input[name="state"]:checked');
  
  const delay = parseInt(delayInput.value);

  if (!isNaN(delay) && delay > 0) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (stateInput.value === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise.then(
      delay => iziToast.success({ message: `✅ Fulfilled promise in ${delay}ms` }),
      delay => iziToast.error({ message: `❌ Rejected promise in ${delay}ms` })
    );

    delayInput.value = '';
  } else {
    iziToast.warning({ message: 'Please enter a valid value for delay' });
  }
});