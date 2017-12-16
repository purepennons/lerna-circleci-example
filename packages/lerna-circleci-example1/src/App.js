import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Example } from './react-component-node-modules/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Component Demo Page</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="content">
          <Example name="My first react component" />
        </div>
      </div>
    );
  }
}

export default App;
