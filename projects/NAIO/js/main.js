(function () {
  "use strict";

  // Loading section
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
    }, 1000);
  });

  // Side Navbar
  const SideNaveBtn = document.getElementById("sideNaveBtn"),
    SideNave = document.getElementById("sideNave");

  // Initially hide the side navigation
  SideNave.style.right = "-240px"; // Start off-screen

  // Toggle button click
  SideNaveBtn.onclick = function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    if (SideNave.style.right === "-240px") {
      // Show side navigation
      SideNave.style.right = "0px";
    } else {
      // Hide side navigation
      SideNave.style.right = "-240px";
    }
  };

  // Close side navigation when clicking outside
  document.onclick = function () {
    SideNave.style.right = "-240px"; // Hide the side navigation
  };

  // Prevent closing when clicking inside the side navigation
  SideNave.onclick = function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
  };

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
