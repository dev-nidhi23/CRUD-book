// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  const addBook = (book, id = null) => {
    if (id) {
      // Update existing book
      setBooks(books.map(b => (b.id === id ? book : b)));
    } else {
      // Add new book
      setBooks([...books, book]);
    }
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleEdit = (book) => {
    setEditBook(book);
  };

  const handleCancelEdit = () => {
    setEditBook(null);
  };

  return (
    <div>
      <h1 class='text-center fs-2'>Book Collection</h1>
      <BookForm
        addBook={addBook}
        editBook={editBook}
        setEditing={handleCancelEdit}
      />
      <BookList
        books={books}
        onEdit={handleEdit}
        onDelete={deleteBook}
      />
    </div>
  );
}

export default App;
