import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Logo from './Components/Logo';
// import { Router } from '@reach/router';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Logo />

    {/* <Router className="Main"/> */}
    <Footer />
    </div>
  );
}

export default App;
