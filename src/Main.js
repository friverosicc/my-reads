import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = { books: [] }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
  }


  render() {
    const shelfTypes = {
      currentlyReading: 'currentlyReading',
      wantToRead: 'wantToRead',
      read: 'read'
    }

    const booksCurrentlyReading = this.state.books.filter( book => book.shelf === shelfTypes.currentlyReading)
    const booksWantToRead = this.state.books.filter( book => book.shelf === shelfTypes.wantToRead)
    const booksRead = this.state.books.filter( book => book.shelf === shelfTypes.read)

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf key="reading" title="Currently Reading" books={booksCurrentlyReading} />
            <BookShelf key="to-read" title="Want to Read" books={booksWantToRead} />
            <BookShelf key="read" title="Read" books={booksRead} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Main
