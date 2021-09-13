import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Project from './components/Project';
import Footer from './components/Footer';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Card />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
