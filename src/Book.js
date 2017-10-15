import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  constructor(props) {
    super(props)

    this.handleShelfChange = this.handleShelfChange.bind(this)
  }

  handleShelfChange(shelfSelected) {
    this.props.moveBookToAnotherShelf(this.props.book, shelfSelected)
  }

  render() {
    let authors = this.props.book.authors
    authors = (authors) ? authors.map(author => (<div key={author}>{author}</div>)) : []
    const coverImage = this.props.book.imageLinks.thumbnail

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${coverImage})` }}></div>
            <BookShelfChanger shelfSelected={this.props.book.shelf} handleShelfChange={this.handleShelfChange} />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
