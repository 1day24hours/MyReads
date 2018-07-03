import React, { Component } from 'react'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        booksOnShelf: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }
    render() {

    }
}

export default BookShelf