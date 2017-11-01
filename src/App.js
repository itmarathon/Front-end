import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';


const App = () => (
  <div>
    <div className="App">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/sign-in" exact component={SignInPage} />
      <Route path="/sign-up" exact component={SignUpPage} />
    </div>
    <Footer />
  </div>
);

export default App;