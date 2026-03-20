import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = memo(({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div style={{
            background: "var(--bg-card)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border-color)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "100%"
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
                <div style={{ 
                    position: "relative", 
                    height: "220px", 
                    overflow: "hidden", 
                    background: 'var(--input-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Skeleton Loader */}
                    {!imageLoaded && (
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(90deg, var(--input-bg) 25%, var(--border-color) 50%, var(--input-bg) 75%)",
                            backgroundSize: "200% 100%",
                            animation: "shimmer 1.5s infinite linear"
                        }} />
                    )}
                    
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        onLoad={() => setImageLoaded(true)}
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain',
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />
                    
                    <div style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        backdropFilter: "blur(4px)",
                        textTransform: 'capitalize',
                        zIndex: 2
                    }}>
                        {product.category.replace(/-/g, ' ')}
                    </div>
                </div>

                <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <h3 style={{ 
                            margin: 0, 
                            fontSize: "1.1rem", 
                            fontWeight: "600", 
                            color: "var(--text-primary)",
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {product.title}
                        </h3>
                        <span style={{ fontWeight: "bold", color: "var(--accent)", fontSize: "1rem", marginLeft: '10px' }}>
                            ${product.price}
                        </span>
                    </div>
                    <p style={{ 
                        color: "var(--text-secondary)", 
                        fontSize: "0.85rem", 
                        lineHeight: "1.5", 
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {product.description}
                    </p>
                </div>
            </Link>

            <div style={{ padding: "0 20px 20px 20px" }}>
                <Link to={`/product/${product.id}`} style={{ display: "block" }}>
                    <button style={{
                        width: "100%",
                        padding: "10px",
                        background: "var(--input-bg)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--input-border)",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        transition: "all 0.2s"
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "var(--accent)";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "var(--input-bg)";
                            e.currentTarget.style.color = "var(--text-primary)";
                        }}
                    >
                        View Details
                    </button>
                </Link>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </div>
    );
});

export default ProductCard;
