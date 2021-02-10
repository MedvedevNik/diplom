const falidation = () => {

  document.body.addEventListener('input', event => {

    const target = event.target;

    if (target.name === 'fio') {
      target.setAttribute('pattern', '[А-ЯЁ]{1}[а-яё]{1,49}');
      target.setAttribute('maxlength', 50);
      target.value = target.value.replace(/[^А-Яёа-яё ]/gi, '');
    }
  });
};

export default falidation;
