import React, { useState, useEffect } from 'react';

const BookForm = ({ addBook, editBook, setEditing }) => {
  const [book, setBook] = useState({ title: '', author: '', year: '' });

  useEffect(() => {
    if (editBook) {
      setBook(editBook);
    }
  }, [editBook]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editBook) {
      // Update existing book
      addBook(book, book.id);
      setEditing(null);
    } else {
      // Add new book
      addBook({ ...book, id: Date.now() });
    }
    setBook({ title: '', author: '', year: '' });
  };

  return (
    <div className="container-fluid d-flex justify-content-center">
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
        />
         
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />



        <label htmlFor="year">Year</label>
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={book.year}
          onChange={handleChange}
          required
        />

        <div className="text-center mt-3">
          <button type="submit">{editBook ? 'Update' : 'Add'} Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
