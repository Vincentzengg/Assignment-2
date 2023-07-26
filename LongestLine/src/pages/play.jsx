import { useNavigate } from 'react-router-dom'

const Play = () => {
    const navigateTo = useNavigate()
    return (

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

        <button id="myButton" class="flex items-center justify-center 
        absolute border-2 border-white bg-transparent font-sans text-white 
        w-64 h-20 text-3xl rounded opacity-50 top-96 bottom-0 left-0 right-1/2 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md
        rounded-lg" 
        onClick={() => navigateTo('/HardBot')}> 
        Hard Bot</button>

        <button id="myButton" class="flex items-center justify-center 
        absolute border-2 border-white bg-transparent font-sans text-white 
        w-64 h-20 text-3xl rounded opacity-50 top-96 bottom-0 left-1/2 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md
        rounded-lg" 
        onClick={() => navigateTo('/EasyBot')}> 
        Easy Bot</button>

        <button id="myButton" class="flex items-center justify-center 
        absolute border-2 border-white bg-transparent font-sans text-white 
        w-64 h-20 text-3xl rounded opacity-50 top-96 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md
        rounded-lg" 
        onClick={() => navigateTo('/PlayerVsPlayer')}> 
        Player Vs Player</button>



        </>
    )

}
export default Play