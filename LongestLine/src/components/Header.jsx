import { useNavigate } from "react-router-dom"




export default function Header() {
  const navigateTo = useNavigate()
  return (
    <div class="w-auto h-16 bg-gray-800 rounded-lg">
      <div class="relative text-base font-mono top-1.5 text-xl flex justify-center text-white">


        <button class="relative right-56 bg-gray-800 border-solid border-white"
        onClick={() => navigateTo('/')}>
          Home
        </button>

        <button 
        class= "relative flex justify-center bg-gray-800 border-solid border-white"
        onClick={() => navigateTo('/play')}>
          Play
        </button>


        <button 
        class="relative left-56 bg-gray-800 border-solid border-white flex justify-center"
        onClick={() => navigateTo('/About')}>
          How To Play
        </button>

      </div>
    </div>

  )
}
