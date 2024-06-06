const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    rewind: true,
    grabCursor: 'true',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });