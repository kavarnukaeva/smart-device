'use strict';

(function () {
  var ESCAPE_KEY = 27;

  var body = document.querySelector('body');
  var link = document.querySelector('.page-header__order-call');
  var popup = document.querySelector('.modal');
  var close = popup.querySelector('.modal__button-close');
  var name = popup.querySelector('[name=fullname]');

  // var pageHeader = document.querySelector('.page-header');
  // var headerToggle = document.querySelector('.page-header__toggle');
  //
  // pageHeader.classList.remove('page-header--nojs');
  //
  // headerToggle.addEventListener('click', function () {
  //   if (pageHeader.classList.contains('page-header--closed')) {
  //     pageHeader.classList.remove('page-header--closed');
  //     pageHeader.classList.add('page-header--opened');
  //   } else {
  //     pageHeader.classList.add('page-header--closed');
  //     pageHeader.classList.remove('page-header--opened');
  //   }
  // });

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    name.focus();
    body.classList.add('overlay');
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    body.classList.remove('overlay');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE_KEY) {
      evt.preventDefault();
      if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        body.classList.remove('overlay');
      }
    }
  });

  document.addEventListener('click', function (evt) {
    if (!popup.contains(evt.target) && evt.target !== link
    && popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      body.classList.remove('overlay');
    }
  });
})();
