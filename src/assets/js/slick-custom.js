import $ from 'jquery';
import 'slick-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(document).ready(function () {
  $('.responsive').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1, // scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 0, // no delay between scrolls
    speed: 7000,
    cssEase: 'linear', // makes it smooth
    arrows: false, // hide arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
});
