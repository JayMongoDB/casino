
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import GamesDirectoryPage from './pages/GamesDirectoryPage.js';
import SubHeader from './components/SubHeader';

function App() {
  return (
    <div className='App'>
    <Header />
    <SubHeader/>
    <div class='main-container'>
    
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='directory' element={<GamesDirectoryPage />} />
      </Routes>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
