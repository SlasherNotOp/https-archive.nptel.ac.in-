import Nptl from "./Nptl"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nptl/>}></Route>
        <Route path="/Ecertificate" element={<Nptl/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
