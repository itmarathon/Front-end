import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import FlatPage from './containers/FlatPage';
import SignInPage from './containers/SignInPage';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-in" exact component={SignInPage} />
        <Route path="/flats/:id" exact component={FlatPage} />
        <div id="indent" />
      </div>
      <Footer />
    </div>
  </Provider>
);

export default App;