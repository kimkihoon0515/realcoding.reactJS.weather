import React from 'react'; //react를 가져와서 React로 쓸것이다.
import { BrowserRouter} from 'react-router-dom';
import RouterApp from './RouterApp';
import Header from './components/Header'
import './App.css';

function App() {
  const cityName = "Seoul";

  console.log(BrowserRouter);
  return (
    <BrowserRouter>
    <RouterApp />
    </BrowserRouter>
  );
}

export default App;
