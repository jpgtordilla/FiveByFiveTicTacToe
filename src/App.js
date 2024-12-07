import { useState } from 'react'; 

let isX = true; 
let stateArray = []; 
let n = 5; 
for (let i = 0; i < n; i++) {
  stateArray.push([]); 
  for (let j = 0; j < n; j++) {
    stateArray[i].push(""); 
  }
}

function Square({label}) {

  let rowIndex = Math.floor(label / n); 
  let colIndex = label % n; 

  const [value, setValue] = useState(null); 
  // call useState from component
  // allows component to "remember things"
  // - value: stores value
  // - setValue: function used to change the value
  // - null is the initial state for value

  function checkWin() {
    // check rows
    for (let i = 0; i < n; i++) {
      // if first in a row is empty, check next row
      if (stateArray[i][0] == '') continue; 
      let charToCheck = stateArray[i][0]; // remember what you're checking for (X or O)
      for (let j = 0; j < n; j++) {
        if (stateArray[i][j] != charToCheck) break; // if not equal to what you're checking, check next row
        if (j == n - 1) return charToCheck; // if on last col + equal to char to check, return that char
      }
    }
    // check cols
    for (let i = 0; i < n; i++) {
      // if first in a col is empty, check next col
      if (stateArray[0][i] == '') continue; 
      let charToCheck = stateArray[0][i]; // remember what you're checking for (X or O)
      for (let j = 0; j < n; j++) {
        if (stateArray[j][i] != charToCheck) break; // if not equal to what you're checking, check next row
        if (j == n - 1) return charToCheck; // if on last row + equal to char to check, return that char
      }
    }
    // check diagonals
    // top left to bottom right
    if (stateArray[0][0] != '') {
      let charToCheck = stateArray[0][0]; // remember what you're checking for (X or O)
      for (let i = 0; i < n; i++) {
        if (stateArray[i][i] != charToCheck) break; // if not equal to what you're checking, check next item in diag. 
        if (i == n - 1) return charToCheck; 
      }
    }
    // bottom left to top right
    if (stateArray[n - 1][0] != '') {
      let charToCheck = stateArray[n - 1][0]; // remember what you're checking for (X or O)
      for (let i = 0; i < n; i++) {
        if (stateArray[i][n - i - 1] != charToCheck) break; // if not equal to what you're checking, check next item in diag. 
        if (i == n - 1) return charToCheck; 
      }
    }
    return ''; // if no win found, return empty char
  }

  function handleClick() {
    if (isX && stateArray[rowIndex][colIndex] == '') {
      setValue('X'); // sets value var. to X
      isX = false; 
      stateArray[rowIndex][colIndex] = 'X'; 
      
      // check if won after setting value
      if (checkWin() == 'X') {
        alert("X Wins"); 
      }
      else if (checkWin() == 'O') {
        alert("O Wins"); 
      }
    } else if (!isX && stateArray[rowIndex][colIndex] == '') {
      setValue('O'); // sets value var. to X
      isX = true; 
      stateArray[rowIndex][colIndex] = 'O'; 

      // check if won after setting value
      if (checkWin() == 'X') {
        alert("X Wins"); 
      }
      else if (checkWin() == 'O') {
       alert("O Wins"); 
      }
    } 
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  ); 
}

export default function Board() {
  return (
    <>
    <h1>5x5 TicTacToe</h1>
    <div className="board-row"> 
      <Square label="0"/>
      <Square label="1"/>
      <Square label="2"/>
      <Square label="3"/>
      <Square label="4"/>
    </div> 
    <div className="board-row"> 
      <Square label="5"/>
      <Square label="6"/>
      <Square label="7"/>
      <Square label="8"/>
      <Square label="9"/>
    </div> 
    <div className="board-row"> 
      <Square label="10"/>
      <Square label="11"/>
      <Square label="12"/>
      <Square label="13"/>
      <Square label="14"/>
    </div> 
    <div className="board-row"> 
      <Square label="15"/>
      <Square label="16"/>
      <Square label="17"/>
      <Square label="18"/>
      <Square label="19"/>
    </div> 
    <div className="board-row"> 
      <Square label="20"/>
      <Square label="21"/>
      <Square label="22"/>
      <Square label="23"/>
      <Square label="24"/>
    </div> 
    </>
  ); 

}
