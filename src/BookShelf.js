import React from 'react'
import Book from './Book'

const BookShelf = ({ title, books }) => {
  const bookList = books.map( book => <Book key={book.title} book={book} />)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { bookList }  
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
