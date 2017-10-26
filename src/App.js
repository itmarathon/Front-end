import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignIn from './Components/signIn/signIn';

const App = () => (
  <div>
    <div className="App">
      <Header />
      <p>Hello, World!</p>
      <SignIn />
      <div id="indent" />
    </div>
    <Footer />
  </div>
);

export default App;