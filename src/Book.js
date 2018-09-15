import React from 'react'

class Book extends React.Component {
    render(){
        return (
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '' }}></div>
            <div className="book-shelf-changer">
                <select>
                <option value="move" disabled>Move to...</option>
                <option value="no">No</option>
                <option value="notWithPole">Not With a 10' Pole</option>
                <option value="DNF">DNF</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title"></div>
            <div className="book-authors"></div>
        </div>
        )
    }
}

export default Book