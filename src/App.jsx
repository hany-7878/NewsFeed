import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <Router basename="/NewsFeed/">  {/* Set the base path here */}
      <Header onCategoryChange={setCategory} activeCategory={category} />
      <Routes>
        <Route path="/" element={<Home category={category} />} />
      </Routes>
    </Router>
  );
};

export default App;
