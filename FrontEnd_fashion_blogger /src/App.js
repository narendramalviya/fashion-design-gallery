import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

const App =()=> {
  return (
    <div className="App">
      <Header />
      <Home/>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
