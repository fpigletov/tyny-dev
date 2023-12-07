'use strict';

import { header } from './components/header';
import { hero } from './components/hero';
import { speakers } from './components/speakers';
import { contact } from './components/contact';
import { animation } from './components/animation';

window.addEventListener('DOMContentLoaded', () => {

  //Header
  header();

  //Hero
  hero();

  //Speakers
  speakers();

  //Contact
  contact();

  //Animation
  animation();

});