import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu.js'

class MainPage extends React.Component {
    render(){
        return (
    <div className="list-books">
    <BurgerMenu />
    <div className="list-books-title">
      <h1>Not So GoodReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
        <Link to = "/no"><h2 className="bookshelf-title">No</h2></Link>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
                this.props.books
                .filter(book => book.shelf === 'currentlyReading')
                .map(book => (
                    <li key = {book.id}>
                        <Book
                        book = {book}
                        moveShelf = {this.props.moveShelf}
                        currentShelf = 'currentlyReading'
                         />
                    </li>
                ))
            }
              </ol>
            </div>
        </div>
        <div className="bookshelf">
          <Link to = "/pole"><h2 className="bookshelf-title">Not With A 10' Pole</h2></Link>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                .filter(book => book.shelf === 'wantToRead')
                .map(book => (
                    <li key = {book.id}>
                        <Book
                        book = {book}
                        moveShelf = {this.props.moveShelf}
                        currentShelf = 'wantToRead'
                         />
                    </li>
                ))
            }
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <Link to = "/DNF"><h2 className="bookshelf-title">DNF</h2></Link>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
                this.props.books
                .filter(book => book.shelf === 'read')
                .map(book => (
                    <li key = {book.id}>
                        <Book
                        book = {book}
                        moveShelf = {this.props.moveShelf}
                        currentShelf = 'read'
                         />
                    </li>
                ))
            }

            </ol>
          </div>
        </div>
     
    </div>
    <div className="open-search">
      <Link
      to = "/search" 
      >Add a book
      </Link>
    </div>
  </div>
  </div>
        )
    }
}
export default MainPage