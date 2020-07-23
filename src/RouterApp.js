import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Navigation from './components/Navigation/index';
import About from './components/About';
import Cities from './components/Cities';

const RouterApp = () => {
    const cityName = "Seoul";
  return (
    <div className="App">
      <Navigation />
      <Header  cityName={cityName}/>
      <p>Hello world!</p>

     }
      <Route exact path="/" component={Home} />
      <Route path = "/cities" component={Cities}/>
      <Route path="/about" component={About} />
    </div>
  );
};
export default RouterApp;