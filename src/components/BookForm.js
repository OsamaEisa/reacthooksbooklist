import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import { BookContextWithReducer } from '../contexts/BookContextWithReducer';

const BookForm = () => {
  
  // const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContextWithReducer);
  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook();
    dispatch({type: 'ADD_BOOK', book: { title, author}});
    setTitle('');
    setAuthor('');
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='book title..' value={title} onChange={handleTitle} required/>
      <input type='text' placeholder='book author..' value={author} onChange={handleAuthor} required/>
      <input type='submit' value='Add Book' />
    </form>
  );
}

export default BookForm;