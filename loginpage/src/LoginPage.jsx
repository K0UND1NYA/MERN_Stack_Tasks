import React from 'react';
import { createPortal } from 'react-dom';
function LoginPage({ children }) {
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const contentStyle = {
        padding: '25px',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
        minWidth: '280px',
    };
    return createPortal(
       <div style={modalStyle}>
            <div style={contentStyle}>{children}</div>
        </div>, 
        document.getElementById("modal-root"));
}
export default LoginPage;