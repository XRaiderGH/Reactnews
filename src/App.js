import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
