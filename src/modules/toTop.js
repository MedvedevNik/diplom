const toTop = () => {
  const scrollUp = document.querySelector('.up');

  if (scrollUp) {
      scrollUp.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
          });
      });

      window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;

          console.log(scrolled)

          if (scrolled >= 600) {
              scrollUp.style.display = 'block';
          } else {
              scrollUp.style.display = 'none';
          }
      });
  }
};


export default toTop;