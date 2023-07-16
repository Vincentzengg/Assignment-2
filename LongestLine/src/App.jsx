
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header'
import About from './pages/About'
import Settings from './pages/Settings'
import PlayerVsPlayer from './pages/PlayerVsPlayer'


function App() {
  

  return (
    <div>
      <Router>  
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/PlayerVsPlayer" element={<PlayerVsPlayer />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
