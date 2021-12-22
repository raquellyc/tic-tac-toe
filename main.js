/*----- constants -----*/
const COLORS = {
    'null': 'white',
    '1': 'orange',
    '-1': 'pink'
  };
  
  /*----- app's state (variables) -----*/
  let board;  
  let turn;  
  let winner; 
  /*----- cached element references -----*/
  const btnEl = document.querySelector('button');
  const msgEl = document.querySelector('h1');
  const brdEls = document.querySelector('#board');

  /*----- event listeners -----*/

 btnEl.addEventListener('click', init);
 document.querySelector('#board').addEventListener('click', handleMove);
  
  /*----- functions -----*/
  init();
  function init() {
  
    // 90 degrees counter-clockwise
    board = [
      [0, 0, 0],  
      [0, 0, 0],  
      [0, 0, 0],  
  
    ];
    turn = 1;
    winner = null;
    render();
  }
  
  function handleMove(evt) {
    const colIdx = brdEls.indexOf(evt.target);
    if (colIdx [idx]|| winner) return;
    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
  }
  
  function render() {
    btnEl.style.visibility = winner ? 'visible' : 'hidden';
    renderMessage();
    renderBoard();
  }
  

  function renderMessage() {
      board.forEach(functin(btnEl, handleMove))
    if (winner === 'T') {
      msgEl.innerHTML = "It's a Tie!!!";
    } else if (winner) {
      msgEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
      msgEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
  }
  
  function renderBoard() {
    board.forEach(function(colArr, colIdx) {
      colArr.forEach(function(playerVal, rowIdx) {
        const divId = `c${colIdx}r${rowIdx}`;  
        const divEl = document.getElementById(divId);
        divEl.style.backgroundColor = COLORS[playerVal];
      });
    });
  }
  

  // to find the winner it would maybe be the combination between check horz and check vert? not completey sure ?

  function checkHorzWin(colidx, rowIdx)  {
    const player = board[colIdx][rowIdx];
    let count = 1;
    let col = colIdx -1
    while (col >= 0 && board[colIdx][rowIdx]=== player) {
      count++;
      col--;
    }
  }

  //reset the game

  document.getElementById('Reset Game').addEventListener('click', init);

function rematch(){
  board.splice(start, deleteCount){
    if (checkHorzWin === 'winner')
  }
    
}