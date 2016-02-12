/**
 * toFullScreen.js is a jQuery plugin intended to render fullscreen an element with respect to it's original ratio (it could be an image, a video, an iframe...).
 * Copyright (c) 2016 Francois Versepuy; Licensed MIT
 * https://github.com/fversepuy/toFullScreen.js
 */

(function( $ ) {

  var setElementInitialCss = function (element) {
    element.css({
      "position": "absolute"
    });
  };

  $.fn.toFullScreen = function (options){
    return this.each(function (){
      var $win = $(window),
        $element = $(this),
        win_width = $win.width(),
        win_height = $win.height(),
        win_ratio = win_width / win_height,
        element_width = $element.width(),
        element_height = $element.height(),
        element_ratio = element_width / element_height,
        settings = $.extend({
          minMargin: 0, /* minimum margins around the element (can be more due to preservation of the original ratio) */
          coeff: 1, /* by default the element will occupy the max it can (minus the margins), with respect to it's original ratio. But it you prefer it to be only, let's say 90%, just set the coeff to 0.9 */
        }, options),
        coeff = settings.coeff,
        minMargins = settings.minMargin*2;

      setElementInitialCss($element);
      setElementSizeAndPosition();

      $win.on("resize", function(){
        win_width = $win.width();
        win_height = $win.height();
        win_ratio = win_width / win_height;
        setElementSizeAndPosition();
      });

      function setElementSizeAndPosition() {
        // let's calculate the width and height of our element
        if (win_ratio > element_ratio) {
          $element.height((win_height - minMargins) * coeff);
          $element.width((win_height - minMargins) * element_ratio * coeff);
        }
        else {
          $element.width((win_width - minMargins) * coeff);
          $element.height((win_width - minMargins) / element_ratio * coeff);
        }
        // let's center the element
        $element.css('left', (win_width - $element.width()) / 2);
        $element.css('top', (win_height - $element.height()) / 2);
      }
    });
  };
})( jQuery );
