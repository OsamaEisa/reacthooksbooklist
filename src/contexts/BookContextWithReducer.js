import React, { createContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContextWithReducer = createContext();

const BookContextProvider = (props) => {

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : []
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BookContextWithReducer.Provider value={{books, dispatch }}>
      { props.children }
    </BookContextWithReducer.Provider>
  )
}


export default BookContextProvider;