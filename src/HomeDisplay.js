import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import {get} from "./BooksAPI";

export default class HomeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booknames: []
        }
    }

    books = []

    componentDidMount() {
        BooksAPI.getAll().then(getBooks => {
            console.log('returned value', getBooks)
            this.setState({booknames: getBooks})
            console.log("Mount says", this.state.booknames)

        })


    }

    sortedBookObj = {
        'currentlyReading': [],
        'wantToRead': [],
        'read': []
    }
    sortBooks = () => {
        console.log("Sorter knocked!", this.state.booknames)
        for (let obj of this.state.booknames) {
            if (obj.shelf === "currentlyReading") {
                console.log("Currently Reading is triggered")
                this.sortedBookObj['currentlyReading'].push(obj)
            } else if (obj.shelf === 'wantToRead')
                this.sortedBookObj['wantToRead'].push(obj)
            else
                this.sortedBookObj['read'].push(obj)
        }
    }

    render() {
        console.log("render is kicked")
        this.sortBooks()
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <CurrentlyReading booksList={this.sortedBookObj["currentlyReading"]}/>
                <WantToRead booksList={this.sortedBookObj['wantToRead']} />
                <Read booksList={this.sortedBookObj['read']} />

                <div className="open-search">
                    <button onClick={this.props.toggler}>Add a book</button>
                </div>
            </div>
        )
    }
}