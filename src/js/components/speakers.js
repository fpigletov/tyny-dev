'use strict'

export function speakers() {
  if (document.querySelector('.speakers__slider')) {
    new Swiper('.speakers__slider', {
      slidesPerView: 2,
      spaceBetween: 42,
      speed: 800,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.speakers__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.speakers__arrow--next',
        prevEl: '.speakers__arrow--prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            el: '.speakers__pagination',
            clickable: true,
            dynamicBullets: true,
          },
          spaceBetween: 0,
        },
        450: {
          slidesPerView: 1.4,
          spaceBetween: 20,
          pagination: {
            el: '.speakers__pagination',
            clickable: true,
            dynamicBullets: true,
          },
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 38,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 42,
        }
      },

    });
  }
}

