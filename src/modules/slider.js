const slider = () => {
  const slide = document.querySelectorAll('.item'),
    slider = document.querySelector('.top-slider');

  let currentSlide = 0,
    interval;

  const addDot = () => {
    const slickDots = document.querySelector('.slick-dots');

    slide.forEach(() => {
      const dot = document.createElement('li');
      dot.classList.add('dot');
      slickDots.append(dot);
    });
    slickDots.children[0].classList.add('slick-active');
  };

  addDot();

  const dots = document.querySelectorAll('.dot');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'relative');
    prevSlide(dots, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'relative');
    nextSlide(dots, currentSlide, 'slick-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'relative');
    prevSlide(dots, currentSlide, 'slick-active');

    if (target.matches('.dot')) {
      dots.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }


    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'relative');
    nextSlide(dots, currentSlide, 'slick-active');

  });

  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(5000);
};

export default slider;