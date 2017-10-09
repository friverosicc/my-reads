import React from 'react'
import Book from './Book'

const BookList = ({ books }) => {
  const bookList = books.map( book => <Book key={book.id} book={book} />)

  return (
    <ol className="books-grid">
      {bookList}
    </ol>
  )
}

export default BookList
