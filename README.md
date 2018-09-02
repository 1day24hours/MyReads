# MyReads Project

This repository contains my implementation of the MyReads app. This is the final assessment project for the
Udacity's React Fundamentals course, part of the [React Nanodegree Program](https://udacity.com/course/react-nanodegree--nd019).
MyReads is a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or
want to read.
![MyReads](https://github.com/1day24hours/MyReads/blob/master/gif/MyReads-2.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing 
purposes. 

### Prerequisites

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't 
have any installed on your system. 

* npm is distributed with Node.js which means that when you download Node.js, 
you automatically get npm installed on your computer. [Download Node.js](https://github.com/facebookincubator/create-react-app)

or

* Yarn is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

### Installing

To download the project follow the instructions bellow

1. git clone https://github.com/1day24hours/MyReads.git
2. cd myreads

Install dependencies and run with:
npm
> 1. npm install
> 2. npm start

or

yarn
> 1. yarn install
> 2. yarn start


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

