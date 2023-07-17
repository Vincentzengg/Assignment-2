import "./Home.css"


const Home = () => {
    return (
        <>
        <p id='head1' class='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-x-1/2 text-white font-sans text-4xl font-weight: 200'>Software Assignment 2</p>
        <p id='head2' class='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-x-1/2 text-white font-sans text-4xl font-weight: 200'>Longest Line game 
        <p> By Vincent Zeng</p>
            </p>
        
        <button id="myButton" class="flex items-center justify-center 
        absolute border-2 border-white bg-transparent font-sans text-white 
        w-64 h-12 text-3xl rounded opacity-50 top-96 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md" > 
        Play</button>

        <button id="myButton" class="flex items-center justify-center
        absolute border-2 border-white bg-transparent font-sans text-white 
        w-64 h-12 text-3xl rounded opacity-50 top-1/2 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md" > 
        Settings</button>

        <button id="myButton" class="flex items-center justify-center
        absolute border-2 border-white bg-transparent font-sans text-white 
        w-64 h-12 text-3xl rounded opacity-50 top-1/2 translate-y-20 bottom-0 left-0 right-0 mx-auto 
        transition duration-300 hover:border-gray-700 hover:bg-gray-200 
        hover:cursor-pointer hover:text-gray-700 hover:opacity-80 hover:shadow-md" > 
        How To Play</button>
        
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
export default Home