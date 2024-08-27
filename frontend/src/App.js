import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = () => {
    if (url) {
      setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`);
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
