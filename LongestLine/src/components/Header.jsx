import { useNavigate } from "react-router-dom"
import { useState } from "react"
import soundMusic from "../pages/assets/background_music.mp3"




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




export default function Header() {
  const navigateTo = useNavigate()
  const [MusicAudio, setMusic] = useState(new Audio(soundMusic)); //This is the audio for the game's music
  const [isPlaying, setIsPlaying] = useState(false);

const handlePlaying = () => {
  if (isPlaying) { //Basically if isPlaying is FALSE, it pauses the audio and if it is TRUE, it plays the audio
    MusicAudio.pause();
  } else if (!isPlaying){
    MusicAudio.play();
    MusicAudio.loop = true; //This makes the audio loop
  }
  setIsPlaying(!isPlaying); // At the end of all of it, it sets isPlaying to the opposite of what it was before, so that it can be toggled (when the button presses it)
}; 

  return (
    <>

    <button className="absolute bottom-20 right-20 bg-gray-800 border-thin border-white
      transition duration-300 hover:border-gray-700 hover:bg-gray-200 
      hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md
      
      " onClick={handlePlaying}>
        {isPlaying ? musicIcon : musicIconMuted}
      </button>

      
    
    <div class="w-auto h-16 bg-gray-800 rounded-lg">
      <div class="relative text-base font-mono top-1.5 text-xl flex justify-center text-white">

      
        

        <button class="absolute left-36 bg-gray-800 border-solid border-white
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md
        "
        onClick={() => navigateTo('/')}>
          Home
        </button>

        
        <button class="absolute bg-gray-800 border-solid border-white
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md
        "
        onClick={() => navigateTo('/Play')}>
          Play
        </button>

        <button 
        class="absolute right-20 bg-gray-800 border-solid border-white flex justify-center transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md"
        onClick={() => navigateTo('/About')}>
          How To Play
        </button>

      </div>
    </div>
    </>
  )
}
