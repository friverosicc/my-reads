import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './Main'
import Searcher from './Searcher'

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Searcher} />
    </div>
  )
}

export default BooksApp
