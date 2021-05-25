import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { BookContextWithReducer } from '../contexts/BookContextWithReducer';


const Navbar = () => {
  const { books } = useContext(BookContextWithReducer);
  return (
    <div className="navbar">
      <h1>Our Reading List</h1>
      <p>You have : { books.length } books to get through...</p>
    </div>
  );
}
 
export default Navbar;