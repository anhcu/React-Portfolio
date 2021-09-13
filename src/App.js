import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Project from './components/Project';
import Footer from './components/Footer';
import Page from './Page.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className='app'>
    <Navbar/>
    <div className='sections'>
      <Header />
      <Card />
      <Project />
      <Footer />
    </div>
    </div>
  );
}

export default App;
