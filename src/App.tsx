import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <model-viewer src="assets/inkonic-full.glb"
            alt="Test"
            ar
            auto-rotate
            camera-controls></model-viewer>
        </div>
        <p>
          Web based 3D and Augmented Reality example.
        </p>
        <a
          className="App-link"
          href="https://www.protocol.com/entertainment/apple-webxr-ar-ios-iphone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use Chrome on Apple devices
        </a>
      </header>
    </div>
  );
}

export default App;
