
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header'
import About from './pages/About'
import Settings from './pages/Settings'

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
            
          </Routes>
      </Router>
    </div>
  )
}

export default App
