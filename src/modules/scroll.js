const scroll = () => {
  const anchors = document.querySelectorAll('.anchor');

  for (const anchor of anchors) {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  const animateScroll = event => {

    const target = event.target.closest('a[href*="#"]'),
      speed = 1000;


    if (target) {
      const pageY = window.pageYOffset,
        hash = target.href.replace(/[^#]*(.*)/, '$1'),
        distTopPosition = document.querySelector(hash).getBoundingClientRect().top;

      let start = 0;


      const step = time => {
        if (!start) start = time;

        const progress = time - start;

        const r = (distTopPosition < 0 ?
          Math.max(pageY - progress / speed, pageY + distTopPosition) :
          Math.min(pageY + progress / speed, pageY + distTopPosition));

        window.scrollTo(0, r);

        if (r < pageY + distTopPosition) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);

    }
  };

  document.querySelector('.anchor').addEventListener('click', animateScroll);
}


export default scroll;