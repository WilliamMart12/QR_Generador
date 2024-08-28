import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = async () => {
    if (url) {
      try {
        const response = await fetch('https://qr-generador-back.onrender.com/generate_qr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url }),
        });

        if (!response.ok) {
          throw new Error('Error al generar el código QR');
        }

        const blob = await response.blob();
        const qrCodeUrl = URL.createObjectURL(blob);
        setQrCode(qrCodeUrl);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src="/Fondo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="title">QR Code Generator</h1>
        <div className="input-container">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <button onClick={generateQrCode}>Generate QR</button>
        </div>
        {qrCode && <img src={qrCode} alt="QR Code" className="qr-code" />}
      </div>
    </div>
  );
}

export default App;
