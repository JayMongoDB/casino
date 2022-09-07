
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
    <div class='main-container'>
    <Header />
      <Routes>
      <Route path="/" element={<HomePage/>}/>

      </Routes>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
