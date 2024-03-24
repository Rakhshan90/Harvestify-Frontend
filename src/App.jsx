// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navigation/Navbar"
import Login from "./Components/User/Login"
import Register from "./Components/User/Register"
import Home from "./Components/Home"
import CreateProduct from "./Components/Product/CreateProduct"
import CreateAuction from "./Components/Auction/CreateAuction"
import Auctions from "./Components/Auction/Auctions"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/create-auction" element={<CreateAuction />} />
          <Route path="/auctions" element={<Auctions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
