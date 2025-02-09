"use client";

import React from 'react';

const Gradient: React.FC = () => {
    const gradientStyle = {
        background: 'linear-gradient(45deg, #1b478e, #2f5b9e, #4471af, #5a87c0, #709dcf, #87b5df, #9fcdf0, #b8e6ff, #f79c9e, #e58382, #d36a67, #c1524f, #af3a38, #9d2424, #8c0e11, #7b0000, #e91e27)',
        backgroundSize: '200% 200%',
        animation: 'gradientRotate 15s linear infinite',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    };

    return (
        <div style={gradientStyle}>
            <style jsx>{`
        @keyframes gradientRotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </div>
    );
};

export default Gradient;
