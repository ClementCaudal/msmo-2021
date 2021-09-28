(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _footer = _interopRequireDefault(require("./modules/footer"));

var _header = _interopRequireDefault(require("./modules/header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
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

},{"./modules/footer":2,"./modules/header":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// This is an examples of simple export.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvZm9vdGVyLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7QUFDQTs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBS0EsQ0FBQyxVQUFDLENBQUQsRUFBTztBQUNKO0FBQ0EsRUFBQSxDQUFDLENBQUMsWUFBTTtBQUNKLHVCQUFPLElBQVA7O0FBQ0EsdUJBQU8sSUFBUDtBQUNILEdBSEEsQ0FBRDtBQUlILENBTkQsRUFNRyxNQU5IOzs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNLE1BQU0sR0FBSSxZQUFNO0FBRWxCLE1BQU0sSUFBSSxHQUFHLFNBQVAsSUFBTyxHQUFNO0FBQ2YsUUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxLQUFOLEVBQWEsT0FBYixDQUFxQixDQUFDLFNBQUQsRUFBWSxRQUFaLENBQXJCLEVBQTRDLEVBQTVDLENBQVo7QUFDQSxRQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBRixDQUFPO0FBQ2xCLE1BQUEsT0FBTyxFQUFFLHlEQURTO0FBRWxCLE1BQUEsU0FBUyxFQUFFLDJEQUZPO0FBR2xCLE1BQUEsUUFBUSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FIUTtBQUlsQixNQUFBLFVBQVUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBSk07QUFLbEIsTUFBQSxXQUFXLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxFQUFMLENBTEs7QUFNbEIsTUFBQSxVQUFVLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQU5NO0FBT2xCLE1BQUEsWUFBWSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUw7QUFQSSxLQUFQLENBQWY7QUFVQSxJQUFBLENBQUMsQ0FBQyxTQUFGLENBQVksb0RBQVosRUFBa0U7QUFDOUQsTUFBQSxXQUFXLEVBQUU7QUFEaUQsS0FBbEUsRUFFRyxLQUZILENBRVMsR0FGVDtBQUlBLElBQUEsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFDLFNBQUQsRUFBWSxRQUFaLENBQVQsRUFBZ0M7QUFBRSxNQUFBLElBQUksRUFBRTtBQUFSLEtBQWhDLEVBQWtELEtBQWxELENBQXdELEdBQXhELEVBQTZELFNBQTdELENBQXVFLGdDQUF2RSxFQUF5RyxTQUF6RztBQUNILEdBakJEOztBQW1CQSxTQUFPO0FBQ0gsSUFBQSxJQUFJLEVBQUo7QUFERyxHQUFQO0FBR0gsQ0F4QmMsRUFBZjs7ZUEwQmUsTTs7Ozs7Ozs7Ozs7QUNoQ2Y7QUFDQTtBQUNBO0FBRUEsSUFBTSxNQUFNLEdBQUksWUFBTTtBQUVsQixNQUFNLElBQUksR0FBRyxTQUFQLElBQU8sR0FBTTtBQUNmLFFBQUksQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLFNBQVosTUFBMkIsR0FBL0IsRUFBb0M7QUFDaEMsTUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLFFBQWxCLENBQTJCLGVBQTNCO0FBQ0EsTUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLFFBQWxCLENBQTJCLGVBQTNCO0FBQ0EsTUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLFFBQWpCLENBQTBCLFFBQTFCO0FBQ0EsTUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0gsS0FMRCxNQUtPO0FBQ0gsTUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLFdBQWxCLENBQThCLGVBQTlCO0FBQ0EsTUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLFdBQWxCLENBQThCLGVBQTlCO0FBQ0EsTUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLFdBQWpCLENBQTZCLFFBQTdCO0FBQ0EsTUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLFFBQWpCLENBQTBCLFFBQTFCO0FBQ0g7O0FBRUQsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLFVBQWhCLENBQTJCLFVBQUMsS0FBRCxFQUFXO0FBQ2xDLE1BQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixJQUFsQjtBQUNBLE1BQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsSUFBMUI7QUFFQSxVQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQVAsQ0FBRCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUFmOztBQUVBLGNBQVEsTUFBUjtBQUNJLGFBQUssZ0JBQUw7QUFDSSxVQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCLElBQXZCO0FBQ0E7O0FBQ0osYUFBSyxpQkFBTDtBQUNJLFVBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsSUFBeEI7QUFDQTs7QUFDSixhQUFLLHFCQUFMO0FBQ0ksVUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QixJQUE1QjtBQUNBOztBQUNKLGFBQUssaUJBQUw7QUFDSSxVQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLElBQXhCO0FBQ0E7O0FBQ0osYUFBSyxrQkFBTDtBQUNJLFVBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIsSUFBekI7QUFDQTs7QUFDSjtBQUNJO0FBakJSO0FBbUJILEtBekJEO0FBMEJBLElBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixVQUFsQixDQUE2QixZQUFNO0FBQy9CLE1BQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixJQUFsQjtBQUNBLE1BQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsSUFBMUI7QUFDSCxLQUhEO0FBSUgsR0EzQ0Q7O0FBNkNBLFNBQU87QUFDSCxJQUFBLElBQUksRUFBSjtBQURHLEdBQVA7QUFHSCxDQWxEYyxFQUFmOztlQW9EZSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbmltcG9ydCBmb290ZXIgZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vbW9kdWxlcy9oZWFkZXInO1xuXG4oKCQpID0+IHtcbiAgICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAgICQoKCkgPT4ge1xuICAgICAgICBoZWFkZXIuaW5pdCgpO1xuICAgICAgICBmb290ZXIuaW5pdCgpO1xuICAgIH0pO1xufSkoalF1ZXJ5KTtcbiIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cbi8vXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxuXG4vLyBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZWFmbGV0JztcblxuY29uc3QgZm9vdGVyID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFs0Ny44NzE1NzUsIDAuMzIzOTc2XSwgMTUpO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLmljb24oe1xuICAgICAgICAgICAgaWNvblVybDogJ2NvbnRlbnQvdGhlbWVzL21zbW8vYXNzZXRzL2ltYWdlcy9pY29ucy9tYXJrZXItaWNvbi5wbmcnLFxuICAgICAgICAgICAgc2hhZG93VXJsOiAnY29udGVudC90aGVtZXMvbXNtby9hc3NldHMvaW1hZ2VzL2ljb25zL21hcmtlci1zaGFkb3cucG5nJyxcbiAgICAgICAgICAgIGljb25TaXplOiBbMjUsIDQxXSxcbiAgICAgICAgICAgIGljb25BbmNob3I6IFsxMiwgNDFdLFxuICAgICAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtNTBdLFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogWzQxLCA0MV0sXG4gICAgICAgICAgICBzaGFkb3dBbmNob3I6IFsxMiwgNDFdLFxuICAgICAgICB9KTtcblxuICAgICAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJyxcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcblxuICAgICAgICBMLm1hcmtlcihbNDcuODcxNTc1LCAwLjMyMzk3Nl0sIHsgaWNvbjogbWFya2VyIH0pLmFkZFRvKG1hcCkuYmluZFBvcHVwKCdDb21wbGV4ZSBzcG9ydGlmIFNlcmdlIFNPVUFMTEUnKS5vcGVuUG9wdXAoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xuIiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxuLy9cbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXG5cbmNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPj0gMTAwKSB7XG4gICAgICAgICAgICAkKCcubWVudS1uYXZiYXInKS5hZGRDbGFzcygnc2Nyb2xsLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLm1lbnUtaGVhZGVyJykuYWRkQ2xhc3MoJ3Njcm9sbC1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5sb2dvLWxhcmdlJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnLmxvZ28tc21hbGwnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcubWVudS1uYXZiYXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLm1lbnUtaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3Njcm9sbC1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5sb2dvLWxhcmdlJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgJCgnLmxvZ28tc21hbGwnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcubWVudS1pdGVtJykubW91c2VlbnRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICQoJy5tZW51LW5hdmJhcicpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5jb250ZW50LW1lbnUtbmF2YmFyJykuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpZEl0ZW0gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudV9pdGVtX2NsdWInOlxuICAgICAgICAgICAgICAgICAgICAkKCcjbWVudV9uYXZiYXJfY2x1YicpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudV9pdGVtX3RlYW1zJzpcbiAgICAgICAgICAgICAgICAgICAgJCgnI21lbnVfbmF2YmFyX3RlYW1zJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1fcGxhbm5pbmdzJzpcbiAgICAgICAgICAgICAgICAgICAgJCgnI21lbnVfbmF2YmFyX3BsYW5uaW5ncycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudV9pdGVtX2luZm9zJzpcbiAgICAgICAgICAgICAgICAgICAgJCgnI21lbnVfbmF2YmFyX2luZm9zJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51X2l0ZW1fZXZlbnRzJzpcbiAgICAgICAgICAgICAgICAgICAgJCgnI21lbnVfbmF2YmFyX2V2ZW50cycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcubWVudS1uYXZiYXInKS5tb3VzZWxlYXZlKCgpID0+IHtcbiAgICAgICAgICAgICQoJy5tZW51LW5hdmJhcicpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb250ZW50LW1lbnUtbmF2YmFyJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIl19
