// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Adress from './pages/Adress';
import Home from './pages/Home';

function App() {


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="adress" element={<Adress />}></Route>
      </Routes>
    </div>
  );
}

export default App;
