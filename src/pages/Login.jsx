import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login());
        navigate('/cart');
    };

    return (
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{
                background: 'var(--bg-card)',
                padding: '50px 40px',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                boxShadow: '0 8px 32px var(--border-color)',
                border: '1px solid var(--border-color)',
                maxWidth: '400px',
                width: '100%'
            }}>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>Welcome Back</h2>
                <p style={{ margin: '0 0 30px 0', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    Please login as a guest to continue to secure areas like checkout.
                </p>
                <button
                    className="btn-primary"
                    onClick={handleLogin}
                    style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}
                >
                    Login as Guest
                </button>
            </div>
        </div>
    );
}

export default Login;
