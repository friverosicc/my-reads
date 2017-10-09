import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = ({ book }) => {
  const authors = book.authors.map(author => (<div>{author}</div>))

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <BookShelfChanger />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

export default Book
