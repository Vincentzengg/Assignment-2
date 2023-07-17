import { useState, useEffect } from 'react';
import './App.css';
import soundClick from "./assets/block_click.mp3";
import soundWinner from "./assets/winner.mp3";
import soundDraw from "./assets/draw.mp3";
import soundMusic from "./assets/background_music.mp3";

let musicIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
    />
  </svg>
);

let musicIconMuted = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
    />
  </svg>
);

function playSound(audioName) {
  let audio = new Audio(audioName);
  audio.play();
}

export default function HardBot() {
  function HandleRestart() {
    setSquares(Array(64).fill(null));
    setXIsNext(true);
  }

  const [MusicAudio, setMusic] = useState(new Audio(soundMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaying = () => {
    if (isPlaying) {
      MusicAudio.pause();
    } else if (!isPlaying){
      MusicAudio.play();
    }
    setIsPlaying(!isPlaying);
  }; 

  function GenerateRow(startingValue, squaresPerRow) {
    let row = [];
    let squareValue = startingValue;
  
    for (let j = 0; j < squaresPerRow; j++) {
      const currentValue = squareValue;
  
      let squareColour;
      if (squares[currentValue] === 'playerOne') {
        squareColour = 'bg-red-400';
      } else if (squares[currentValue] === 'playerTwo') {
        squareColour = 'bg-blue-400';
      } else {
        squareColour = 'bg-slate-400';
      }
  
      row.push(
        <button
          key={currentValue} 
          className={`square ${squareColour}`}
          onClick={() => {
            handleClick(currentValue);
            playSound(soundClick);
          }}
        ></button>
      );
      squareValue++;
    }
  
    return row;
  }
  
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(64).fill(null));

  useEffect(() => {
    if (!xIsNext) {
      // Computer's turn
      const timer = setTimeout(() => {
        makeComputerMove();
      }, 5); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [xIsNext]);

  function handleClick(i) {
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

  function makeComputerMove() {
    // Check for potential winning moves for the computer
    const computerWinningMove = findWinningMove(squares, 'playerTwo');
    if (computerWinningMove !== null) {
      handleClick(computerWinningMove);
      return;
    }
  
    // Check for potential winning moves for the human player
    const humanWinningMove = findWinningMove(squares, 'playerOne');
    if (humanWinningMove !== null) {
      handleClick(humanWinningMove);
      return;
    }
  
    // Make a random move
    const availableSquares = squares
      .map((value, index) => (value ? null : index))
      .filter((value) => value !== null);
  
    if (availableSquares.length === 0) {
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    const selectedSquare = availableSquares[randomIndex];
  
    handleClick(selectedSquare);
  }
  
  function makeComputerMove() {
    // Find the best move for the computer
    const computerMove = findBestMove(squares);
    if (computerMove !== null) {
      handleClick(computerMove);
      return;
    }
  
    // Make a random move
    const availableSquares = squares
      .map((value, index) => (value ? null : index))
      .filter((value) => value !== null);
  
    if (availableSquares.length === 0) {
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    const selectedSquare = availableSquares[randomIndex];
  
    handleClick(selectedSquare);
  }
  
  function findBestMove(squares) {
    // Check for potential winning moves for the computer
    const computerWinningMove = findWinningMove(squares, 'playerTwo');
    if (computerWinningMove !== null) {
      return computerWinningMove;
    }
  
    // Check for potential winning moves for the human player
    const humanWinningMove = findWinningMove(squares, 'playerOne');
    if (humanWinningMove !== null) {
      return humanWinningMove;
    }
  
    // Check for potential three-in-a-row moves for the human player
    const humanThreeInARowMove = findThreeInARowMove(squares, 'playerOne');
    if (humanThreeInARowMove !== null) {
      return humanThreeInARowMove;
    }
  
    // Try to make a move that brings the computer closer to getting five in a row
    const computerFourInARowMove = findFourInARowMove(squares, 'playerTwo');
    if (computerFourInARowMove !== null) {
      return computerFourInARowMove;
    }
  
    return null;
  }
  
  function findWinningMove(squares, player) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i]) {
        continue;
      }
  
      const nextSquares = squares.slice();
      nextSquares[i] = player;
  
      if (calculateWinner(nextSquares) === player) {
        return i;
      }
    }
  
    return null;
  }
  
  function findThreeInARowMove(squares, player) { //Basically the point of this function is that if the player has 4 in a row, they are basically gauranteed a win since the bot would block a side of it but the player can just click on the other, so this is to basically prevent the player from creating a 4 in a row
     // Horizontal
     for (let i = 0; i < squares.length; i += 8) {
       for (let j = i; j < i +6; j++) {
         if (
           squares[j] === player &&
           squares[j] === squares[j +1] &&
           squares[j] === squares[j +2] &&
           !squares[j +3]
         ) {
           return j +3;
         }
         if (
           !squares[j] &&
           squares[j +1] === player &&
           squares[j +1] === squares[j +2] &&
           squares[j +1] === squares[j +3]
         ) {
           return j;
         }
       }
     }
   
     // Vertical
     for (let i =0; i <squares.length -(8 *3); i++) {
       if (
         squares[i] === player &&
         squares[i] === squares[i +8] &&
         squares[i] === squares[i +(8 *2)] &&
         !squares[i +(8 *3)]
       ) {
         return i +(8 *3);
       }
       if (
         !squares[i] &&
         squares[i +8] === player &&
         squares[i +8] === squares[i +(8 *2)] &&
         squares[i +8] === squares[i +(8 *3)]
       ) {
         return i;
       }
       
     }
   
     // Diagonal
     for(let i=0;i<squares.length-(8*3);i++){
       if(
         squares[i]===player&&
         squares[i]===squares[i+9]&&
         squares[i]===squares[i+(9*2)]&&
         !squares[i+(9*3)]
       ){
         return i+(9*3)
       }
       if(
         !squares[i]&&
         squares[i+9]===player&&
         squares[i+9]===squares[i+(9*2)]&&
         squares[i+9]===squares[i+(9*3)]
       ){
         return i;
       }
     }
     for(let i=4;i<squares.length-(8*2);i++){
       if(
         squares[i]==player&&
         squares[i]==squares[i+7]&&
         squares[i]==squares[i+(7*2)]&&
         !squares[i+(7*3)]
       ){
         return i+(7*3)
       }
       if(
         !squares[i]&&
         squares[i+7]==player&&
         squares[i+7]==squares[i+(7*2)]&&
         squares[i+7]==squares[i+(7*3)]
       ){
         return i;
       }
     }
   
     return null;
  }
  
  function findFourInARowMove(squares, player) { //This is to basically make the bot try to get 4 in a row, because if the bot sees 4 in a row, it will make 5 in a row so there isn't a point of making a function to make 5 in a row.
    // Horizontal
    for (let i = 0; i < squares.length; i += 8) {
      for (let j = i; j < i +5; j++) {
        if (
          squares[j] === player &&
          squares[j] === squares[j +1] &&
          squares[j] === squares[j +2] &&
          squares[j] === squares[j +3] &&
          !squares[j +4]
        ) {
          return j +4;
        }
        if (
          !squares[j] &&
          squares[j +1] === player &&
          squares[j +1] === squares[j +2] &&
          squares[j +1] === squares[j +3] &&
          squares[j +1] === squares[j +4]
        ) {
          return j;
        }
      }
    }
  
    // Vertical
    for (let i =0; i <squares.length -(8 *4); i++) {
      if (
        squares[i] === player &&
        squares[i] === squares[i +8] &&
        squares[i] === squares[i +(8 *2)] &&
        squares[i] === squares[i +(8 *3)] &&
        !squares[i +(8 *4)]
      ) {
        return i +(8 *4);
      }
      if (
        !squares[i] &&
        squares[i +8] === player &&
        squares[i +8] === squares[i +(8 *2)] &&
        squares[i +8] === squares[i +(8 *3)] &&
        squares[i +8] === squares[i +(8 *4)]
      ) {
        return i;
      }
      
    }
  
    // Diagonal
    for(let i=0;i<squares.length-(8*4);i++){
      if(
        squares[i]===player&&
        squares[i]===squares[i+9]&&
        squares[i]===squares[i+(9*2)]&&
        squares[i]===squares[i+(9*3)]&&
        !squares[i+(9*4)]
      ){
        return i+(9*4)
      }
      if(
        !squares[i]&&
        squares[i+9]===player&&
        squares[i+9]===squares[i+(9*2)]&&
        squares[i+9]===squares[i+(9*3)]&&
        squares[i+9]===squares[i+(9*4)]
      ){
        return i;
      }
    }
    for(let i=4;i<squares.length-(8*3);i++){
      if(
        (squares[(i)])==(player)&&
         (squares[(i)])==((squares[(i)+7]))&&
         (squares[(i)])==((squares[(i)+(7*2)]))&&
         !(squares[(i)+(7*3)])
      ){
        
         return (i)+(7*3)
       }
       if(
         !(squares[(i)])&&
         ((squares[(i)+7])==(player))&&
         ((squares[(i)+7])==((squares[(i)+(7*2)])))&&
         ((squares[(i)+7])==((squares[(i)+(7*3)])))&&
         ((squares[(i)+7])==((squares[(i)+(7*4)])))
       ){
         
          return (i);
       }
     }
  
    return null;
  }
  
  

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
    playSound(soundWinner);
  } else {
    status = (xIsNext ? 'Player One' : 'Player Two') + "'s turn";
    if (squares.includes(null) === false) {
      playSound(soundDraw);
      
      status = "It's a draw!";
    }
  }

  return (
    <>
      <h1 className="text-5xl font-bold underline text-slate-500">
        Longest Line Game
      </h1>

      <div className="text-lg font-bold">{status}</div>

      <div className="board-row">{GenerateRow(0, 8)}</div>
      <div className="board-row">{GenerateRow(8, 8)}</div>
      <div className="board-row">{GenerateRow(16, 8)}</div>
      <div className="board-row">{GenerateRow(24, 8)}</div>
      <div className="board-row">{GenerateRow(32, 8)}</div>
      <div className="board-row">{GenerateRow(40, 8)}</div>
      <div className="board-row">{GenerateRow(48, 8)}</div>
      <div className="board-row">{GenerateRow(56, 8)}</div>
      <button className="text-white-400 text-lg font-bold" onClick={HandleRestart}>
        Restart
      </button>
      <br></br>
      <button onClick={handlePlaying}>{isPlaying ? musicIcon : musicIconMuted}</button>
    </>
  );
}

function calculateWinner(squares) {
  for (let i = 0; i < 64; i += 8) {
    for (let j = i; j < i + 4; j++) {
      if (
        squares[j] &&
        squares[j] === squares[j + 1] &&
        squares[j] === squares[j + 2] &&
        squares[j] === squares[j + 3] &&
        squares[j] === squares[j + 4]
      ) {
        return squares[j];
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = i; j < i + 32; j += 8) {
      if (
        squares[j] &&
        squares[j] === squares[j + 8] &&
        squares[j] === squares[j + 16] &&
        squares[j] === squares[j + 24] &&
        squares[j] === squares[j + 32]
      ) {
        return squares[j];
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let j = i; j < i + 32; j += 8) {
      if (
        squares[j] &&
        squares[j] === squares[j + 9] &&
        squares[j] === squares[j + 18] &&
        squares[j] === squares[j + 27] &&
        squares[j] === squares[j + 36]
      ) {
        return squares[j];
      }
    }
    for (let j = i + 4; j < i + 36; j += 8) {
      if (
        squares[j] &&
        squares[j] === squares[j + 7] &&
        squares[j] === squares[j + 14] &&
        squares[j] === squares[j + 21] &&
        squares[j] === squares[j + 28]
      ) {
        return squares[j];
      }
    }
  }

  return null;
}
