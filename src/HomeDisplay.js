import React from 'react'
// import * as BooksAPI from './BooksAPI'

import './App.css'


export default class HomeDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            booknames : []
        }
    }
    render() {
        return(
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
        <div className="open-search">
            <button onClick={this.props.toggler}>Add a book</button>
        </div>
            </div>
        )
    }
}