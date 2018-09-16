import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import NoBooks from './NoBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path ="/" render = {() => (
        <MainPage 
        books = {this.state.books}
        moveShelf={this.moveShelf}
        />
        )} />
        <Route path = "/search" render ={() => (
        <SearchPage
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />
        <Route path = "/no" render ={() => (
        <NoBooks
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />
        {/*<Route path = "/pole" render ={() => (
        <NotWithAPole
        moveShelf={this.moveShelf}
        books = {this.state.books}
        />
        )} />*/}
      </div>
    )
  }
}

export default BooksApp
