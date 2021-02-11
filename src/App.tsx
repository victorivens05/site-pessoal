import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site do vitão 2<br />
          url: {process.env.REACT_APP_API_URL}<br />
          host: {process.env.REACT_APP_API_HOST}<br />
        </p>
      </header>
    </div>
  );
}

export default App;
