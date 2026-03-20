import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import Contact from "./pages/Contact"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const themeMode = useSelector(state => state.theme.mode)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode)
  }, [themeMode])

  return (
    <div className="app-container-root" data-theme={themeMode} style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", transition: "all 0.3s ease" }}>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App
