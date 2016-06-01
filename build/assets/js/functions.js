$( document ).ready(function() {

var windowW = $(window).width();
//deck animation
//highlights the first card's overlay on scroll
$(window).on('scroll', function(){
  captionPop();
});

$(window).on('resize', function(){
  windowW = $(window).width();
  console.log(windowW);
});

//if screen is large enough to display cards in row  mouseenter/mouseleave controls the caption overlay

if(windowW > 755){
  $('.card-vert, .card-hor').on('mouseenter', function(){
    $(this).find('.caption').animate({
      right: 0,
      opacity: 1
    }, 'fast');

    //if the sample overlay on the active caption is still visible makes it disappear
    if($('#active').hasClass('visible')){
      $('#active').animate({
        right: -500,
        opacity: 0
      }, 'fast');
      $('#active').removeClass('visible');
    }
  });

  $('.caption').on('mouseleave', function(){
    $(this).animate({
      right: -500,
      opacity: 0
    }, 'fast');
  });

//else overlay is controlled by tap (optimized for mobile)

}else{
  $('.card-vert, .card-hor').on('tap', function(){
    console.log('tap card fired');
    var $caption = $(this).find('.caption');

    //remove the sample class to prevent it from interfering with the animation
    $('#active').removeClass('sample');
    //makes the overlay on active disappear
    $('#active').animate({
      right: -500,
      opacity: 0
    },'fast');

    if($caption.hasClass('visible')){
      $caption.animate({
          right: -500,
          opacity: 0
        }, 'fast');
      $caption.removeClass('visible');
    }else {
    $caption.animate({
      right: 0,
      opacity: 1
    },'fast');
    $caption.addClass('visible');
    }
  });
}

function captionPop(){
  var wScroll = $(window).scrollTop();
  if($('section.exploreDeck').offset().top - $(window).height()/3 < wScroll && $('#active').hasClass('sample')){
    $('#active').animate({
      right: 0,
      opacity: 1
    }, 'slow');
    $('#active').addClass('visible');
  }
}

});// document ready
