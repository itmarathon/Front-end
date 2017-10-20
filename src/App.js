import React, { Component } from 'react';
import './App.css';
import { Header, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <Header />
        <p>Hello, World!</p>
        <div id="indent"></div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;