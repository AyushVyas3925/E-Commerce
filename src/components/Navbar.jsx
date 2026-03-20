import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, ShoppingBag, LogIn, LogOut, Sun, Moon } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTotalItems } from '../store/slices/cartSlice'
import { logout } from '../store/slices/authSlice'
import { toggleTheme } from '../store/slices/themeSlice'

function Navbar() {
    const totalItems = useSelector(selectTotalItems)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const themeMode = useSelector(state => state.theme.mode)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "var(--bg-navbar)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid var(--border-color)",
            padding: "15px 0"
        }}>
            <div className="app-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                {/* Logo */}
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <ShoppingBag color="var(--accent)" size={28} />
                    <span style={{ fontSize: "1.5rem", fontWeight: "bold", background: "var(--subheading-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        ShopZone
                    </span>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    {/* Theme Toggle Button */}
                    <button 
                        onClick={() => dispatch(toggleTheme())}
                        style={{ 
                            background: "transparent", 
                            border: "none", 
                            color: "var(--text-primary)", 
                            cursor: "pointer", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center",
                            padding: "8px",
                            borderRadius: "50%",
                            transition: "background 0.2s"
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--card-bg)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                        {themeMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Link to="/" style={{ color: "var(--text-primary)", fontWeight: "500" }}>Home</Link>
                    <Link to="/shop" style={{ color: "var(--text-primary)", fontWeight: "500" }}>Shop</Link>
                    <Link to="/contact" style={{ color: "var(--text-primary)", fontWeight: "500" }}>Contact</Link>

                    {isAuthenticated ? (
                        <button onClick={handleLogout} style={{ color: "var(--text-primary)", fontWeight: "500", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", padding: 0 }}>
                            <LogOut size={18} /> Logout
                        </button>
                    ) : (
                        <Link to="/login" style={{ color: "var(--text-primary)", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px" }}>
                            <LogIn size={18} /> Login
                        </Link>
                    )}

                    {/* Cart Button */}
                    <Link to="/cart" style={{ position: "relative" }}>
                        <div style={{
                            background: totalItems > 0 ? "linear-gradient(135deg, var(--accent), #747bff)" : "var(--input-bg)",
                            padding: "10px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s"
                        }}>
                            <ShoppingCart size={20} color={totalItems > 0 ? "white" : "var(--text-primary)"} />
                        </div>
                        {totalItems > 0 && (
                            <span style={{
                                position: "absolute",
                                top: "-5px",
                                right: "-5px",
                                background: "#ff4757",
                                color: "white",
                                fontSize: "0.75rem",
                                fontWeight: "bold",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px solid #121212"
                            }}>
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar