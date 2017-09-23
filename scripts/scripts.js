  $(document).ready(function(){

    var mixer = mixitup('.gallery-container',
    {
        "animation": {
            "duration": 250,
            "nudge": false,
            "reverseOut": false,
            "effects": "fade scale(0.01)"
        },
        load: {
            filter: '.garden'
        }
    });

    $('.more').click(function(){
      $('.gallery-photos').addClass('gallery-photos-more');
    });


      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          responsive:{
              0:{
                dots:true,
                  items:1,
              }
          }
      });

$('a[href*="#"]:not([href="#"])').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 600);
  }
});

function waypoint_photo(){
  $('#photo-waypoint').waypoint(function(direction) {
    $('#photo-waypoint').addClass('animated zoomIn');
  }, {
    offset: '100%'
  });}

function waypoint_info(){
  $('#info-waypoint').waypoint(function(direction) {
    $('#info-waypoint').addClass('animated slideInLeft');
  }, {
    offset: '100%'
  });}

function waypoint_conveniances(){
  $('#conveniances-waypoint').waypoint(function(direction) {
    $('#conveniances-waypoint').addClass('animated slideInRight');
  }, {
    offset: '100%'
  });}

function waypoint_gallery(){
  $('#gallery-waypoint').waypoint(function(direction) {
  	$('#gallery-waypoint').addClass('animated zoomIn');
  }, {
  	offset: '100%'
  });}

function waypoint_karnity(){
	$('#karnity-waypoint').waypoint(function(direction) {
		$('#karnity-waypoint').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});}

function waypoint_murawki(){
	$('#murawki-waypoint').waypoint(function(direction) {
  	$('#murawki-waypoint').addClass('animated fadeInRight');
  }, {
		offset: '100%'
	});}

function waypoint_contact(){
	$('.contact-waypoint').waypoint(function(direction) {
  	$('.contact-waypoint').addClass('animated slideInLeft');
  }, {
  	offset: '100%'
  });}

waypoint_info();
waypoint_photo();
waypoint_conveniances();
waypoint_gallery();
waypoint_karnity();
waypoint_murawki();
waypoint_contact();


});
