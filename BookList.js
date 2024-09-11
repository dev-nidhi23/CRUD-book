import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="container mt-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <ul> */}
            {books.map(book => (
              <BookItem
                key={book.id}
                book={book}
                onEdit={() => onEdit(book)}
                onDelete={() => onDelete(book.id)}
              />
            ))}
          {/* </ul> */}
        </tbody>
      </table>
    </div>
  );
}



export default BookList;
