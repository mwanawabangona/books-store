import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import AllBooks from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AllBooks />}/>
          <Route exact path="/categories" element={<Categories />}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
