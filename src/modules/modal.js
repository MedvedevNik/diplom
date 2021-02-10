const toggleModal = () => {
  const callbackBtn = document.querySelectorAll('.callback-btn'),
      modalOverlay = document.querySelector('.modal-overlay'),
      modalCallback = document.querySelector('.modal-callback');

  callbackBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      modalOverlay.style.display = 'block';
      modalCallback.style.display = 'block';
    });
  });

  

  modalOverlay.addEventListener('click', event => {
    let target = event.target;

    if (target.closest('.modal-close')) {
      modalOverlay.style.display = 'none';
    } else {
      target = target.closest('.modal-callback');

      if (!target) {
        modalOverlay.style.display = 'none';
      }
    }
  });
};

export default toggleModal;