import { useState } from 'react'
import './App.css'
import sound from "./assets/block_click.mp3"



function block_click() {
  let audio = new Audio(sound)
  audio.play()
}





export default function Board() {

  function GenerateRow(startingValue, squaresPerRow) {
    let row = []
    let squareValue = startingValue

    
    
    for (let j = 0; j < squaresPerRow; j++) {
      const currentValue = squareValue

      let squareColour;
      if (squares[currentValue] === 'playerOne') {
        squareColour = 'bg-red-400'
        
      } else if (squares[currentValue] === 'playerTwo') {
        squareColour = 'bg-blue-400'
      } else {
        squareColour = 'bg-slate-400'
      }  


      {row.push(
        <button 
        className={`square ${squareColour}`}
        onClick={() => handleClick(currentValue)}
        onClickCapture={block_click}
        >
          
          
        </button>
      )}
        {squareValue++}
      
      }
    
    return row
  
  
  }

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(64).fill(null));

  function handleClick(i) {
    
    console.log("clicked" + i)
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'playerOne';
      
      
    } else {
      nextSquares[i] = 'playerTwo';
      
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
    alert("What a fantastic game, the winner is " + winner + "!")
    block_click()
  } else {
    status = (xIsNext ? 'Player One' : 'Player Two') + "'s turn";
    if (squares.includes(null) === false) {
      block_click()
      alert("it's a draw!")
    }
  }

  return (
    <>

      <h1 className="text-5xl font-bold underline text-slate-500">
        Longest Line Game
      </h1>

    
      <div className="text-red-400 text-lg font-bold">
        {status}
      </div>

      
      <div className='board-row'>
        {GenerateRow(0, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(8, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(16, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(24, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(32, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(40, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(48, 8)}
      </div>
      <div className='board-row'>
        {GenerateRow(56, 8)}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  
    // check rows
    for (let i = 0; i < 64; i += 8) {
      for (let j = i; j < i + 4; j++) {
        if (squares[j] && squares[j] === squares[j + 1] && squares[j] === squares[j + 2] && squares[j] === squares[j + 3] && squares[j] === squares[j + 4]) {
          return squares[j];
        }
      }
    }
    
    // check columns
    for (let i = 0; i < 8; i++) {
      for (let j = i; j < i + 32; j += 8) {
        if (squares[j] && squares[j] === squares[j + 8] && squares[j] === squares[j + 16] && squares[j] === squares[j + 24] && squares[j] === squares[j + 32]) {
          return squares[j];
        }
      }
    }
    
    // check diagonals
    for (let i = 0; i < 4; i++) {
      for (let j = i; j < i + 32; j += 8) {
        if (squares[j] && squares[j] === squares[j + 9] && squares[j] === squares[j + 18] && squares[j] === squares[j + 27] && squares[j] === squares[j +36]) {
          return squares[j];
        }
      }
      for (let j = i + 4; j < i +36; j +=8) {
        if (squares[j] && squares[j] === squares[j +7] && squares[j] === squares [j+14] && squares [j]==squares [j+21]&&squares [j]==squares [j+28]){
          return squares [j];
        }
      }
      
    
  }
  return null;
  }
