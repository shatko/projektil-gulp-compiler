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
var $grid = $('.grid').isotope({
  transitionDuration: 500
});
// filter items on button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// Object Fit IE fallback
if('objectFit' in document.documentElement.style === false) {
  var container = document.getElementsByClassName('fit-image-box');
  for(var i = 0; i < container.length; i++) {
    var imageSource = container[i].querySelector('img').src;
    container[i].querySelector('img').style.display = 'none';
    container[i].style.backgroundSize = 'cover';
    container[i].style.backgroundImage = 'url(' + imageSource + ')';
    container[i].style.backgroundPosition = 'center center';
  }
}
