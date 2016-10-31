'use strict';

function debounce(func, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var timeout = void 0;

  return function () {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

var shevy = function shevy() {
  if (isHome()) {
    trianglify();
    headerState();
  }
};

var isHome = function isHome() {
  var bodyClasses = document.body.classList;
  return (/app index/.test(bodyClasses)
  );
};

var trianglify = function trianglify() {
  var pattern = Trianglify({
    width: 1200,
    height: 1200,
    x_colors: ['#144052', '#33a1cc', '#144052'],
    y_colors: ['#144052', '#000000']
  });
  var canvas = pattern.canvas();
  var background = document.querySelector('.js-hero-background');

  background.appendChild(canvas);

  setTimeout(function () {
    document.body.classList.add('is-trianglified');
  }, 350);
};

var headerState = function headerState() {
  var calcDistance = function calcDistance() {
    var scrollTop = window.scrollY;
    var header = document.querySelector('.js-header');
    var headerHeight = header.offsetHeight;
    var hero = document.querySelector('.js-hero');
    var heroHeight = hero.offsetHeight;

    var distance = heroHeight - (scrollTop + headerHeight);

    if (distance < 0) {
      document.body.classList.add('has-solid-header');
    } else {
      document.body.classList.remove('has-solid-header');
    }
  };

  var onScroll = debounce(calcDistance, 17);

  document.addEventListener('touchmove', onScroll);
  window.addEventListener('scroll', onScroll);
};

var ready = function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(shevy());
//# sourceMappingURL=app.js.map
