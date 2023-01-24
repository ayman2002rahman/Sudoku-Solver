const CANVAS_SIZE = 700;
const X_OFFSET = 30;
const Y_OFFSET = 30;

let board = [];
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  for(let i = 0; i < 9; i++) {
    row = [];
    for(let j = 0; j < 9; j++)
      row.push(new Cell(j * CELL_SIZE + X_OFFSET, i * CELL_SIZE + Y_OFFSET));
    board.push(row);
  }
}

function mousePressed() {
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      let num = board[i][j].isClicked();
      if(num != -1) {
        for(let k = 0; k < 9; k++) {
          board[k][j].removePossibleState(num);
          board[i][k].removePossibleState(num);
        }
        let bigI = Math.floor(i / 3);
        let bigJ = Math.floor(j / 3);
        switch(bigI) {
          case 0:
            switch(bigJ) {
              case 0: // (0, 0)
                for(let k = 0; k < 3; k++)
                  for(let l = 0; l < 3; l++)
                    board[k][l].removePossibleState(num);
                break;
              case 1: // (0, 1)
                for(let k = 0; k < 3; k++)
                  for(let l = 3; l < 6; l++)
                    board[k][l].removePossibleState(num);              
                break;
              case 2: //(0, 2)
                for(let k = 0; k < 3; k++)
                  for(let l = 6; l < 9; l++)
                    board[k][l].removePossibleState(num);
                break;
            }
            break;
          case 1:
            switch(bigJ) {
              case 0: //(1, 0)
                for(let k = 3; k < 6; k++)
                  for(let l = 0; l < 3; l++)
                    board[k][l].removePossibleState(num);
                break;
              case 1: //(1, 1)
                for(let k = 3; k < 6; k++)
                  for(let l = 3; l < 6; l++)
                    board[k][l].removePossibleState(num);
                break;
              case 2: //(1, 2)
                for(let k = 3; k < 6; k++)
                  for(let l = 6; l < 9; l++)
                    board[k][l].removePossibleState(num);
                break;
            }
            break;
          case 2:
            switch(bigJ) {
              case 0: //(2, 0)
                for(let k = 6; k < 9; k++)
                  for(let l = 0; l < 3; l++)
                    board[k][l].removePossibleState(num);
                break;
              case 1: //(2, 1)
                for(let k = 6; k < 9; k++)
                  for(let l = 3; l < 6; l++)
                    board[k][l].removePossibleState(num);
                break;
              case 2: //(2, 2)
                for(let k = 6; k < 9; k++)
                  for(let l = 6; l < 9; l++)
                    board[k][l].removePossibleState(num);
                break;
            }
            break;
        }
      }
    }
  }
  for(let i = 0; i < 9; i++)
    for(let j = 0; j < 9; j++)
      board[i][j].update();
}

//This function is on an infinite loop at 60 fps
function draw() {
  background('grey');
  stroke('black')
  strokeWeight(1);
  for(let i = 0; i < board.length; i++)
    for(let j = 0; j < board.length; j++)
      board[i][j].display();
  strokeWeight(5);
  for(let i = 3; i <= 6; i += 3)
    line(i * CELL_SIZE + X_OFFSET, Y_OFFSET, i * CELL_SIZE + X_OFFSET, 9 * CELL_SIZE + Y_OFFSET);
  for(let i = 3; i <= 6; i+= 3)
    line(X_OFFSET, i * CELL_SIZE + Y_OFFSET, 9 * CELL_SIZE + X_OFFSET, i * CELL_SIZE + Y_OFFSET);
}
