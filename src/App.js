import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import SignInPage from './containers/SignInPage';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <div className="App">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-in" exact component={SignInPage} />
      </div>
      <div id="indent" />
      <Footer />
    </div>
  </Provider>
);

export default App;