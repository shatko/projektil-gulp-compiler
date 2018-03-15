// Mobile navigation
$('.hamburger').click(function(){
  $('.navigation').removeClass('mobile-nav-invisible');
  $('.navigation').addClass('mobile-nav-visible');
  $(this).addClass('d-none');
});
$('.mobile-x').click(function(){
  $('.navigation').removeClass('mobile-nav-visible');
  $('.navigation').addClass('mobile-nav-invisible');
  $('.hamburger').removeClass('d-none');
});


// index page Slick slider
$('.slider-container').slick({
  nextArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"></button>',
  prevArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>'
});


// index page World Slick slider
$('.world-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"></button>',
  prevArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});


// index page accordion
if ($(window).width() <= 768) {
  $('.accordion-content').removeClass('show');
}
$( window ).resize(function() {
  if ($(window).width() <= 768) {
    $('.accordion-content').removeClass('show');
  } else {
    $('.accordion-content').addClass('show');
  }
});


// history Isotope
$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
