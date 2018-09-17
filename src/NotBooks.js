import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'

class NotBooks extends React.Component {
    render(){
        return (
            <div className="list-books">
            <BurgerMenu />
                <div className="list-books-title">
                <h1>Not So GoodReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
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
                <div className="open-search">
                <Link to = "/search" >Add a book</Link>
            </div>
            </div>
        )
    }
}

export default NotBooks