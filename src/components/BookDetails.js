import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { BookContextWithReducer } from '../contexts/BookContextWithReducer';


const BookDetails = ({ book }) => {
  
  // const { removeBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContextWithReducer);
  return (
     <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
     {/* <li onClick={() => removeBook(book.id)}> */}
       <div className='title'>{book.title}</div>
       <div className='author'>{book.author}</div>
     </li>
  );
}
 
export default BookDetails;