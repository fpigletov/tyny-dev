'use strict'

export function hero() {
  const heroElement = document.querySelector('.hero__element');
  const heroBody = document.querySelector('.hero__body');
  const heroBtn = document.querySelector('.hero__btn');

  function heroAdaptiv() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    if (viewportWidth <= 480) {
      heroBtn.after(heroElement);
    } else {
      heroBody.append(heroElement);
    }
  }

  window.addEventListener('resize', () => {
    heroAdaptiv();
  });

  window.addEventListener('load', () => {
    heroAdaptiv();
  });
}