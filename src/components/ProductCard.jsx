import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = memo(({ product }) => {
    return (
        <div style={{
            background: "var(--card-bg)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            position: "relative",
            display: "flex",
            flexDirection: "column"
        }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit", flex: 1 }}>
                <div style={{ position: "relative", height: "250px", overflow: "hidden", background: 'white' }}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    <div style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        backdropFilter: "blur(4px)",
                        textTransform: 'capitalize'
                    }}>
                        {product.category.replace('-', ' ')}
                    </div>
                </div>

                <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600", color: "var(--text-primary)" }}>
                            {product.title}
                        </h3>
                        <span style={{ fontWeight: "bold", color: "var(--accent)", fontSize: "1.1rem" }}>
                            ${product.price}
                        </span>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
                        {product.description.substring(0, 60)}...
                    </p>
                </div>
            </Link>

            <div style={{ padding: "0 20px 20px 20px" }}>
                <Link to={`/product/${product.id}`} style={{ display: "block" }}>
                    <button style={{
                        width: "100%",
                        padding: "12px",
                        background: "var(--input-bg)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border-card)",
                        borderRadius: "8px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "background 0.2s"
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--border-color)"}
                        onMouseLeave={e => e.currentTarget.style.background = "var(--input-bg)"}
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
});

export default ProductCard;