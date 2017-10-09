import React, { Component } from 'react'

class BookShelfChanger extends Component {
  constructor(props) {
    super(props)

    this.state = { selected: props.shelfSelected ? props.shelfSelected : 'none' }
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.state.selected} onChange={event => this.props.handleShelfChange(event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
