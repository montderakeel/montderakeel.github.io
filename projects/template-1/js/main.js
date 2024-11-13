
(function() {
  "use strict";
  const title = document.querySelector('.hiro .contant .auto-type');
  const typed = new Typed(title, {
    strings: ['First sentence.', '&amp; a second sentence.'],
    typeSpeed: 100,
    loop: true,
  });

  document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        document.body.classList.add('loaded');
      }, 2000);
  });

  AOS.init();
  
  const lightbox = GLightbox();

  const swiper = new Swiper(".mySwiper", {
    speed: 500,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
  
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  
})();