import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes'
import Navbar from './Navbar'

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage._token) {
      setUserLoggedIn(true)
    }
    else setUserLoggedIn(false);
  }, [userLoggedIn, setUserLoggedIn]);


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar userLoggedIn={userLoggedIn} />
        <Routes userLoggedIn={userLoggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
