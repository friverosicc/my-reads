import React from 'react'
import Book from './Book'

const BookList = ({ books, moveBookToAnotherShelf }) => {
  const bookList = books.map( book => <Book key={book.id} book={book} moveBookToAnotherShelf={moveBookToAnotherShelf}/>)

  return (
    <ol className="books-grid">
      {bookList}
    </ol>
  )
}

export default BookList
