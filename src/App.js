import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <p>Hello, World!</p>
        <div id="indent"></div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;