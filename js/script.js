var firstslider = new Swiper(".firstslider", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var secondslider = new Swiper(".secondslider", {
  slidesPerView: 7,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".second-next",
    prevEl: ".second-prev",
  },
});
