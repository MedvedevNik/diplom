const accordeon = () => {
  const accordeon = document.querySelector('.accordeon'),
    elem = accordeon.querySelectorAll('.element'),
    elemContent = accordeon.querySelectorAll('.element-content');

  const toggleTabContent = index => {
    for (let i = 0; i < elemContent.length; i++) {
      if (index === i) {
        elem[i].classList.add('active');
        elemContent[i].classList.add('active')
      } else {
        elem[i].classList.remove('active');
        elemContent[i].classList.remove('active');
      }
    }
  };

  accordeon.addEventListener('click', event => {
    let target = event.target;

    target = target.closest('.element');

    if (!target.classList.contains('active')) {
      elem.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    } else {
      target.classList.remove('active');
      elemContent.forEach((item,i) =>{
        if(item.classList.contains('active')){
          elemContent[i].classList.remove('active');
        }
      })
    };
  });
};

export default accordeon;