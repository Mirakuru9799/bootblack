$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
  });
  $('.hamburger').click(function () {
    $('.mobile-menu').toggleClass('visible');
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

$('a[data-rel^=lightcase]').lightcase();



