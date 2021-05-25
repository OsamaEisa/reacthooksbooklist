import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import { BookContextWithReducer } from '../contexts/BookContextWithReducer';

const BookList = () => {
  const { books } = useContext(BookContextWithReducer);
  
  return books.length ? (
    <div className="book-list">
      <ul>
        { books.map(book => {
          return ( <BookDetails book={book} key={book.id}/> );
        }) }
      </ul>
    </div>
  ) : (
    <div className='empty'>There are no books to read...</div>
  )
}
 
export default BookList;