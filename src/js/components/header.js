'use strict';

export function header() {
  const header = document.querySelector('.header');
  const headerLinks = document.querySelectorAll('.header__link');
  const wrapper = document.querySelector('.wrapper');
  const headerRegister = document.querySelector('.header__register-btn');
  const headerSocials = document.querySelector('.header__socials');
  const headerAdaptive = document.querySelector('.header__adaptive');
  const headerActions = document.querySelector('.header__actions');
  const headerBurger = document.querySelector('.header__burger');
  const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';

  let menuTimeline = gsap.timeline();

  function menuActions() {

    menuTimeline.to('.overlay', {
      duration: 1,
      scaleY: 1,
      transformOrigin: 'bottom',
      ease: 'power4.inOut'
    }).to('.overlay', {
      duration: 1,
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'power4.inOut',
      delay: 0.2
    }).to('.header__menu', {
      duration: 1,
      scaleY: 1,
      transformOrigin: 'bottom',
      ease: 'power4.inOut',
    }, '-=1').to('.header__link', {
      y: 0,
      ease: 'power3.out',
      duration: 1.5,
    }).reverse();
  }

  function menuAnimations() {

    menuActions();

    headerBurger.addEventListener('click', () => {

      let ariaLabel = headerBurger.getAttribute('aria-label');
      headerBurger.classList.toggle('active')
      menuTimeline.reversed(!menuTimeline.reversed());

      if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        if (headerBurger.classList.contains('active')) {
          setTimeout(function () {
            document.body.style.paddingRight = scrollWidth;
            header.style.paddingRight = scrollWidth;
            document.body.classList.add('hidden');
          }, 600);
        } else {
          document.body.classList.remove('hidden');
          document.body.style.paddingRight = '';
          header.style.paddingRight = '';
        }
      }

      if (ariaLabel === 'Открыть меню') {
        headerBurger.setAttribute('aria-label', 'Закрыть меню');
      } else {
        headerBurger.setAttribute('aria-label', 'Открыть меню');
      }
    })
  }

  menuAnimations();

  //Dinamic Adaptive
  function dinamicAdaptiv() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    if (viewportWidth <= 768) {
      headerAdaptive.append(headerRegister, headerSocials);
    } else {
      headerActions.prepend(headerRegister, headerSocials);
    }
  }

  function linksAction() {
    headerLinks.forEach(link => {
      link.addEventListener('click', () => {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
        if (viewportWidth <= 992) {
          if (headerBurger.classList.contains('active')) {
            headerBurger.classList.remove('active')
          }
          menuTimeline.reversed(!menuTimeline.reversed());
        }
      });
    });
  }

  window.addEventListener('resize', () => {
    dinamicAdaptiv();
    linksAction();
  });

  window.addEventListener('load', () => {
    dinamicAdaptiv();
    linksAction();
  });


}