(function () {
  'use strict';
  //TODO いろいろ

  const ball = document.getElementById('ball');

  let margin_top_value = 520;
  let go_up = true;
  function move_ball() {
    ball.style.marginTop = margin_top_value + 'px';
    //margin_top_value -= 2;
    if (go_up) margin_top_value -= 6;
    else margin_top_value += 6;

    if (margin_top_value <= 0) go_up = false;
    if (margin_top_value >= 520) go_up = true;
  }

  setInterval(move_ball, 40);
})();