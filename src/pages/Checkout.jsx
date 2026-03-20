import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';

function Checkout() {
    const [orderId] = useState(() => Math.floor(100000 + Math.random() * 900000));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="fade-in" style={{ textAlign: 'center', marginTop: '60px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Checkout Passed</h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                Thank you for your order! Your dummy payment has been processed securely.
            </p>

            <div style={{
                marginTop: '40px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 60px',
                borderRadius: '16px',
                display: 'inline-block',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(76, 175, 80, 0.2)',
                    color: '#4CAF50',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    margin: '0 auto 20px'
                }}>✓</div>
                <h3 style={{ color: '#4CAF50', fontSize: '1.5rem', margin: '0 0 10px 0' }}>Order Confirmed</h3>
                <p style={{ margin: 0, color: 'rgba(0, 0, 0, 0.8)' }}>
                    Order ID: <strong style={{ letterSpacing: '2px' }}>#{orderId}</strong>
                </p>
            </div>
        </div>
    );
}

export default Checkout;
