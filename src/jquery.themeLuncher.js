/*
 * themeLuncher
 * https://github.com/hamendourhani/themeluncher
 *
 * Copyright (c) 2015 hamednourhani
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.themeLuncher = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.themeLuncher = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.themeLuncher.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.themeLuncher.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].themeLuncher = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
