import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <div className="page-not-found-title">
        <h1>Page not found</h1> <Link to='/'>click here to go to the main page</Link>
      </div>
    </div>
  )
}

export default PageNotFound
