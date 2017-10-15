import React from 'react'

const BookShelfChanger = (props) => {
  const selected = props.shelfSelected ? props.shelfSelected : 'none'

  return (
    <div className="book-shelf-changer">
      <select defaultValue={selected} onChange={event => props.handleShelfChange(event.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger
