import { useState } from 'react'
import './App.css'






export default function Board() {

  function GenerateRow(startingValue, squaresPerRow) {
    let row = []
    let squareValue = startingValue
    
    for (let j = 0; j < squaresPerRow; j++) {
      const currentValue = squareValue
      {row.push(
        <button className="square bg-slate-100" onClick={() => handleClick(currentValue)}>
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
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
