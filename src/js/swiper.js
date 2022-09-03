const swiper = new Swiper('.section__galery', {
  // Optional parameters
  direction: 'horizontal',
  //direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar2',
  },
});
