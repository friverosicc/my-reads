import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelves from './Bookshelves'
import BookFinder from './BookFinder'

class BooksApp extends Component {
  constructor(props) {
    super(props)

    this.state = { books: [] }
    this.moveBookToAnotherShelf = this.moveBookToAnotherShelf.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
  }

  moveBookToAnotherShelf(book, shelf) {
    BooksAPI.update(book, shelf)
    .then(response => BooksAPI.get(book.id))
    .then(bookUpdated => {
      let books = this.state.books.filter(book => book.id !== bookUpdated.id)
      books.push(bookUpdated)
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Bookshelves books={this.state.books} moveBookToAnotherShelf={this.moveBookToAnotherShelf}/>)} />
        <Route exact path="/search" render={() => (<BookFinder booksInShelves={this.state.books} moveBookToAnotherShelf={this.moveBookToAnotherShelf} />)} />
      </div>
    )
  }
}

export default BooksApp
