import React from 'react';

const BookItem = ({ book, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      
      {/* <li> */}
        {/* <span>{book.title} by {book.author} ({book.year})</span> */}
        <td>
        <button onClick={onEdit} className="btn btn-primary mr-2">Edit</button>
        <button onClick={onDelete} className="btn btn-danger">Delete</button>
      {/* </li> */}
      </td>
    </tr>

  );
};

export default BookItem;
