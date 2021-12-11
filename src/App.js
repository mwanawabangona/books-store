import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';

const App = () => {
  const booksList = useSelector((state) => state.booksReducer);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookList booksList={booksList} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
