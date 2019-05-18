(function () {
  'use strict';
  //TODO いろいろ

  const ball = document.getElementById('ball');
  const racket = document.getElementById('racket');

  let margin_top_value = 520;
  let vertically = -6;
  let margin_left_value = 390;
  let side = 6;
  function move_ball() {
    ball.style.marginTop = margin_top_value + 'px';
    ball.style.marginLeft = margin_left_value + 'px';
    margin_top_value += vertically;
    margin_left_value += side;

    if (margin_top_value <= 0 ^ margin_top_value >= 520) vertically *= -1;
    if (margin_left_value < 0 ^ margin_left_value > 780) side *= -1;
  }

  let racket_margin_left = 337;
  document.body.onkeydown = (event) => {
    console.log(event);
    if (event.key === 'h') racket_margin_left -= 15;
    if (event.key === 'l') racket_margin_left += 15;
    racket.style.marginLeft = racket_margin_left + 'px';
  }

  setInterval(move_ball, 40);
})();