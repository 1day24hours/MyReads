import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static PropTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    updateBook(shelf) {
        this.props.onMoveBook(this.props.book, shelf);
    }

    render() {
        const { book } = this.props;

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193,
                    //判断 book.imageLinks 是否存在，不存在便为其指定默认封面。
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => this.updateBook(e.target.value)} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book
