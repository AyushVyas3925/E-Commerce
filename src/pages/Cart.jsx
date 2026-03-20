import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectTotalPrice, removeFromCart, updateQuantity } from '../store/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const cart = useSelector(selectCartItems)
    const totalPrice = useSelector(selectTotalPrice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Your Cart is Empty!</h2>
    }

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Shopping Cart</h1>


            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {cart.map(item => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid var(--border-card)", padding: "15px", borderRadius: "10px", background: "var(--bg-card)" }}>

                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <img src={item.thumbnail} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }} />
                            <div>
                                <h3 style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-secondary)" }}>Price: ${item.price}</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <button 
                                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                    style={{ background: "var(--input-bg)", color: "var(--text-primary)", border: "1px solid var(--border-card)", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                                >-</button>
                                <span style={{ color: "var(--text-primary)" }}>{item.quantity}</span>
                                <button 
                                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                    style={{ background: "var(--input-bg)", color: "var(--text-primary)", border: "1px solid var(--border-card)", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                                >+</button>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: "1.2rem", minWidth: "80px", textAlign: "right", color: "var(--text-primary)" }}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                style={{ background: "#ff4757", color: "white", padding: "5px 10px", borderRadius: "5px" }}
                            >
                                Remove
                            </button>
                        </div>

                    </div>
                ))}
            </div>


            <div style={{ marginTop: "30px", textAlign: "right", borderTop: "2px solid var(--border-card)", paddingTop: "15px" }}>
                <h2 style={{ color: "var(--text-primary)" }}>Total: ${totalPrice.toFixed(2)}</h2>
                <button
                    onClick={() => navigate('/checkout')}
                    style={{ background: "#4CAF50", color: "white", padding: "12px 30px", fontSize: "1.1rem", marginTop: "15px", borderRadius: "8px", fontWeight: "bold" }}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart