(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    "use strict";

    var _footer = _interopRequireDefault(require("./modules/footer"));

    var _header = _interopRequireDefault(require("./modules/header"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    } // You can write a call and import your functions in this file.
    //
    // This file will be compiled into app.js and will not be minified.
    // Feel free with using ES6 here.


    (function ($) {
      // When DOM is ready
      $(function () {
        _header["default"].init();

        _footer["default"].init();
      });
    })(jQuery);
  }, {
    "./modules/footer": 2,
    "./modules/header": 3
  }],
  2: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0; // This is an examples of simple export.
    //
    // You can remove or add your own function in this file.
    // import '../../../node_modules/leaflet';

    var footer = function () {
      var init = function init() {
        var map = L.map('map').setView([47.871575, 0.323976], 15);
        var marker = L.icon({
          iconUrl: 'content/themes/msmo/assets/images/icons/marker-icon.png',
          shadowUrl: 'content/themes/msmo/assets/images/icons/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [0, -50],
          shadowSize: [41, 41],
          shadowAnchor: [12, 41]
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([47.871575, 0.323976], {
          icon: marker
        }).addTo(map).bindPopup('Complexe sportif Serge SOUALLE').openPopup();
      };

      return {
        init: init
      };
    }();

    var _default = footer;
    exports["default"] = _default;
  }, {}],
  3: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0; // This is an examples of simple export.
    //
    // You can remove or add your own function in this file.

    var header = function () {
      var init = function init() {
        if ($(document).scrollTop() >= 100) {
          $('.menu-navbar').addClass('scroll-active');
          $('.menu-header').addClass('scroll-active');
          $('.logo-large').addClass('hidden');
          $('.logo-small').removeClass('hidden');
        } else {
          $('.menu-navbar').removeClass('scroll-active');
          $('.menu-header').removeClass('scroll-active');
          $('.logo-large').removeClass('hidden');
          $('.logo-small').addClass('hidden');
        }

        $('.menu-item').mouseenter(function (event) {
          $('.menu-navbar').show();
          $('.content-menu-navbar').hide();
          var idItem = $(event.currentTarget).attr('id');

          switch (idItem) {
            case 'menu_item_club':
              $('#menu_navbar_club').show();
              break;

            case 'menu_item_teams':
              $('#menu_navbar_teams').show();
              break;

            case 'menu_item_plannings':
              $('#menu_navbar_plannings').show();
              break;

            case 'menu_item_infos':
              $('#menu_navbar_infos').show();
              break;

            case 'menu_item_events':
              $('#menu_navbar_events').show();
              break;

            default:
              break;
          }
        });
        $('.menu-navbar').mouseleave(function () {
          $('.menu-navbar').hide();
          $('.content-menu-navbar').hide();
        });
      };

      return {
        init: init
      };
    }();

    var _default = header;
    exports["default"] = _default;
  }, {}]
}, {}, [1]);

},{"./modules/footer":2,"./modules/header":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// This is an examples of simple export.
//
// You can remove or add your own function in this file.
var footer = function () {
  var init = function init() {
    var map = L.map('map').setView([47.871575, 0.323976], 15);
    var marker = L.icon({
      iconUrl: 'content/themes/msmo/assets/images/icons/marker-icon.png',
      shadowUrl: 'content/themes/msmo/assets/images/icons/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -50],
      shadowSize: [41, 41],
      shadowAnchor: [12, 41]
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([47.871575, 0.323976], {
      icon: marker
    }).addTo(map).bindPopup('Complexe sportif Serge SOUALLE').openPopup();
  };

  return {
    init: init
  };
}();

var _default = footer;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// This is an examples of simple export.
//
// You can remove or add your own function in this file.
var header = function () {
  var init = function init() {
    if ($(document).scrollTop() >= 100) {
      $('.menu-navbar').addClass('scroll-active');
      $('.menu-header').addClass('scroll-active');
      $('.logo-large').addClass('hidden');
      $('.logo-small').removeClass('hidden');
    } else {
      $('.menu-navbar').removeClass('scroll-active');
      $('.menu-header').removeClass('scroll-active');
      $('.logo-large').removeClass('hidden');
      $('.logo-small').addClass('hidden');
    }

    $('.menu-item').mouseenter(function (event) {
      $('.menu-navbar').show();
      $('.content-menu-navbar').hide();
      var idItem = $(event.currentTarget).attr('id');

      switch (idItem) {
        case 'menu_item_club':
          $('#menu_navbar_club').show();
          break;

        case 'menu_item_teams':
          $('#menu_navbar_teams').show();
          break;

        case 'menu_item_plannings':
          $('#menu_navbar_plannings').show();
          break;

        case 'menu_item_infos':
          $('#menu_navbar_infos').show();
          break;

        case 'menu_item_events':
          $('#menu_navbar_events').show();
          break;

        default:
          break;
      }
    });
    $('.menu-navbar').mouseleave(function () {
      $('.menu-navbar').hide();
      $('.content-menu-navbar').hide();
    });
  };

  return {
    init: init
  };
}();

var _default = header;
exports["default"] = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9qcy9hcHAuanMiLCJzcmMvanMvc3JjL2pzL21vZHVsZXMvZm9vdGVyLmpzIiwic3JjL2pzL3NyYy9qcy9tb2R1bGVzL2hlYWRlci5qcyIsInNyYy9qcy9tb2R1bGVzL2Zvb3Rlci5qcyIsInNyYy9qcy9tb2R1bGVzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQSxZQUFBO0FBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUE7QUFBQSxhQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO0FBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUFBLFlBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFBQSxjQUFBLENBQUEsR0FBQSxjQUFBLE9BQUEsT0FBQSxJQUFBLE9BQUE7QUFBQSxjQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7QUFBQSxjQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUE7QUFBQSxjQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsR0FBQSxDQUFBO0FBQUEsZ0JBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxrQkFBQSxFQUFBLENBQUE7QUFBQTs7QUFBQSxZQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUE7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUFBLFNBQUE7QUFBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBLEVBQUE7QUFBQSxjQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtBQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsT0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQTs7QUFBQSxhQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBO0FBQUE7O0FBQUEsU0FBQSxJQUFBLENBQUEsR0FBQSxjQUFBLE9BQUEsT0FBQSxJQUFBLE9BQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsRUFBQTtBQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUFBOztBQUFBLFdBQUEsQ0FBQTtBQUFBOztBQUFBLFNBQUEsQ0FBQTtBQUFBLENBQUEsSUFBQTtBQUFBLEtBQUEsQ0FBQSxVQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBOzs7QUNLQSxRQUFBLE9BQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUE7O0FBQ0EsUUFBQSxPQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBOzs7Ozs7S0ROQSxDQUFBO0FDQ0E7QUFDQTtBQUNBOzs7QUFLQSxLQUFDLFVBQUEsQ0FBQSxFQUFPO0FBQ0o7QUFDQSxNQUFBLENBQUMsQ0FBQyxZQUFNO0FBQ0osUUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsSUFBQTs7QUFDQSxRQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBO0FBRkosT0FBQyxDQUFEO0FBRkosS0FBQSxFQUFBLE1BQUE7R0RSQSxFOzs7R0FBQSxDQUFBOzs7Ozs7O2lDRUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFFBQU0sTUFBTSxHQUFJLFlBQU07QUFFbEIsVUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFPLEdBQU07QUFDZixZQUFNLEdBQUcsR0FBRyxDQUFDLENBQUQsR0FBQSxDQUFBLEtBQUEsRUFBQSxPQUFBLENBQXFCLENBQUEsU0FBQSxFQUFyQixRQUFxQixDQUFyQixFQUFaLEVBQVksQ0FBWjtBQUNBLFlBQU0sTUFBTSxHQUFHLENBQUMsQ0FBRCxJQUFBLENBQU87QUFDbEIsVUFBQSxPQUFPLEVBRFcseURBQUE7QUFFbEIsVUFBQSxTQUFTLEVBRlMsMkRBQUE7QUFHbEIsVUFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFBLEVBSFEsRUFHUixDQUhRO0FBSWxCLFVBQUEsVUFBVSxFQUFFLENBQUEsRUFBQSxFQUpNLEVBSU4sQ0FKTTtBQUtsQixVQUFBLFdBQVcsRUFBRSxDQUFBLENBQUEsRUFBSSxDQUxDLEVBS0wsQ0FMSztBQU1sQixVQUFBLFVBQVUsRUFBRSxDQUFBLEVBQUEsRUFOTSxFQU1OLENBTk07QUFPbEIsVUFBQSxZQUFZLEVBQUUsQ0FBQSxFQUFBLEVBQUEsRUFBQTtBQVBJLFNBQVAsQ0FBZjtBQVVBLFFBQUEsQ0FBQyxDQUFELFNBQUEsQ0FBQSxvREFBQSxFQUFrRTtBQUM5RCxVQUFBLFdBQVcsRUFBRTtBQURpRCxTQUFsRSxFQUFBLEtBQUEsQ0FBQSxHQUFBO0FBSUEsUUFBQSxDQUFDLENBQUQsTUFBQSxDQUFTLENBQUEsU0FBQSxFQUFULFFBQVMsQ0FBVCxFQUFnQztBQUFFLFVBQUEsSUFBSSxFQUFFO0FBQVIsU0FBaEMsRUFBQSxLQUFBLENBQUEsR0FBQSxFQUFBLFNBQUEsQ0FBQSxnQ0FBQSxFQUFBLFNBQUE7QUFoQkosT0FBQTs7QUFtQkEsYUFBTztBQUNILFFBQUEsSUFBSSxFQUFKO0FBREcsT0FBUDtBQXJCSixLQUFnQixFQUFoQjs7bUJBMEJlLE07O1FGaENmOzs7Ozs7O2lDR0FBO0FBQ0E7QUFDQTs7QUFFQSxRQUFNLE1BQU0sR0FBSSxZQUFNO0FBRWxCLFVBQU0sSUFBSSxHQUFHLFNBQVAsSUFBTyxHQUFNO0FBQ2YsWUFBSSxDQUFDLENBQUQsUUFBQyxDQUFELENBQUEsU0FBQSxNQUFKLEdBQUEsRUFBb0M7QUFDaEMsVUFBQSxDQUFDLENBQUQsY0FBQyxDQUFELENBQUEsUUFBQSxDQUFBLGVBQUE7QUFDQSxVQUFBLENBQUMsQ0FBRCxjQUFDLENBQUQsQ0FBQSxRQUFBLENBQUEsZUFBQTtBQUNBLFVBQUEsQ0FBQyxDQUFELGFBQUMsQ0FBRCxDQUFBLFFBQUEsQ0FBQSxRQUFBO0FBQ0EsVUFBQSxDQUFDLENBQUQsYUFBQyxDQUFELENBQUEsV0FBQSxDQUFBLFFBQUE7QUFKSixTQUFBLE1BS087QUFDSCxVQUFBLENBQUMsQ0FBRCxjQUFDLENBQUQsQ0FBQSxXQUFBLENBQUEsZUFBQTtBQUNBLFVBQUEsQ0FBQyxDQUFELGNBQUMsQ0FBRCxDQUFBLFdBQUEsQ0FBQSxlQUFBO0FBQ0EsVUFBQSxDQUFDLENBQUQsYUFBQyxDQUFELENBQUEsV0FBQSxDQUFBLFFBQUE7QUFDQSxVQUFBLENBQUMsQ0FBRCxhQUFDLENBQUQsQ0FBQSxRQUFBLENBQUEsUUFBQTtBQUNIOztBQUVELFFBQUEsQ0FBQyxDQUFELFlBQUMsQ0FBRCxDQUFBLFVBQUEsQ0FBMkIsVUFBQSxLQUFBLEVBQVc7QUFDbEMsVUFBQSxDQUFDLENBQUQsY0FBQyxDQUFELENBQUEsSUFBQTtBQUNBLFVBQUEsQ0FBQyxDQUFELHNCQUFDLENBQUQsQ0FBQSxJQUFBO0FBRUEsY0FBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBUCxhQUFDLENBQUQsQ0FBQSxJQUFBLENBQWYsSUFBZSxDQUFmOztBQUVBLGtCQUFBLE1BQUE7QUFDSSxpQkFBQSxnQkFBQTtBQUNJLGNBQUEsQ0FBQyxDQUFELG1CQUFDLENBQUQsQ0FBQSxJQUFBO0FBQ0E7O0FBQ0osaUJBQUEsaUJBQUE7QUFDSSxjQUFBLENBQUMsQ0FBRCxvQkFBQyxDQUFELENBQUEsSUFBQTtBQUNBOztBQUNKLGlCQUFBLHFCQUFBO0FBQ0ksY0FBQSxDQUFDLENBQUQsd0JBQUMsQ0FBRCxDQUFBLElBQUE7QUFDQTs7QUFDSixpQkFBQSxpQkFBQTtBQUNJLGNBQUEsQ0FBQyxDQUFELG9CQUFDLENBQUQsQ0FBQSxJQUFBO0FBQ0E7O0FBQ0osaUJBQUEsa0JBQUE7QUFDSSxjQUFBLENBQUMsQ0FBRCxxQkFBQyxDQUFELENBQUEsSUFBQTtBQUNBOztBQUNKO0FBQ0k7QUFqQlI7QUFOSixTQUFBO0FBMEJBLFFBQUEsQ0FBQyxDQUFELGNBQUMsQ0FBRCxDQUFBLFVBQUEsQ0FBNkIsWUFBTTtBQUMvQixVQUFBLENBQUMsQ0FBRCxjQUFDLENBQUQsQ0FBQSxJQUFBO0FBQ0EsVUFBQSxDQUFDLENBQUQsc0JBQUMsQ0FBRCxDQUFBLElBQUE7QUFGSixTQUFBO0FBdkNKLE9BQUE7O0FBNkNBLGFBQU87QUFDSCxRQUFBLElBQUksRUFBSjtBQURHLE9BQVA7QUEvQ0osS0FBZ0IsRUFBaEI7O21CQW9EZSxNOzs7QUh4RGYsQ0FBQSxFLEVBQUEsRSxHQUFBOzs7Ozs7Ozs7O0FJQUE7QUFDQTtBQUNBO0FBRUEsSUFBTSxNQUFNLEdBQUksWUFBTTtBQUVsQixNQUFNLElBQUksR0FBRyxTQUFQLElBQU8sR0FBTTtBQUNmLFFBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFGLENBQU0sS0FBTixFQUFhLE9BQWIsQ0FBcUIsQ0FBQyxTQUFELEVBQVksUUFBWixDQUFyQixFQUE0QyxFQUE1QyxDQUFaO0FBQ0EsUUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUYsQ0FBTztBQUNsQixNQUFBLE9BQU8sRUFBRSx5REFEUztBQUVsQixNQUFBLFNBQVMsRUFBRSwyREFGTztBQUdsQixNQUFBLFFBQVEsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBSFE7QUFJbEIsTUFBQSxVQUFVLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUpNO0FBS2xCLE1BQUEsV0FBVyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsRUFBTCxDQUxLO0FBTWxCLE1BQUEsVUFBVSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FOTTtBQU9sQixNQUFBLFlBQVksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMO0FBUEksS0FBUCxDQUFmO0FBVUEsSUFBQSxDQUFDLENBQUMsU0FBRixDQUFZLG9EQUFaLEVBQWtFO0FBQzlELE1BQUEsV0FBVyxFQUFFO0FBRGlELEtBQWxFLEVBRUcsS0FGSCxDQUVTLEdBRlQ7QUFJQSxJQUFBLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBQyxTQUFELEVBQVksUUFBWixDQUFULEVBQWdDO0FBQUUsTUFBQSxJQUFJLEVBQUU7QUFBUixLQUFoQyxFQUFrRCxLQUFsRCxDQUF3RCxHQUF4RCxFQUE2RCxTQUE3RCxDQUF1RSxnQ0FBdkUsRUFBeUcsU0FBekc7QUFDSCxHQWpCRDs7QUFtQkEsU0FBTztBQUNILElBQUEsSUFBSSxFQUFKO0FBREcsR0FBUDtBQUdILENBeEJjLEVBQWY7O2VBMEJlLE07Ozs7Ozs7Ozs7O0FDOUJmO0FBQ0E7QUFDQTtBQUVBLElBQU0sTUFBTSxHQUFJLFlBQU07QUFFbEIsTUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFPLEdBQU07QUFDZixRQUFJLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxTQUFaLE1BQTJCLEdBQS9CLEVBQW9DO0FBQ2hDLE1BQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixRQUFsQixDQUEyQixlQUEzQjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixRQUFsQixDQUEyQixlQUEzQjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixRQUFqQixDQUEwQixRQUExQjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixXQUFqQixDQUE2QixRQUE3QjtBQUNILEtBTEQsTUFLTztBQUNILE1BQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixXQUFsQixDQUE4QixlQUE5QjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixXQUFsQixDQUE4QixlQUE5QjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixXQUFqQixDQUE2QixRQUE3QjtBQUNBLE1BQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixRQUFqQixDQUEwQixRQUExQjtBQUNIOztBQUVELElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixVQUFoQixDQUEyQixVQUFDLEtBQUQsRUFBVztBQUNsQyxNQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsSUFBbEI7QUFDQSxNQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLElBQTFCO0FBRUEsVUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFQLENBQUQsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBZjs7QUFFQSxjQUFRLE1BQVI7QUFDSSxhQUFLLGdCQUFMO0FBQ0ksVUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QixJQUF2QjtBQUNBOztBQUNKLGFBQUssaUJBQUw7QUFDSSxVQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLElBQXhCO0FBQ0E7O0FBQ0osYUFBSyxxQkFBTDtBQUNJLFVBQUEsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIsSUFBNUI7QUFDQTs7QUFDSixhQUFLLGlCQUFMO0FBQ0ksVUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QixJQUF4QjtBQUNBOztBQUNKLGFBQUssa0JBQUw7QUFDSSxVQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCLElBQXpCO0FBQ0E7O0FBQ0o7QUFDSTtBQWpCUjtBQW1CSCxLQXpCRDtBQTBCQSxJQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsVUFBbEIsQ0FBNkIsWUFBTTtBQUMvQixNQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsSUFBbEI7QUFDQSxNQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLElBQTFCO0FBQ0gsS0FIRDtBQUlILEdBM0NEOztBQTZDQSxTQUFPO0FBQ0gsSUFBQSxJQUFJLEVBQUo7QUFERyxHQUFQO0FBR0gsQ0FsRGMsRUFBZjs7ZUFvRGUsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuaW1wb3J0IGZvb3RlciBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XG5cbigoJCkgPT4ge1xuICAgIC8vIFdoZW4gRE9NIGlzIHJlYWR5XG4gICAgJCgoKSA9PiB7XG4gICAgICAgIGhlYWRlci5pbml0KCk7XG4gICAgICAgIGZvb3Rlci5pbml0KCk7XG4gICAgfSk7XG59KShqUXVlcnkpO1xuIiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxuLy9cbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXG5cbi8vIGltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlYWZsZXQnO1xuXG5jb25zdCBmb290ZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzQ3Ljg3MTU3NSwgMC4zMjM5NzZdLCAxNSk7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwuaWNvbih7XG4gICAgICAgICAgICBpY29uVXJsOiAnY29udGVudC90aGVtZXMvbXNtby9hc3NldHMvaW1hZ2VzL2ljb25zL21hcmtlci1pY29uLnBuZycsXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICdjb250ZW50L3RoZW1lcy9tc21vL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWFya2VyLXNoYWRvdy5wbmcnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNSwgNDFdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC01MF0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiBbNDEsIDQxXSxcbiAgICAgICAgICAgIHNoYWRvd0FuY2hvcjogWzEyLCA0MV0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnLFxuICAgICAgICB9KS5hZGRUbyhtYXApO1xuXG4gICAgICAgIEwubWFya2VyKFs0Ny44NzE1NzUsIDAuMzIzOTc2XSwgeyBpY29uOiBtYXJrZXIgfSkuYWRkVG8obWFwKS5iaW5kUG9wdXAoJ0NvbXBsZXhlIHNwb3J0aWYgU2VyZ2UgU09VQUxMRScpLm9wZW5Qb3B1cCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXG4vL1xuLy8gWW91IGNhbiByZW1vdmUgb3IgYWRkIHlvdXIgb3duIGZ1bmN0aW9uIGluIHRoaXMgZmlsZS5cblxuY29uc3QgaGVhZGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+PSAxMDApIHtcbiAgICAgICAgICAgICQoJy5tZW51LW5hdmJhcicpLmFkZENsYXNzKCdzY3JvbGwtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcubWVudS1oZWFkZXInKS5hZGRDbGFzcygnc2Nyb2xsLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmxvZ28tbGFyZ2UnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcubG9nby1zbWFsbCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5tZW51LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzY3JvbGwtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcubWVudS1oZWFkZXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmxvZ28tbGFyZ2UnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcubG9nby1zbWFsbCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5tZW51LWl0ZW0nKS5tb3VzZWVudGVyKChldmVudCkgPT4ge1xuICAgICAgICAgICAgJCgnLm1lbnUtbmF2YmFyJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvbnRlbnQtbWVudS1uYXZiYXInKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkSXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1fY2x1Yic6XG4gICAgICAgICAgICAgICAgICAgICQoJyNtZW51X25hdmJhcl9jbHViJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1fdGVhbXMnOlxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfdGVhbXMnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lbnVfaXRlbV9wbGFubmluZ3MnOlxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfcGxhbm5pbmdzJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1faW5mb3MnOlxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfaW5mb3MnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lbnVfaXRlbV9ldmVudHMnOlxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfZXZlbnRzJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5tZW51LW5hdmJhcicpLm1vdXNlbGVhdmUoKCkgPT4ge1xuICAgICAgICAgICAgJCgnLm1lbnUtbmF2YmFyJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvbnRlbnQtbWVudS1uYXZiYXInKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXHJcbi8vXHJcbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXHJcblxyXG5jb25zdCBmb290ZXIgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzQ3Ljg3MTU3NSwgMC4zMjM5NzZdLCAxNSk7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5pY29uKHtcclxuICAgICAgICAgICAgaWNvblVybDogJ2NvbnRlbnQvdGhlbWVzL21zbW8vYXNzZXRzL2ltYWdlcy9pY29ucy9tYXJrZXItaWNvbi5wbmcnLFxyXG4gICAgICAgICAgICBzaGFkb3dVcmw6ICdjb250ZW50L3RoZW1lcy9tc21vL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWFya2VyLXNoYWRvdy5wbmcnLFxyXG4gICAgICAgICAgICBpY29uU2l6ZTogWzI1LCA0MV0sXHJcbiAgICAgICAgICAgIGljb25BbmNob3I6IFsxMiwgNDFdLFxyXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC01MF0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs0MSwgNDFdLFxyXG4gICAgICAgICAgICBzaGFkb3dBbmNob3I6IFsxMiwgNDFdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnLFxyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIEwubWFya2VyKFs0Ny44NzE1NzUsIDAuMzIzOTc2XSwgeyBpY29uOiBtYXJrZXIgfSkuYWRkVG8obWFwKS5iaW5kUG9wdXAoJ0NvbXBsZXhlIHNwb3J0aWYgU2VyZ2UgU09VQUxMRScpLm9wZW5Qb3B1cCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQsXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xyXG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXHJcbi8vXHJcbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXHJcblxyXG5jb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID49IDEwMCkge1xyXG4gICAgICAgICAgICAkKCcubWVudS1uYXZiYXInKS5hZGRDbGFzcygnc2Nyb2xsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcubWVudS1oZWFkZXInKS5hZGRDbGFzcygnc2Nyb2xsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcubG9nby1sYXJnZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnLmxvZ28tc21hbGwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLm1lbnUtbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3Njcm9sbC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3Njcm9sbC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLmxvZ28tbGFyZ2UnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5sb2dvLXNtYWxsJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLm1lbnUtaXRlbScpLm1vdXNlZW50ZXIoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tZW51LW5hdmJhcicpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLmNvbnRlbnQtbWVudS1uYXZiYXInKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZEl0ZW0gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGlkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudV9pdGVtX2NsdWInOlxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNtZW51X25hdmJhcl9jbHViJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudV9pdGVtX3RlYW1zJzpcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfdGVhbXMnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1fcGxhbm5pbmdzJzpcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfcGxhbm5pbmdzJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudV9pdGVtX2luZm9zJzpcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfaW5mb3MnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1fZXZlbnRzJzpcclxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfZXZlbnRzJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5tZW51LW5hdmJhcicpLm1vdXNlbGVhdmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcubWVudS1uYXZiYXInKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy5jb250ZW50LW1lbnUtbmF2YmFyJykuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQsXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iXX0=
