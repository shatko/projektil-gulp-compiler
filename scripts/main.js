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
