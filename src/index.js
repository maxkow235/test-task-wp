import 'bootstrap';
import './scss/index.scss';
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  centerPadding: '46px',
  slidesPerRow: 3,
  infinite: false,
  arrows: true,
  rows: 2,
  prevArrow: $('.slider-nav__prev'),
  nextArrow: $('.slider-nav__next'),
  appendDots: $('.slider-nav__dots'),
  customPaging: function(slider, i) {
    return `<a>${i}</a>`;
  },
  responsive: [
    {
      breakpoint: 778,
      settings: {
        slidesPerRow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 1,
        centerMode: true,
        arrows: false,
        rows: 1
      }
    }
  ]
});
