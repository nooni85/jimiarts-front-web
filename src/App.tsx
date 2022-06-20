import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

import Header from './fragments/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" style={{ backgroundColor: 'blue' }}>
          <img src={ logo } className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    </BrowserRouter>
  );
}

export default App;
