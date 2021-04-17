import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from "./SearchResults";


export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searching: false
        }
    }

    updateQuery = newquery => {
        if (newquery === "")
            return 0

        this.setState({
            query: newquery,
            searching: true
        })
    }

    sortedBookObj = {
        'currentlyReading': [],
        'wantToRead': [],
        'read': []
    }
    sortBooks = () => {
        console.log("Before iterable", this.props.storedBooks)
        for (let obj of this.props.storedBooks) {
            if (obj.shelf === "currentlyReading") {
                this.sortedBookObj['currentlyReading'].push(obj)
            } else if (obj.shelf === 'wantToRead')
                this.sortedBookObj['wantToRead'].push(obj)
            else
                this.sortedBookObj['read'].push(obj)
        }
    }

    render() {
        if(Object.keys(this.props.storedBooks).length !== 0)
            this.sortBooks()
        return (
            <div className="app">
                <SearchBar toggler={this.props.toggler} updater={this.updateQuery}/>
                <h2>This is the search page!</h2>
                <SearchResults query={this.state.query} storedBooks={this.sortedBookObj}
                               refresher={this.props.refresher}/>
            </div>
        )
    }
}