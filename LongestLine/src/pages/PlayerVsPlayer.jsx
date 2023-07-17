import { useState } from 'react'
import './App.css'
import soundClick from "./assets/block_click.mp3"
import soundWinner from "./assets/winner.mp3"
import soundDraw from "./assets/draw.mp3"
import soundMusic from "./assets/background_music.mp3"

let musicIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
</svg>

let musicIconMuted = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
</svg>



function playSound(audioName) { //This is to play the sound whenever called
  let audio = new Audio(audioName)
  audio.play()
}



export default function PlayerVsPlayer() {

  function HandleRestart() { //This is the function to restart the game, and it is called when the restart button is clicked
    setSquares(Array(64).fill(null)); //This resets the board by making every square empty
    setXIsNext(true); //Makes it so that playerOne goes first

  }
 const [MusicAudio, setMusic] = useState(new Audio(soundMusic)); //This is the audio for the game's music
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaying = () => {
    if (isPlaying) { //Basically if isPlaying is FALSE, it pauses the audio and if it is TRUE, it plays the audio
      MusicAudio.pause();
    } else if (!isPlaying){
      MusicAudio.play();
    }
    setIsPlaying(!isPlaying); // At the end of all of it, it sets isPlaying to the opposite of what it was before, so that it can be toggled (when the button presses it)
  }; 




  function GenerateRow(startingValue, squaresPerRow) { //This is the function to create a singular row, and it takes in two parameters, the starting value of the first square, and how many squares per row
    let row = [] 
    let squareValue = startingValue 

    
    
    for (let j = 0; j < squaresPerRow; j++) {
      const currentValue = squareValue

      let squareColour;
      if (squares[currentValue] === 'playerOne') { //If the square's value becomes playerOne, it turns it red
        squareColour = 'bg-red-400'
        
      } else if (squares[currentValue] === 'playerTwo') { //If the square's value becomes playerTwo, it turns it blue
        squareColour = 'bg-blue-400'
      } else {
        squareColour = 'bg-gray-100 opacity-60' // If the square's value is null (not playerOne or playerTwo), it turns it grey
      }  


      {row.push(
        <button 
        className={`square ${squareColour}`}
        onClick={() => {handleClick(currentValue); playSound(soundClick)}} //It calls to handleclick to tell it what square was clicked on, as well as playing the soundEffect
        
        
        > 
          
          
        </button> // This creates the square itself, as well giving it a click function that will change the square's value to playerOne or playerTwo and plays a sound
      )}
        {squareValue++} // Adds one to the value, so that the next square that is created, is 1+ from the previous square
      
      }
    
    return row
  
  
  }

  const [xIsNext, setXIsNext] = useState(true); // This is to determine who's turn it is, and it is set to true, so that playerOne goes first
  const [squares, setSquares] = useState(Array(64).fill(null)); // This is to determine the value of each square, and it is set to null, so that the squares are empty at the start of the game

  function handleClick(i) { //This is the function that is called when a square is clicked
    
    console.log("clicked" + i) 
    if (calculateWinner(squares) || squares[i]) { //This is to check if there is a winner, or if the square that was clicked is already filled, and if it is, it will return and not do anything
      return; 
    }
    const nextSquares = squares.slice(); 
    if (xIsNext) { //Basically if the turn was playerOne, it will change the value of the square that was clicked to playerOne, and if it was playerTwo, it will change the value of the square that was clicked to playerTwo
      nextSquares[i] = 'playerOne'; 
      
      
    } else {
      nextSquares[i] = 'playerTwo'; 
      
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); //Afterwards it will change the turn to the opposite of what it was before, (PlayerOne to PlayerTwo, PlayerTwo to PlayerOne)
  }

const winner = calculateWinner(squares); 
let status;
if (winner) {
  status = 'Winner: ' + winner; //If there is a winner it will play a sound, and it will display the winner, then reset the board same with the draw
  playSound(soundWinner);

  setTimeout(() => {
    setSquares(Array(64).fill(null));
    setXIsNext(true);
  }, 3000);
} else {
  status = (xIsNext ? 'Player One' : 'Player Two') + "'s turn";
  if (squares.includes(null) === false) {
    playSound(soundDraw);
    status = "It's a draw!";

    setTimeout(() => {
      setSquares(Array(64).fill(null));
      setXIsNext(true);
    }, 3000);
  }
}


  return ( //All of this here, is to essentially put everything onto the screen, like the board, title, etc.
    <>

        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div>
      <h1 className={`text-5xl font-bold underline ${winner ? `text-yellow-500` : `text-slate-500`}`}> Longest Line Game</h1>

    
      <div className={`text-3xl font-bold ${winner ? 'text-yellow-500' : xIsNext ? 'text-red-500' : 'text-blue-500'}`}>
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
      <button className="flex items-center justify-center border-2 border-white bg-transparent font-sans text-white 
        w-40 h-12 text-2xl rounded-lg opacity-50 top-40 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md" onClick={HandleRestart}> Restart</button>

      <br></br>
      <button className="flex items-center justify-center border-2 border-white bg-transparent font-sans text-white 
        w-30 h-12 text-xl rounded-lg opacity-50 top-40 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md" onClick={handlePlaying}>
        {isPlaying ? musicIcon : musicIconMuted}
      </button>
      
      
    </>
    
  );
}

function calculateWinner(squares) {//This is the win condition, it checks each row/square, and it finds if there is a square with the same value (playerOne or playerTwo) 5 times in a row, horizontally, verttically, etc.
  
    //Checks for rows 
    for (let i = 0; i < 64; i += 8) {
      for (let j = i; j < i + 4; j++) {
        if (squares[j] && 
          squares[j] === squares[j + 1] && 
          squares[j] === squares[j + 2] && 
          squares[j] === squares[j + 3] && 
          squares[j] === squares[j + 4]) {
          return squares[j]; //Basically what it does is that first it checks the square that was clicked on, then it checks the square to the right of it, and so on, and if it finds a square that is the same value as the square that was clicked on, it will return the value of the square that was clicked on, and that is how it determines the winner
        }
      }
    }
    
    // check columns
    for (let i = 0; i < 8; i++) { // Since it is in increments of 8, it will check the square below it because it is 8 squares away
      for (let j = i; j < i + 32; j += 8) {
        if (squares[j] && 
          squares[j] === squares[j + 8] && 
          squares[j] === squares[j + 16] && 
          squares[j] === squares[j + 24] && 
          squares[j] === squares[j + 32]) {
          return squares[j];
        }
      }
    }
    
    // check diagonals
    for (let i = 0; i < 4; i++) { // The reason why each thing is in increments of 9, is because since the board is set in a 8x8 grid, the next square that is diagonal from the previous square is 9 squares away
      for (let j = i; j < i + 32; j += 8) {
        if (squares[j] && 
          squares[j] === squares[j + 9] && 
          squares[j] === squares[j + 18] && 
          squares[j] === squares[j + 27] && 
          squares[j] === squares[j +36]) {
          return squares[j];
        }
      }
      for (let j = i + 4; j < i +36; j +=8) { // This checks the reverse diagonal, and it is in increments of 7, because the next square that is diagonal from the previous square is 7 squares away
        if (squares[j] && 
          squares[j] === squares[j +7] && 
          squares[j] === squares [j+14] && 
          squares [j]==squares [j+21]&&
          squares [j]==squares [j+28]){
          return squares [j];
        }
      }
      
    
  }
  return null;
  }
