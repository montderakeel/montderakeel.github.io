(function () {
  "use strict";

  // Loading section
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 1000);
  });
  
  setTimeout(function () {
    AOS.init();
  }, 2000);

  // Side Navbar
  const SideNaveBtn = document.getElementById("sideNaveBtn"),
    SideNave = document.getElementById("sideNave");

  SideNave.style.right = "-300px";

  // Toggle button click
  SideNaveBtn.onclick = function (event) {
    event.stopPropagation(); 
    if (SideNave.style.right === "-300px") {
      SideNave.style.right = "0px";
    } else {
      SideNave.style.right = "-300px";
    }
  };
  
  document.onclick = function () {
    SideNave.style.right = "-300px";
  };
  SideNave.onclick = function (event) {
    event.stopPropagation();
  };

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
