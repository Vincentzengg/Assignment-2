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

export default function EasyBot() {
  function HandleRestart() {
    setSquares(Array(64).fill(null));
    setXIsNext(true);
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const MusicAudio = new Audio(soundMusic);

  const handlePlaying = () => {
    if (isPlaying) {
      MusicAudio.pause();
    } else if (!isPlaying) {
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
