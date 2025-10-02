import $ from 'jquery';
import 'jquery-match-height';

document.addEventListener('DOMContentLoaded', function () {
  $('.icon-wrapper').matchHeight();
  $('.text-title').matchHeight();

  const menuIcon = document.querySelector('#navToggle');
  const nav = document.getElementById('myTopnav');

  document.querySelectorAll('.topnav a:not(.icon)').forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      document.querySelectorAll('.topnav a').forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
      nav.classList.remove('responsive');
    });
  });

  window.addEventListener('resize', () => {
    const nav = document.getElementById('myTopnav');
    if (window.innerWidth > 600 && nav.classList.contains('responsive')) {
      nav.classList.remove('responsive');
    }
  });

  if (menuIcon && nav) {
    menuIcon.addEventListener('click', function () {
      nav.classList.toggle('responsive');
    });
  }

  const animatedElements = document.querySelectorAll('.animate');
  const observerOptions = {
    root: null,
    threshold: 0.2,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.topnav a:not(.icon)');
  const sectionObserverOptions = {
    root: null,
    threshold: 0.5,
  };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const id = entry.target.id;
        const activeLink = document.querySelector(`.topnav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, sectionObserverOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});

window.addEventListener('load', function () {
  document.body.classList.add('page-loaded');
});
