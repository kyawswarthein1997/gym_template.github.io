"use strict";

/* Start Toggle menu js*/
$('.nav-toggle').click(function () {
  $(this).toggleClass("is-active");
  $('.menu-toggle').toggleClass('active');
});
/* End toggle menu js */

/* Navigation bar color change */

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar-hotel");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
/* End js of navigation bar color change */

/** Slider nav js */

$('.nav-home').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.banner').offset().top - 60
  }, Number('1500'));
});
$('.nav-about').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.about').offset().top - 60
  }, Number('1500'));
});
$('.nav-classes').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.classes').offset().top - 60
  }, Number('1500'));
});
$('.nav-coaches').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.coahes').offset().top - 60
  }, Number('1500'));
});
$('.nav-pricing').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.pricelist').offset().top - 60
  }, Number('1500'));
});
$('.nav-contact').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.contacts ').offset().top - 60
  }, Number('1500'));
});
$('.a-icon').on('click', function () {
  $('html,body').animate({
    scrollTop: $('.about ').offset().top - 60
  }, Number('1500'));
}); 

// $('#').on('click', function() {
//   $('html,body').animate({
//     scrollTop: $('#').offset().top - 60
//   }, Number('1500'), 'swing');
// });

/** End of Slider nav js */

/* about animation */

$(function () {
  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: true,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    callback: function callback(box) {// the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window

  });
  wow.init();
});
/* end about animation */

/** coaches Slider */

$('.coaches-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
/** End of coaches slider */

/** Pricing Slider */

$('.slider-pricelist').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
/** End of pricing slider */

/** testimonial js */

$('.main-testi-slider').slick();
/** end js of testimonial */

/** scroll to up */

$(".return-to-top").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});
/** end js of scorll up */





