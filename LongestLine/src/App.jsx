
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

import About from './pages/About'
import Settings from './pages/Settings'
import PlayerVsPlayer from './pages/PlayerVsPlayer'
import EasyBot from './pages/EasyBot'
import HardBot from './pages/HardBot'

function App() {
  

  return (
    <div>
      <Router>  
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/PlayerVsPlayer" element={<PlayerVsPlayer />} />
            <Route path="/EasyBot" element={<EasyBot />} />
            <Route path="/HardBot" element={<HardBot />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
