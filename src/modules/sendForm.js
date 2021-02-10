const sendForm = () => {
  const errorMessage = 'ошибка',
    loadMessage = 'идет отправка...',
    successMessage = 'отправлено';

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const clearInput = () => {
    const inputName = document.querySelector('.fio'),
      inputPhone = document.querySelector('.phone');

    inputName.value = '';
    inputPhone.value = '';
  }

  const loadForm = () => {
    const form = document.querySelector('.form'),
      statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.style.color = '#000';

    form.append(statusMessage);

    statusMessage.style.display = 'block';
    statusMessage.textContent = loadMessage;
    clearInput();

    postData(Object.fromEntries(new FormData(form)))
      .then(response => {
        if (response.status !== 200) throw new Error(`Status network ${request.status}`);
        statusMessage.textContent = successMessage;
        setTimeout(() => {
          const modal = document.querySelector('.modal-overlay');
          modal.style.display = 'none';
        }, 3500);
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        setTimeout(() => {
          statusMessage.style.display = 'none';
        },1500);
      });
  }

  document.body.addEventListener('submit', event => {
    event.preventDefault();
    const target = event.target;
    if (target.matches('.form')) {
      loadForm();
    }
  });
};


export default sendForm;