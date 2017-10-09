import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

class BookFinder extends Component {
constructor(props) {
    super(props)

    this.state = { text: '', books: [] }
    this.handleOnChangeText = this.handleOnChangeText.bind(this)
    this.setShelfOfEachBook = this.setShelfOfEachBook.bind(this)
    this.booksSearch = this.booksSearch.bind(this)
    this.delayBooksSearch = _.debounce(this.booksSearch, 300)
  }

  componentWillReceiveProps(nextProps) {
    this.setShelfOfEachBook(this.state.books, nextProps.booksInShelves)
  }

  handleOnChangeText(event) {
    const text = event.target.value
    this.setState({ text })
    this.delayBooksSearch(text)
  }

  booksSearch(query) {
    BooksAPI.search(query, 30) 
    .then(books => this.setShelfOfEachBook(books, this.props.booksInShelves))
  }

  setShelfOfEachBook(books, booksInShelves) {
    let bookList = _.isArray(books) ? _.clone(books) : []

    bookList = bookList.map(book => {
      const result = booksInShelves.filter(bookInShelf => bookInShelf.id === book.id)
      return _.isEmpty(result) ? book : result[0]
    })
    this.setState({ books: bookList })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" value={this.state.text} onChange={this.handleOnChangeText} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.books} moveBookToAnotherShelf={this.props.moveBookToAnotherShelf}/>
        </div>
      </div>
    )
  }
}

export default BookFinder
