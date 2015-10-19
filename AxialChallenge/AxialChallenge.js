(function() {
  var board = [],
    boardSquare,
    dimension,
    difficulty;

  showGameChooser();

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
    div.onclick = function(){
      self.clickSquare();
    }
    div.oncontextmenu = function(){
      self.rightClickSquare();
      return false;
    }

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
  }

  BoardSquare.prototype.rightClickSquare = function() {
    var self = this;
    self.flagged = ! self.flagged;
    drawBoard();
  }

  BoardSquare.prototype.clickSquare = function () {
    var self = this;
    console.log('clicked on', self);
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

    if (! scanBoardForWin()) {
      drawBoard();
    } else {
      endGame(true);
    }
  }

  /* Board Functions.  They belong in a Board Object. */
  function createBoard() {
    var i, j,
      totalBombs,
      bombLocale,
      bombsPlaced = 0;

    totalBombs = dimension * difficulty * difficulty;

    // initialize board
    for (i=0; i < dimension; i++) {
      board[i] = [];
    }
    for (i=0; i < dimension; i++) {
      for (j =0; j < dimension; j++) {
        board[i][j] = new BoardSquare(i,j);
      }
    }

    // place bombs
    while (bombsPlaced < totalBombs) {
      bombLocale = Math.floor(Math.random() * dimension * dimension);
      console.log('locale is ', bombLocale);
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
    document.body.innerHTML = ''

    var i,
      j,
      boardSquare;
    for (i=0; i < dimension; i++) {
      for (j =0; j < dimension; j++) {
        boardSquare = board[i][j];
        boardSquare.draw();
        if (j === dimension-1) {
          document.body.appendChild(document.createElement('br'));
        }
      }
    }
  }

  function scanBoardForWin() {
    var i, j;
    for (i=0; i < dimension; i++) {
      for (j =0; j < dimension; j++) {
        boardSquare = board[i][j];
        if (!boardSquare.opened && !boardSquare.isBomb) {
          return false;
        }
      }
    }
    return true;
  }


  function revealEntireBoard() {
    for (i=0; i < dimension; i++) {
      for (j =0; j < dimension; j++) {
        boardSquare = board[i][j];
        boardSquare.opened = true;
        boardSquare.flagged = false;
        if (! boardSquare.isBomb) {
          boardSquare.adjacentBombs =
            countAdjacentBombs(boardSquare.y, boardSquare.x);
        }
      }
    }
    drawBoard();
  }



  /* Board Functions which transform Board Squares */
  function checkNeighbors(y, x) {
    var i, j,
      adjacentX, adjacentY,
      adjacentBombs;

    adjacentBombs = countAdjacentBombs(y, x);
    board[y][x].adjacentBombs = adjacentBombs;
    board[y][x].opened = true;

    if (adjacentBombs == 0) {
      for (i = -1; i <= 1; i++) {
        for (j = -1; j <= 1; j++) {
          adjacentX = x + i;
          adjacentY = y + j;
          if ((adjacentX) > -1 && (adjacentX) < dimension
            && (adjacentY) > -1 && (adjacentY) < dimension
            && !(adjacentX === x && adjacentY === y)) {
            boardSquare = board[adjacentY][adjacentX];
            if (boardSquare.opened || boardSquare.flagged) {
              continue;
            } else {
              checkNeighbors(adjacentY, adjacentX);
            }
          }
        }
      }
    }
  }

  function countAdjacentBombs(y, x) {
    var numBombs = 0;
    var i, j, adjacentX, adjacentY, boardSquare;
    for (i=-1;i<=1;i++) {
      for (j = -1; j <= 1; j++) {
        adjacentX = x + i;
        adjacentY = y + j;
        if ((adjacentX) > -1 && (adjacentX) < dimension
          && (adjacentY) > -1 && (adjacentY) < dimension
          && !(adjacentX === x && adjacentY === y)) {
          boardSquare = board[adjacentY][adjacentX];
          numBombs += boardSquare.isBomb && !boardSquare.flagged
        }
      }
    }
    return numBombs;
  }


  /* These belong in a Game Object.  */

  function endGame(won) {
    var announcement;
    revealEntireBoard();

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
    var btnBig = document.createElement('button');
    var btnMedium = document.createElement('button');
    var btnSmall = document.createElement('button');

    var btnEasy = document.createElement('button')
    var btnAverage = document.createElement('button')
    var btnHard = document.createElement('button');


    btnBig.innerHTML ='Big';
    btnMedium.innerHTML ='Medium';
    btnSmall.innerHTML ='Small';


    btnHard.innerHTML ='Hard';
    btnAverage.innerHTML ='Average';
    btnEasy.innerHTML ='Easy';

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
        createBoard()
      }
    }
    btnMedium.onclick = function () {
      dimension = 10;
      if (difficulty !== undefined) {
        createBoard()
      }
    }
    btnSmall.onclick = function () {
      dimension = 5;
      if (difficulty !== undefined) {
        createBoard()
      }
    }

    btnHard.onclick = function () {
      difficulty = 5;
      if (dimension !== undefined) {
        createBoard()
      }
    }
    btnAverage.onclick = function () {
      difficulty = 3;
      if (dimension !== undefined) {
        createBoard()
      }
    }
    btnEasy.onclick = function () {
      difficulty = 1;
      if (dimension !== undefined) {
        createBoard()
      }
    }
  }
})()


