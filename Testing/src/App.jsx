import { useState } from 'react'
import './App.css'






export default function Board() {

  function GenerateRow(startingValue, squaresPerRow) {
    let row = []
    let squareValue = startingValue
    
    for (let j = 0; j < squaresPerRow; j++) {
      const currentValue = squareValue
      {row.push(
        <button className="square" onClick={() => handleClick(currentValue)}>
          {squares[currentValue]}
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
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      
      
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
  
}
