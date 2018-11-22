/* Developed and copyright by Plutonyx "Janejane Suwanwong" */

// slider
  $slick_slider = $('.slider');
  settings_slider = {
    dots: false,
    arrows: false
    // more settings
  }
  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };
