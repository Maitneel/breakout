(function () {
  'use strict';
  //TODO いろいろ

  const ball = document.getElementById('ball');
  const racket = document.getElementById('racket');
  const start_button = document.getElementById('start-button');
  const go_left = document.getElementById('go-left');
  const go_right = document.getElementById('go-right');
  const blocksID = [get_blockID(0), get_blockID(1), get_blockID(2), get_blockID(3), get_blockID(4)];
  
  let is_blocks_bracked = [[], [], [], [], []];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 8; j++) is_blocks_bracked[i][j] = false;
  }
  
  function array_getElementById (i_num, j_size, element_name) {
    let array = [];
    let j;
    for (j = 0; j < j_size; j++) {
      array[j] = document.getElementById(element_name + i_num + '-' + j);
    }
    return array;
  } 
  function get_blockID(i_num) {
    return array_getElementById(i_num, 8, 'blocksID');
  }

  function get_block_date(h_position, w_position, h_direction, w_direction) {
    h_position -= 65;
    //console.log(h_position + ' ' + w_position);
    if (h_direction == 1) h_position += 20;
    if (w_direction == 1) w_position += 20;
    h_position = Math.floor((h_position + 1) / 30);
    w_position = Math.floor((w_position + 1) / 100);
    if (h_direction == 1) h_position--;
    if (w_direction == 1) w_position--;
    //console.log(h_position + ' ' + w_position);
    return [h_position, w_position];
  }

  function break_block(blockID_h, blockID_w) {
    blocksID[blockID_h][blockID_w].style.backgroundColor = '#ffffff';
    return 0;
  }

  let margin_top_value = 520;
  let vertically = -5;
  let margin_left_value = 390;
  let side = 5;
  let is_alive = true;
  function move_ball() {
    console.log(margin_top_value < 215);
    if ((65 < margin_top_value || (45 < margin_top_value && 0 < vertically)) && margin_top_value < 215) {
      //console.log('flag' + margin_top_value + ' ' + margin_left_value);
      let block_date = get_block_date(margin_top_value, margin_left_value, (vertically / Math.abs(vertically)), (side / Math.abs(side)));
      if (!is_blocks_bracked[block_date[0]][block_date[1]]) {
        console.log('flag1');
        break_block(block_date[0], block_date[1]);
        if ((margin_top_value - 65) % 30 === 0) vertically *= -1;
        else side *= -1;
      }
    }
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
    console.log(event.keyCode);
    if (event.key === 'Control') clearInterval(move_ball_intervalID);
  }

})();