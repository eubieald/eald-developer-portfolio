import $ from 'jquery';
import 'slick-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(document).ready(function () {
  $('.responsive').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    draggable: false,
    touchMove: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(window).on('resize', function () {
    $('.responsive').slick('slickPlay');
  });
});
