var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1082,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });



  jQuery(function($) {
    $(window).scroll(function(){
    if($(this).scrollTop()>80){
    $('div.single_card_right_panel').addClass('fixed-on');
    }
    else if ($(this).scrollTop()<80){
    $('div.single_card_right_panel').removeClass('fixed-on');
    }
    });
  });
  jQuery(function($) {
      $(window).scroll(function(){
      if($(this).scrollTop()>80){
      $('div.single_card_left_menu').addClass('fixed-on');
      }
      else if ($(this).scrollTop()<80){
      $('div.single_card_left_menu').removeClass('fixed-on');
      }
      });
  });
  

        