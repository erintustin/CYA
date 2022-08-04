import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SourcesPage from './pages/SourcesPage';
import ToolkitPage from './pages/ToolkitPage';
import ResourceDetailPage from './pages/ResourceDetailPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/toolkit' element={<ToolkitPage />} />
        <Route
                    path='directory/:resourceName'
                    element={<ResourceDetailPage />}
        />
        <Route path='/sources ' element={<SourcesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
