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
    let { title, shelf, authors, imageLinks } = this.props.book
    authors = (authors) ? authors.map(author => (<div key={author}>{author}</div>)) : []
    const coverImage = imageLinks ? imageLinks.thumbnail : "http://via.placeholder.com/128x193?text=No%20Cover"

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${coverImage})` }}></div>
            <BookShelfChanger shelfSelected={shelf} handleShelfChange={this.handleShelfChange} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
