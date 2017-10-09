import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const Main = ({ booksReading, booksToRead, booksRead }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf key="reading" title="Currently Reading" books={booksReading} />
          <BookShelf key="to-read" title="Want to Read" books={booksToRead} />
          <BookShelf key="read" title="Read" books={booksRead} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Main
