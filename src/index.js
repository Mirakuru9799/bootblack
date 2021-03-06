$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
  });
  $('.hamburger').click(function () {
    $('.mobile-menu').toggleClass('visible');
    $('body').toggleClass('noscroll');
  });
});

$('.container-mobile div').click(function () {
  //slide up all the link lists
  $('.container-mobile ul ul').slideUp();
  $('.plus', this).html('+');
  //slide down the link list below the h3 clicked - only if its closed
  if (!$(this).next().is(':visible')) {
    $(this).next().slideDown();
    $('.plus').html('+');
    $('.plus', this).html('-');
  }
});

$('a[data-rel^=lightcase]').lightcase({
  shrinkFactor: 0.95,
  maxWidth: 1920,
  maxHeight: 1080,
  swipe: true,
  slideshow: true,
});

$('a[href^="#"]').on('click', function (event) {
  var anchor = $(this.getAttribute('href'));
  if (anchor.length) {
    event.preventDefault();
    $('html, body').stop().animate(
      {
        scrollTop: anchor.offset().top,
      },
      1000
    );
  }
});

(function () {
  'use strict';

  var carousels = function () {
    $('.owl-works').owlCarousel({
      loop: true,
      //autoplay: 1,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
    $('.owl-reviews').owlCarousel({
      loop: true,
      autoplay: 1,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })($);
})();
