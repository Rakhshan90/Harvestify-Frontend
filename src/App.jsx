// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navigation/Navbar"
import Login from "./Components/User/Login"
import Register from "./Components/User/Register"
import Home from "./Components/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
