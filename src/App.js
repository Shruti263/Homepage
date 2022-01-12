import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Maincontent />
      <Footer/>
    </div>
  );
}

export default App;
