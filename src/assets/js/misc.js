// Import jQuery
import $ from 'jquery';
import 'jquery-match-height';

// Add a body class once page has loaded
(function () {
  // Add a body class once page has loaded
  // Used to add CSS transitions to elems
  // and avoids content shifting during page load
  window.addEventListener('load', function () {
    document.body.classList.add('page-loaded');
  });
})();

// Equal height for elements with class .icon-wrapper and .text-title
document.addEventListener('DOMContentLoaded', function () {
  $('.icon-wrapper').matchHeight();
  $('.text-title').matchHeight();
});

// Navigation active state toggle
document.querySelectorAll('.topnav a:not(.icon)').forEach(function (navItem) {
  navItem.addEventListener('click', function () {
    document.querySelectorAll('.topnav a').forEach(function (item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});
