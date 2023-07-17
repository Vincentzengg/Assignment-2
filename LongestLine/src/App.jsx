
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from "./components/Header.jsx"
import About from './pages/About'

import PlayerVsPlayer from './pages/PlayerVsPlayer'
import EasyBot from './pages/EasyBot'
import HardBot from './pages/HardBot'
import Play from './pages/play'


function App() {
  

  return (
    <div>
      <Router>  
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/PlayerVsPlayer" element={<PlayerVsPlayer />} />
            <Route path="/EasyBot" element={<EasyBot />} />
            <Route path="/HardBot" element={<HardBot />} />
            <Route path="/play" element={<Play />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
