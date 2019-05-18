(function () {
  'use strict';
  //TODO いろいろ

  const ball = document.getElementById('ball');
  const racket = document.getElementById('racket');
  const start_button = document.getElementById('start-button');
  const go_left = document.getElementById('go-left');
  const go_right = document.getElementById('go-right');

  let margin_top_value = 520;
  let vertically = -6;
  let margin_left_value = 390;
  let side = 6;
  let is_alive = true;
  function move_ball() {
    ball.style.marginTop = margin_top_value + 'px';
    ball.style.marginLeft = margin_left_value + 'px';
    margin_top_value += vertically;
    margin_left_value += side;
    if (margin_top_value >= 520) {
      if (!(racket_margin_left <= margin_left_value && margin_left_value <= racket_margin_left + 126) && is_alive) {
        is_alive = false;
      } else if (margin_top_value >= 585) {
        clearInterval(move_ball_intervalID);
        alert('game over');
      }
    }
    if (is_alive && margin_top_value <= 0 ^ margin_top_value >= 520) vertically *= -1;
    if (margin_left_value < 0 ^ margin_left_value > 780) side *= -1;
  }

  let racket_margin_left = 337;

  go_left.onclick = () => {
    racket_margin_left -= 15;
    racket.style.marginLeft = racket_margin_left + 'px';
  }

  go_right.onclick = () => {
    racket_margin_left += 15;
    racket.style.marginLeft = racket_margin_left + 'px';
  }

  let move_ball_intervalID;
  start_button.onclick = () => {
    clearInterval(move_ball_intervalID);
    move_ball_intervalID = setInterval(move_ball, 40);
  }

  document.body.onkeydown = (event) => {
    console.log(event);
    if (event.key === 'h') go_left.onclick()
    if (event.key === 'l') go_right.onclick()
    if (event.keyCode === 32 && is_alive) start_button.onclick();
  }


})();