$(document).ready(function() {
    
    $('.js--wp-1').waypoint(function(direction) {
$('.js--wp-1').addClass('animated fadeInUp');
}, {
offset: '50%'
});
$('.animate').waypoint(function(direction) {
$('.animate').addClass('animat fadeInDown');
}, {
offset: '50%'
});
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });

        $('body').scrollspy({ target: '#main-nav' });

    // Smooth Scrolling
    $("#main-nav a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top -90
        }, 800, function () {

          //window.location.hash = hash;
          return false;
        });
      }
    });

    //   $('body').scrollspy({ target: '#main-nav' });

    // // Smooth Scrolling
    // $("#main-nav a").on('click', function (event) {
    //   if (this.hash !== "") {
    //     event.preventDefault();

    //     const hash = this.hash;

    //     $('html, body').animate({
    //       scrollTop: $(hash).offset().top
    //     }, 800, function () {

    //       window.location.hash = hash;
    //     });
    //   }
    // });
    $('.demo').magnificPopup({
type:'image',
delegate:'a',
gallery: {
enabled:true
}
}); 
    $('.popup-youtube').magnificPopup({
    type: 'iframe',
    // other options
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 

        patterns: {
          youtube: {
            index: 'youtube.com/', 

            id: 'v=',

            src: 'https://www.youtube.com/embed/%id%' 
          },


        },

        srcAction: 'iframe_src', 
      }
  });

    
    $('.popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    
    

});