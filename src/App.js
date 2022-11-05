import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ToolkitPage from './pages/ToolkitPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/toolkit' element={<ToolkitPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
