import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = { book: props.book }
    this.handleShelfChange = this.handleShelfChange.bind(this)
  }

  handleShelfChange(shelfSelected) {
    this.props.moveBookToAnotherShelf(this.state.book, shelfSelected)
  }

  render() {
    let authors = this.state.book.authors
    authors = (authors) ? authors.map(author => (<div key={author}>{author}</div>)) : []
    const coverImage = this.state.book.imageLinks.thumbnail

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${coverImage})` }}></div>
            <BookShelfChanger shelfSelected={this.state.book.shelf} handleShelfChange={this.handleShelfChange} />
          </div>
          <div className="book-title">{this.state.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
