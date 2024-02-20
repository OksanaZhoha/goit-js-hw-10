import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleShowPromise);

function handleShowPromise(evt) {
  evt.preventDefault();
  const delay = formEl.elements.delay.value;
  const radioValue = formEl.elements.state.value;
  function showPromise(time, value) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (value === 'fulfilled') {
          res(time);
        }
        rej(time);
      }, delay);
      formEl.reset();
    });
  }
  showPromise(delay, radioValue)
    .then(positive => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${positive}ms`,
        title: 'OK',
        icon: '',
        backgroundColor: '#59A10D',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        close: false,
        position: 'topRight',
        titleSize: 16,
        messageSize: 16,
      });
    })
    .catch(negative => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${negative}ms`,
        icon: '',
        backgroundColor: '#EF4040',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        close: false,
        position: 'topRight',
        titleSize: 16,
        messageSize: 16,
      });
    });
}
