import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn/signIn';

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