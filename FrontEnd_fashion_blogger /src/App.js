import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin';

const App =()=> {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/admin' component={Admin} />
      
    </div>
  );
}

export default App;
