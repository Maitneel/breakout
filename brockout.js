(function () {
  'use strict';
  //TODO いろいろ

  const ball = document.getElementById('ball');

  let margin_top_value = 520;
  let vertically = -6;
  function move_ball() {
    ball.style.marginTop = margin_top_value + 'px';
     margin_top_value += vertically;

    if (margin_top_value <= 0) vertically = 6;
    if (margin_top_value >= 520) vertically = -6;
  }

  setInterval(move_ball, 40);
})();