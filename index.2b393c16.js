$(document).ready((function(){$(".hamburger").click((function(){$(this).toggleClass("is-active")})),$(".hamburger").click((function(){$(".mobile-menu").toggleClass("visible"),$("body").toggleClass("noscroll")}))})),$(".container-mobile div").click((function(){$(".container-mobile ul ul").slideUp(),$(".plus",this).html("+"),$(this).next().is(":visible")||($(this).next().slideDown(),$(".plus").html("+"),$(".plus",this).html("-"))})),$("a[data-rel^=lightcase]").lightcase({shrinkFactor:.95,maxWidth:1920,maxHeight:1080,swipe:!0,slideshow:!0}),$('a[href^="#"]').on("click",(function(e){var i=$(this.getAttribute("href"));i.length&&(e.preventDefault(),$("html, body").stop().animate({scrollTop:i.offset().top},1e3))})),function(){"use strict";var e=function(){$(".owl-works").owlCarousel({loop:!0,center:!0,margin:0,responsiveClass:!0,nav:!1,responsive:{0:{items:1,nav:!1},680:{items:2,nav:!1,loop:!1},1e3:{items:3,nav:!0}}}),$(".owl-reviews").owlCarousel({loop:!0,autoplay:1,center:!0,margin:0,responsiveClass:!0,nav:!1,responsive:{0:{items:1,nav:!1},680:{items:2,nav:!1,loop:!1},1e3:{items:3,nav:!0}}})};$,e()}();
//# sourceMappingURL=index.2b393c16.js.map
