(function() {
  'use strict';;

  var board = new Board(),
    game = new Game();

  game.start();

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
      return false;
    });

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
    if (! board.scanForWin()) {
      board.draw();
    }
    else {
      game.end(true);
    }
  };

  BoardSquare.prototype.clickSquare = function () {
    var self = this;
    if (self.opened || self.flagged) {
      return;
    }
    else if (self.isBomb) {
      game.end(false);
      return;
    }
    else {
      self.opened = true;
      board.checkNeighbors(self.y, self.x);
    }

    if (! board.scanForWin()) {
      board.draw();
    }
    else {
      game.end(true);
    }
  };

  /* Board class and its functions */
  function Board() {
    var self = this;

    return {
      draw: drawBoard,
      create: createBoard,
      scanForWin: scanBoardForWin,
      reveal: revealEntireBoard,
      checkNeighbors: checkNeighbors,
      countAdjacentBombs: countAdjacentBombs
    };

    function createBoard(dimension, difficulty) {
      self.dimension = dimension;
      self.difficulty = difficulty;

      var i, j,
        totalBombs,
        bombLocale,
        bombsPlaced = 0;

      totalBombs = Math.floor(self.dimension * self.dimension / self.difficulty);

      // initialize board
      for (i = 0; i < self.dimension; i++) {
        board[i] = [];
      }
      for (i = 0; i < self.dimension; i++) {
        for (j = 0; j < self.dimension; j++) {
          board[i][j] = new BoardSquare(i, j);
        }
      }

      // place bombs
      while (bombsPlaced < totalBombs) {
        bombLocale = Math.floor(Math.random() * self.dimension * self.dimension);
        var x = bombLocale % self.dimension;
        var y = Math.floor(bombLocale / self.dimension);
        console.log("Bomb placed at ", x, ",", y);
        if (board[y][x].isBomb === false) {
          board[y][x].isBomb = true;
          bombsPlaced++;
        }
      }
      drawBoard();
    }

    function drawBoard() {
      document.body.innerHTML = '';

      var i,
        j,
        boardSquare;
      for (i = 0; i < self.dimension; i++) {
        for (j = 0; j < self.dimension; j++) {
          boardSquare = board[i][j];
          boardSquare.draw();
          if (j === self.dimension - 1) {
            document.body.appendChild(document.createElement('br'));
          }
        }
      }
    }

    function scanBoardForWin() {
      var i, j,
        boardSquare;
      for (i = 0; i < self.dimension; i++) {
        for (j = 0; j < self.dimension; j++) {
          boardSquare = board[i][j];
          if (boardSquare.flagged ||
            (!boardSquare.opened && !boardSquare.isBomb)) {
            return false;
          }
        }
      }
      return true;
    }

    function revealEntireBoard() {
      var i, j,
        boardSquare;
      for (i = 0; i < self.dimension; i++) {
        for (j = 0; j < self.dimension; j++) {
          boardSquare = board[i][j];
          boardSquare.opened = true;
          boardSquare.flagged = false;
          if (!boardSquare.isBomb) {
            boardSquare.adjacentBombs =
              countAdjacentBombs(boardSquare.y, boardSquare.x);
          }
        }
      }
      drawBoard();
    }

  /* Next two functions operate on BoardSquares, but takes coords as args?
   * Maybe refactor these */
    function checkNeighbors(y, x) {
      var i, j,
        adjacentX, adjacentY,
        adjacentBombs,
        boardSquare;

      adjacentBombs = countAdjacentBombs(y, x);
      board[y][x].adjacentBombs = adjacentBombs;
      board[y][x].opened = true;

      if (adjacentBombs == 0) {
        for (i = -1; i <= 1; i++) {
          for (j = -1; j <= 1; j++) {
            adjacentX = x + i;
            adjacentY = y + j;
            if ((adjacentX) > -1 && (adjacentX) < self.dimension
              && (adjacentY) > -1 && (adjacentY) < self.dimension
              && !(adjacentX === x && adjacentY === y)) {
              boardSquare = board[adjacentY][adjacentX];
              if (boardSquare.opened || boardSquare.flagged) {
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
      var i, j,
        adjacentX, adjacentY,
        boardSquare;
      for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
          adjacentX = x + i;
          adjacentY = y + j;
          if ((adjacentX) > -1 && (adjacentX) < self.dimension
            && (adjacentY) > -1 && (adjacentY) < self.dimension
            && !(adjacentX === x && adjacentY === y)) {
            boardSquare = board[adjacentY][adjacentX];
            numBombs += boardSquare.isBomb && !boardSquare.flagged
          }
        }
      }
      return numBombs;
    }
  }

  /* These belong in a Game Object.  */
  function Game() {
    return {
      start: showGameChooser,
      end: endGame
    };

    function endGame(won) {
      var announcement;
      board.reveal();

      if (won) {
        announcement = document.createElement('h2');
        announcement.innerHTML = "Congratulations.  You have won!";
        document.body.appendChild(announcement);
      }
      else {
        announcement = document.createElement('h2');
        announcement.innerHTML = "Too bad.  You lost!";
        document.body.appendChild(announcement);
      }
    }


    function showGameChooser() {
      var difficultyPicker,
        startButton = document.createElement("button"),
       dimensionPicker;

      difficultyPicker = document.createElement("select")
        .add(new Option('Easy', 4))
        .add(new Option('Average', 5))
        .add(new Option('Large', 7));

      dimensionPicker = document.createElement("select")
        .add(new Option('Small', 5))
        .add(new Option('Medium', 10))
        .add(new Option('Large', 20));


      var op = new Option()
      op.value = 1;
      op.text = "First entry";
      textnode2.options.add(op);

      var btnBig = document.createElement('button');
      var btnMedium = document.createElement('button');
      var btnSmall = document.createElement('button');

      var btnEasy = document.createElement('button');
      var btnAverage = document.createElement('button');
      var btnHard = document.createElement('button');


      btnBig.innerHTML = 'Big';
      btnMedium.innerHTML = 'Medium';
      btnSmall.innerHTML = 'Small';


      btnHard.innerHTML = 'Hard';
      btnAverage.innerHTML = 'Average';
      btnEasy.innerHTML = 'Easy';

      document.body.appendChild(btnBig);
      document.body.appendChild(btnMedium);
      document.body.appendChild(btnSmall);

      document.body.appendChild(document.createElement('br'));
      document.body.appendChild(document.createElement('hr'));
      document.body.appendChild(document.createElement('br'));

      document.body.appendChild(btnHard);
      document.body.appendChild(btnAverage);
      document.body.appendChild(btnEasy);

      btnBig.onclick = function () {
        dimension = 20;
        if (difficulty !== undefined) {
          board.create(dimension, difficulty)
        }
      };
      btnMedium.onclick = function () {
        dimension = 10;
        if (difficulty !== undefined) {
          board.create(dimension, difficulty)
        }
      };
      btnSmall.onclick = function () {
        dimension = 5;
        if (difficulty !== undefined) {
          board.create(dimension, difficulty)
        }
      };

      btnHard.onclick = function () {
        difficulty = 4;
        if (dimension !== undefined) {
          board.create(dimension, difficulty)
        }
      };
      btnAverage.onclick = function () {
        difficulty = 5;
        if (dimension !== undefined) {
          board.create(dimension, difficulty)
        }
      };
      btnEasy.onclick = function () {
        difficulty = 7;
        if (dimension !== undefined) {
          board.create(dimension, difficulty)
        }
      }
    }
  }
})();


