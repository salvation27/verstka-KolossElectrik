
$('.responsive').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
});


$('.brend').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Material Select Initialization
$(document).ready(function() {
$('.mdb-select').materialSelect();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:true,
    navText : ["",""],
    items:3,
//     autoplay:true,
// autoplayTimeout:3000,
// autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1100:{
            items:3
        },
    }
})  


var num = 700; //number of pixels before modifying styles
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > num) {
    $('.nav').addClass('fixed');
  } else {
    $('.nav').removeClass('fixed');
  }
});

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();



$(document).ready(function() {
  
  $('.burger_test').click(function() {
    $('.brger_menu').toggleClass('vis');
  });
});

$('.clik').click(function(){
   document.getElementById('ham').click();
});


// для  модального окна бутстрапа убирает скролл
$("#myModal").on("show", function () {
   $("body").addClass("modal-open");
}).on("hidden", function () {
   $("body").removeClass("modal-open")
});




