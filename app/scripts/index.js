'use strict'
var game = {
            player1      : '',
            player2      : '',
            board        : [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', '']
                            ],
            isPlayer1Turn: true
            };


//when cell is clicked, game board is updated
$('.game_container').on('click', 'td', function() {
  var cellCoord  = $(this).index();
  var rowCoord = $(this).closest('tr').index();
  if ($(this).text() === "X" || $(this).text() === "O") {
    alert('Invalid move. That position has been claimed.');
  } else {
    if (game.isPlayer1Turn === true){
      game.board[rowCoord][cellCoord] = 'X';
    } else {
      game.board[rowCoord][cellCoord] = 'O';
    }
  }

  drawGameBoard(game.board);
  checkGameState(game.board);
  switchPlayerTurn(game.isPlayer1Turn);
  checkPlayerTurn(game.isPlayer1Turn);
});

function drawGameBoard(matrixArray) {
  $('.game_container').empty();
  var $table = $('<table class = "table table-bordered game_board"></table');
  _.forEach(matrixArray, function(row) {
    var $tr = $('<tr></tr>');
    _.forEach(row, function(cell) {
      $tr.append($('<td class= "tile">' + cell + '</td>'));
    });
    $table.append($tr);
  });
  $('.game_container').append($table);
}

function switchPlayerTurn(turnBool) {
  if (turnBool === true) {
    game.isPlayer1Turn = false;
  } else {
    game.isPlayer1Turn = true;
  }
}

function checkPlayerTurn(turnBool) {
  $('.player_move_display').empty();
  if (turnBool === true) {
    $('.player_move_display').append($('<div class="pull-right">It is now player1\'s turn</div>'));
  } else if (turnBool === false) {
    $('.player_move_display').append($('<div class="pull-right">It is now player2\'s turn</div>'));
  }
}

function checkGameState (state) {
  var player;
  if(game.isPlayer1Turn) {
    player='player1';
  } else {
    player='player2';
  }
  //horizontal 1st row
  if (state[0][0] !== "" && state[0][0] === state[0][1] && state[0][0] === state[0][2]) {
    alert(player + ' is the winner!');
  }
  //horizontal 2nd row
  else if (state[1][0] !== "" && state[1][0] === state[1][1] && state[1][0] === state[1][2]) {
    alert('Winner!');
  }
  //horizontal 3rd row
  else if (state[2][0] !== "" && state[2][0] === state[2][1] && state[2][0] === state[2][2]) {
    alert('Winner!');
  }
  //vertical 1st column
  else if (state[0][0] !== "" && state[0][0] === state[1][0] && state[1][0] === state[2][0]) {
    alert('Winner!');
  }
  //vertical 2nd column
  else if (state[0][1] !== "" && state[0][1] === state[1][1] && state[0][1] === state[2][1]) {
    alert('Winner!');
  }
  //vertical 3rd column
  else if (state[0][2] !== "" && state[0][2] === state[1][2] && state[0][2] === state[2][2]) {
    alert('Winner!');
  }
  //diagonal right
  else if (state[0][0] !== "" && state[0][0] === state[1][1] && state[0][0] === state[2][2]) {
    alert('Winner!');
  }
  //diagonal left
  else if (state[0][2] !== "" && state[0][2] === state[1][1] && state[0][2] === state[2][0]) {
    alert('Winner!');
  }
}