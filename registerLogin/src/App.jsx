import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import './App.css'


function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <Routes>
     
      <Route path='/' element = {<Home/>} />
      <Route path='/register' element = {<Register/>} />
      <Route path='/login' element = {<Login/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
