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

// quick search regex
var qsRegex;
var buttonFilter;
var filterValue;
var $selects = $('#form-ui select');
var $checkboxes = $('#form-ui input');
var filterCheckbox;



// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  filter: function() {
    var $this = $(this);
    var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
    var selectResult = filterValue ? $this.is(filterValue) : true;
    return buttonResult && selectResult;
  }
});

// BBUTTONS
$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  console.log(buttonFilter);
  $grid.isotope();
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout( delayed, threshold || 100 );
  };
}
