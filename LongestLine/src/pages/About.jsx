
import { useNavigate } from "react-router-dom"


const About = () => {
    
    const navigateTo = useNavigate()

    return (

        <>
        
        
        
        <div class="relative flext justify-center top-48">
        <div class="w-112 h-32 bg-gray-100 opacity-70 rounded-lg">
            <h1 class="text-stone-950 text-xl font-bold font-mono"> How To Play</h1>
            <h1 class="text-stone-950 text-lg font-mono">The goal of the game is to create a straight line of 5 squares. The line can be horizontal, vertical, or diagonal. To play, simply click on a square when it’s your turn. The other player or the bot will then take their turn by clicking on a square. The first player to create a straight line of 5 squares wins the game.</h1>


        </div>
        <div class="relative w-112 h-32 bg-gray-100 opacity-70 rounded-lg top-10"> 
            <h1 class="text-stone-950 text-xl font-bold font-mono"> Tips and tricks</h1>
            <h1 class="text-stone-950 text-base font-mono">1. Try aim to make a line with 4 squares, as if the oppponent tries to block, you can place a square on the opposite side thus winning.</h1>
            <h1 class="text-stone-950 text-base font-mono">2. Try to control the center, as this can give you more options and flexibility</h1>
            <h1 class="text-stone-950 text-base font-mono">3. Keep an eye out on your opponent's moves, and block their attempts to create a completed line</h1>
        </div>

        <button id="myButton" class="flex items-center justify-center 
        relative border-2 border-white bg-transparent font-sans text-white 
        w-80 h-12 text-3xl rounded opacity-50 top-40 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md" 
        onClick={() => navigateTo('/')}> 
        Return Home</button>
        </div>
        


        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div>
        </>
    )

}
export default About