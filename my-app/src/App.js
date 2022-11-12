import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './pages/Home'
import Adress from './pages/Address'
import './App.css'

function App() {
  return <div className="App">
    <Header />
    <div className='App-content'>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="address" element={<Adress />}></Route>
      </Routes>
    </div>
  </div>
}

export default App
