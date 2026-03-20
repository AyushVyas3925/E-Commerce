import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/slices/cartSlice"
import { ArrowLeft, Star, ShoppingCart, Check } from "lucide-react"

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [added, setAdded] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching products:', err)
                setLoading(false)
            })
    }, [id])

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        setAdded(true)
        setTimeout(() => setAdded(false), 3000)
    }

    if (loading) return <div className="fade-in" style={{ textAlign: "center", marginTop: "100px", fontSize: "1.5rem" }}>Loading Details...</div>
    if (!product) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h2>

    return (
        <div className="fade-in" style={{ padding: "40px 20px" }}>
            <Link to="/shop" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "var(--text-secondary)", marginBottom: "30px", fontSize: "0.9rem" }}>
                <ArrowLeft size={16} /> Back to Shop
            </Link>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "start" }}>

                {/* Product Image */}
                <div style={{
                    background: "var(--bg-card)",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid var(--border-card)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain", borderRadius: "10px" }}
                    />
                </div>

                {/* Product Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div>
                        <span style={{ background: "var(--accent)", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" }}>
                            {product.category.toUpperCase()}
                        </span>
                        <h1 style={{ fontSize: "3rem", margin: "15px 0 10px 0", lineHeight: "1.1", color: "var(--text-primary)" }}>{product.title}</h1>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fbbf24" }}>
                            <Star fill="#fbbf24" size={20} />
                            <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>{product.rating} / 5.0</span>
                        </div>
                    </div>

                    <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.6" }}>
                        {product.description}
                    </p>

                    <div style={{ margin: "20px 0", borderTop: "1px solid var(--border-card)", borderBottom: "1px solid var(--border-card)", padding: "20px 0" }}>
                        <h2 style={{ fontSize: "2.5rem", margin: 0, color: "var(--text-primary)" }}>
                            ${product.price}
                        </h2>
                        <p style={{ margin: "5px 0 0 0", color: "var(--text-muted)" }}>Inclusive of all taxes</p>
                    </div>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <button
                            onClick={handleAddToCart}
                            className="btn-primary"
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                                padding: "18px",
                                background: added ? "#4CAF50" : undefined
                            }}
                        >
                            {added ? <><Check size={20} /> Added to Cart</> : <><ShoppingCart size={20} /> Add to Cart</>}
                        </button>

                        <button style={{
                            padding: "18px",
                            border: "1px solid var(--border-card)",
                            background: "transparent",
                            color: "var(--text-primary)",
                            borderRadius: "8px",
                            aspectRatio: "1/1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Star size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
