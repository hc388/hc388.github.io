import React from 'react';
import './App.css'
import TileEachBook from "./TileEachBook";
import * as BooksAPI from './BooksAPI'

class DisplayResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booknames : []
        }
    }


    finalBookObj = []
    booksList = this.props.booksList
    tempList = []
    status = "none";

    check_if_exists = (obj) => {
        console.log("Checker is initiated")
        this.status = 'none'
        // for (const item in booksList){
        //     let temp = booksList[item].filter( second => (second.title === obj.title) && (second.author === obj.author))
        //     if (temp.length !==0)
        //         status = item
        // }
        BooksAPI.getAll().then(resp => this.tempList = resp)
        console.log("TempList looks like", this.tempList)
        for (let book in this.tempList) {
            console.log(book)
            if (obj.id === book.id) {
                console.log("Found a matching book")
                this.status = book.shelf
            }
        }
        return this.status
    }

    render() {


        return (
            <div className="list-books">
                Displaying Books
                {console.log("Display Received", this.props.bookObj)}
                <div className="list-books-content">
                    <div className="bookshelf">
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {console.log(this.state.booknames)}
                                {this.state.booknames.map(obj => (
                                    <TileEachBook eachBook = {obj}/>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

export default DisplayResult