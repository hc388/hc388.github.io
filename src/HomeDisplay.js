import React from 'react'
import './App.css'
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import { Link } from 'react-router-dom'
import Read from "./Read";

export default class HomeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booknames: []
        }
    }

    books = []

    sortedBookObj = {
        'currentlyReading': [],
        'wantToRead': [],
        'read': []
    }
    sortBooks = () => {
        for (let obj of this.props.storedBooks) {
            if (obj.shelf==="currentlyReading") {
                this.sortedBookObj['currentlyReading'].push(obj)
            } else if (obj.shelf==='wantToRead')
                this.sortedBookObj['wantToRead'].push(obj)
            else
                this.sortedBookObj['read'].push(obj)
        }
    }

    render() {
        this.sortBooks()
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <CurrentlyReading booksList={this.sortedBookObj["currentlyReading"]} storedBooks={this.state.booksList} refresher={this.props.refresher}/>
                <WantToRead booksList={this.sortedBookObj['wantToRead']} storedBooks={this.state.booksList} refresher={this.props.refresher}/>
                <Read booksList={this.sortedBookObj['read']} storedBooks={this.state.booksList} refresher={this.props.refresher}/>

                <div className="open-search">
                    <Link
                        to='/search'
                        className='add-contact'
                        onClick={this.props.toggler}
                    >
                        <button className='add-contact'>
                        Search Books</button></Link>
                </div>
            </div>
        )
    }
}