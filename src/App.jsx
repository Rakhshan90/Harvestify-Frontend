// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navigation/Navbar"
import Login from "./Components/User/Login"
import Register from "./Components/User/Register"
import Home from "./Components/Home"
import CreateProduct from "./Components/Product/CreateProduct"
import CreateAuction from "./Components/Auction/CreateAuction"
import Auctions from "./Components/Auction/Auctions"
import Auction from "./Components/Auction/Auction"
import ProductList from "./Components/Product/ProductList"
import Product from "./Components/Product/Product"
import UpdateProduct from "./Components/Product/UpdateProduct"
import PrivateProtectRoute from "./Components/Navigation/ProtectedRoutes/PrivateProtectRoute"
import AdminProtectRoute from "./Components/Navigation/ProtectedRoutes/AdminProtectRoute"
import UpdatePassword from "./Components/User/UpdatePassword"
import ForgotPassword from "./Components/User/ForgotPassword"
import ResetPassword from "./Components/User/ResetPassword"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/create-product" element={<PrivateProtectRoute>
            <CreateProduct />
          </PrivateProtectRoute>} />
          <Route path="/update-product/:id" element={<PrivateProtectRoute>
            <UpdateProduct />
          </PrivateProtectRoute>} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/auction/:id" element={<PrivateProtectRoute>
            <Auction />
          </PrivateProtectRoute>} />
          <Route path="/create-auction" element={<AdminProtectRoute>
            <CreateAuction />
          </AdminProtectRoute>} />
          <Route path="/update-password" element={<PrivateProtectRoute>
            <UpdatePassword />
          </PrivateProtectRoute>} />
          <Route path="/forgot-password" element={
            <ForgotPassword />} />
          <Route path="/reset-password/:token" element={
            <ResetPassword />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
