$( document ).ready(function() {
//deck animation
//highlights the first card's overlay on scroll
$(window).on('scroll', function(){
  console.log('windowScroll fired');
  captionPop();
});
//removes overlay, so standard animation cna kick in
  $('.standard, #active').on('mouseenter touch', function(){
    $('#active').removeClass('show');
  });
  
  $('#high').on('blur', function(){
      removeClass('show');
  });

  function captionPop(){
    console.log('captionPop fired');
    var wScroll = $(window).scrollTop();
    if($('section.exploreDeck').offset().top - $(window).height()/3 < wScroll){
      console.log('adding class');
      $('#active').addClass('show');
    }
  }



});
