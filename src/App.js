import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ToolkitPage from './pages/ToolkitPage';
import FavoritesPage from './pages/FavoritesPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/toolkit' element={<ToolkitPage />} />
        <Route path='/Favorites' element={<FavoritesPage />} />
        <Route path='/Feedback' element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
