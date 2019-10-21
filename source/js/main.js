'use strict';

(function () {
  var ESCAPE_KEY = 27;

  var body = document.querySelector('body');
  var link = document.querySelector('.page-header__order-call');
  var popup = document.querySelector('.modal');
  var close = popup.querySelector('.modal__button-close');
  var name = popup.querySelector('[name=fullname]');
  var form = popup.querySelector('form');
  var inputs = form.querySelectorAll('.feedback__item-fields');
  var toggles = document.querySelectorAll('.accordeon__button');
  var scrollLink = document.querySelector('.page-header__scroll');
  var advantages = document.querySelector('#advantages-section');
  var storage = localStorage || null;
  var formData = {};

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

  form.addEventListener('submit', function () {
    inputs.forEach(function (input) {
      formData[input.name] = input.value;
    });

    storage.setItem('userData', JSON.stringify(formData));
  });

  if (storage) {
    var userData = storage.getItem('userData');
    var parsedUserData = JSON.parse(userData);

    inputs.forEach(function (input) {
      input.value = parsedUserData[input.name];
    });
  }

  [].forEach.call(toggles, function (toggle) {
    toggle.addEventListener('click', function () {
      var item = toggle.closest('.accordeon__item');

      if (item.classList.contains('accordeon__item--opened')) {
        item.classList.remove('accordeon__item--opened');
      } else {
        item.classList.add('accordeon__item--opened');
      }
    });
  });

  var scrollTo = function (element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  };

  scrollLink.addEventListener('click', function () {
    scrollTo(advantages);
  });
})();
