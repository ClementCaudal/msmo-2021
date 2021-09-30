// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import carousel from './modules/carousel';
import footer from './modules/footer';
import header from './modules/header';

(($) => {
  // When DOM is ready
  $(() => {
    header.init();
    footer.init();

    if ($('.accueil').length) { // Template Accueil
      carousel.init();
    }
  });
})(jQuery);
