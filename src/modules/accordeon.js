const accordeon = () => {
  const accordeon = document.querySelector('.accordeon'),
    elem = accordeon.querySelectorAll('.element'),
    elemContent = accordeon.querySelectorAll('.element-content');

  const toggleTabContent = index => {
    for (let i = 0; i < elemContent.length; i++) {
      if (index === i) {
        elem[i].classList.add('active');
        elemContent[i].style.display = 'block';
      } else {
        elem[i].classList.remove('active');
        elemContent[i].style.display = 'none';
      }
    }
  };

  accordeon.addEventListener('click', event => {
    let target = event.target;

    target = target.closest('.element');

      elem.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    });
};

export default accordeon;