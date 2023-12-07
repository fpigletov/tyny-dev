'use strict'

export function animation() {
  gsap.registerPlugin(ScrollTrigger);

  //Start Animation
  let startAnimation = gsap.timeline();

  startAnimation.from('.wrapper', {
    opacity: 0,
    duration: 1
  }).from('.header', {
    opacity: 0,
    y: '-100%',
    duration: 1
  }).from('.hero__content', {
    opacity: 0,
    y: '100%',
    duration: 1
  }).from('.hero__element', {
    opacity: 0,
    x: '100%',
    duration: 1
  }, '-=1').from('.hero__btn', {
    opacity: 0,
    duration: 0.3
  }).from('.hero__text', {
    opacity: 0,
    duration: 0.3
  }).from('.hero__descr', {
    opacity: 0,
    duration: 0.3
  }).from('.hero__arrow', {
    opacity: 0,
    duration: 0.3
  });

  //Arrow Animation
  let arrowAnimation = gsap.timeline();

  arrowAnimation.from('.hero__arrow', {
    duration: 1,
    y: '-50%',
    repeat: -1,
    yoyo: true
  });

  //Speaker Animation
  let speakersAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.main__speakers',
      start: 'top 50%',
      end: 'bottom bottom',
    }
  });

  speakersAnimation.from('.speakers__title span', {
    stagger: 0.1,
    duration: 0.2,
    opacity: 0,
  }).from('.speakers__body', {
    opacity: 0,
    duration: 2
  });

  //Contact Animation
  let contactAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact__form',
      start: 'center',
      end: 'bottom bottom',
    }
  });

  speakersAnimation.from('.contact__title span', {
    stagger: 0.1,
    duration: 0.2,
    opacity: 0,
  }).from('.contact__form', {
    opacity: 0,
    duration: 2
  }).from('.footer__email', {
    opacity: 0,
    y: '100%',
    duration: 0.5
  }, '-=1').from('.footer__phone', {
    opacity: 0,
    y: '100%',
    duration: 0.5
  }, '-=0.5').from('.footer__policy', {
    opacity: 0,
    y: '100%',
    duration: 0.5
  });



}