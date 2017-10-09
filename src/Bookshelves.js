import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const Bookshelves = (props) => {
  const shelfTypes = {
    currentlyReading: 'currentlyReading',
    wantToRead: 'wantToRead',
    read: 'read'
  }

  const booksCurrentlyReading = props.books.filter( book => book.shelf === shelfTypes.currentlyReading)
  const booksWantToRead = props.books.filter( book => book.shelf === shelfTypes.wantToRead)
  const booksRead = props.books.filter( book => book.shelf === shelfTypes.read)

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf key="reading" title="Currently Reading" books={booksCurrentlyReading} moveBookToAnotherShelf={props.moveBookToAnotherShelf}/>
          <BookShelf key="to-read" title="Want to Read" books={booksWantToRead} moveBookToAnotherShelf={props.moveBookToAnotherShelf}/>
          <BookShelf key="read" title="Read" books={booksRead} moveBookToAnotherShelf={props.moveBookToAnotherShelf}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
  
}

export default Bookshelves
