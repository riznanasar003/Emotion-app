import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import About from './Components/About';
import History from './Components/History';
import SentimentChart from './Components/SentimentChart';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/sentiment' element={<SentimentChart/>}/>
   
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
