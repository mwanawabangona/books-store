import React from 'react';

const AddNewBook = () => (
  <form className="add-book-section">
    <h1>ADD NEW BOOK</h1>
    <input type="text" placeholder="Book title" />
    <select>
      <option value="">Category</option>
      <option value="Comedy">Romance</option>
      <option value="Documentary">Documentary</option>
      <option value="Sci-Fi">Fiction</option>
      <option value="Anime">Crime</option>
    </select>
    <button type="submit">Add</button>
  </form>
);

export default AddNewBook;
