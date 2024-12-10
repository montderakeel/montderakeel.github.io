(function () {
  "use strict";

  AOS.init();

  const swiper = new Swiper(".mySwiper", {
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  const lightbox = GLightbox();

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();
