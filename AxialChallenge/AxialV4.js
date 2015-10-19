/*
   A simple game of minesweeper.

   When you click on a square
    * If it is a bomb, you lose the game
    * If it is next to a bomb, the number of adjacent bombs is shown
    * If it is not next to a bomb,
       surrounding spaces will open until adjacent to a bomb

   You can also right click a square to "Flag" it.
   A flagged square will not be counted in adjacent bomb calculations

   This code was written in a few hours for a recent software test.
   It is intended as only a small sample of standalone JS work.

   I didn't spend too much time considering the best UI
     or the best way to make the game easy, medium, or hard.

 */

(function() {
  'use strict';

  var board = [],
    dimension;

  showGameChooser();

  function showGameChooser() {
    var difficultyPicker,
      difficultyLabel,
      dimensionPicker,
      dimensionLabel,
      startButton;

    document.body.innerHTML = '';

    difficultyLabel = document.createElement("label");
    difficultyLabel.innerHTML = "Difficulty";
    difficultyPicker = document.createElement("select");
    [['Easy', 4], ['Average', 5], ['Hard', 7]]
      .forEach(function(opt) {
        difficultyPicker.options.add(new Option(opt[0], opt[1]));
      });

    dimensionLabel  = document.createElement("label");
    dimensionLabel.innerHTML = "Size";
    dimensionPicker = document.createElement("select");
    [['Small', 5], ['Medium', 10], ['Large', 20]]
      .forEach(function(opt) {
        dimensionPicker.options.add(new Option(opt[0], opt[1]));
      });

    startButton = document.createElement("button");
    startButton.innerHTML = "Start Game";
    startButton.addEventListener('click', function() {
      createBoard(dimensionPicker.value, difficultyPicker.value);
    })

    document.body.appendChild(dimensionLabel);
    dimensionLabel.appendChild(dimensionPicker);
    document.body.appendChild(document.createElement("br"))

    document.body.appendChild(difficultyLabel);
    difficultyLabel.appendChild(difficultyPicker);
    document.body.appendChild(document.createElement("br"))

    document.body.appendChild(startButton);
  }

  function createBoard(dim, difficulty) {
    dimension = dim;

    var i, j,
      totalBombs,
      bombLocale,
      bombsPlaced = 0;

    totalBombs = Math.floor(dimension * dimension / (10-difficulty));

    // initialize board
    for (i = 0; i < dimension; i++) {
      board[i] = [];
      for (j = 0; j < dimension; j++) {
        board[i][j] = new BoardSquare(i, j);
      }
    }

    // place bombs
    while (bombsPlaced < totalBombs) {
      bombLocale = Math.floor(Math.random() * dimension * dimension);
      var x = bombLocale % dimension;
      var y = Math.floor(bombLocale / dimension);
      if (board[y][x].isBomb === false) {
        board[y][x].isBomb = true;
        bombsPlaced++;
      }
    }
    drawBoard();
  }

  function drawBoard() {
    document.body.innerHTML = '';
    board.forEach(function(row){
      row.forEach(function(square){
        square.draw();
      });
      document.body.appendChild(document.createElement('br'));
    });
  }

  function scanForWin() {
    return ! board.some(function(row){
      return row.some(function(square){
         return square.flagged ||
            (!square.opened && !square.isBomb);
        })
      });
  }

  function revealBoard() {
    board.forEach(function(row) {
      row.forEach(function (square) {
        square.opened = true;
        square.flagged = false;
        if (!square.isBomb) {
          square.adjacentBombs =
            countAdjacentBombs(square.y, square.x);
        }
      })});
    drawBoard();
  }

  function checkNeighbors(y, x) {
    var  adjacentX, adjacentY;

    board[y][x].opened = true;

    if (!(board[y][x].adjacentBombs = countAdjacentBombs(y, x))) {
      for (adjacentY = y-1; adjacentY <= y+1; adjacentY++) {
        for (adjacentX = x-1; adjacentX <= x+1; adjacentX++) {
          if ((adjacentX) > -1 && (adjacentX) < dimension
            && (adjacentY) > -1 && (adjacentY) < dimension
            && !(adjacentX === x && adjacentY === y)) {
            if (board[adjacentY][adjacentX].opened
              || board[adjacentY][adjacentX].flagged) {
              continue;
            }
            else {
              checkNeighbors(adjacentY, adjacentX);
            }
          }
        }
      }
    }
  }

  function countAdjacentBombs(y, x) {
    var numBombs = 0;
    var adjacentX, adjacentY;
    for (adjacentY = y-1; adjacentY <= y+1; adjacentY++) {
      for (adjacentX = x-1; adjacentX <= x+1; adjacentX++) {
        if ((adjacentX) > -1 && (adjacentX) < dimension
          && (adjacentY) > -1 && (adjacentY) < dimension
          && !(adjacentX === x && adjacentY === y)) {
          numBombs += board[adjacentY][adjacentX].isBomb
            && !board[adjacentY][adjacentX].flagged
        }
      }
    }
    return numBombs;
  }

  function endGame(won) {
    var announcement,
      restartButton;

    revealBoard();

    announcement = document.createElement('h2');
    if (won) {
      announcement.innerHTML = "Congratulations.  You have won!";
    }
    else {
      announcement.innerHTML = "Too bad.  You lost!";
    }
    document.body.appendChild(announcement);

    restartButton = document.createElement('button');
    restartButton.innerHTML = "New Game";
    restartButton.addEventListener('click', function(){
      showGameChooser();
    });
    document.body.appendChild(restartButton);
  }


  /* Board Square and its functions */
  function BoardSquare(y, x){
    this.isBomb = false;
    this.opened = false;
    this.flagged = false;
    this.adjacentBombs = undefined;
    this.x = x;
    this.y = y;
  }

  BoardSquare.prototype.draw = function() {
    var self = this;
    var div = document.createElement('div');
    div.style.border ='1px solid black';
    div.style.backgroundColor = 'red';
    div.style.width = '20px';
    div.style.height = '20px';
    div.style.display = 'inline-block';
    div.id = 'boardY'+ self.y + 'boardX'+ self.x;

    div.addEventListener('click', function(){
      self.clickSquare();
    });

    div.addEventListener('contextmenu',  function(){
      self.rightClickSquare();
    });

    div.oncontextmenu = function(){return false;};

    if (self.flagged) {
      div.innerHTML = 'F';
    }
    else if (self.opened) {
      if (self.isBomb){
        div.innerHTML = 'B';
      }
      else {
        div.innerHTML = self.adjacentBombs;
      }
    }
    else {
      div.innerHTML = '---';
    }

    document.body.appendChild(div);
  };

  BoardSquare.prototype.rightClickSquare = function() {
    var self = this;
    self.flagged = ! self.flagged;
    if (! scanForWin()) {
      drawBoard();
    }
    else {
      endGame(true);
    }
  };

  BoardSquare.prototype.clickSquare = function () {
    var self = this;
    if (self.opened || self.flagged) {
      return;
    }
    else if (self.isBomb) {
      endGame(false);
      return;
    }
    else {
      self.opened = true;
      checkNeighbors(self.y, self.x);
    }

    if (! scanForWin()) {
      drawBoard();
    }
    else {
      endGame(true);
    }
  };
})();


