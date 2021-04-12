import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from './SearchBar'


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

    render() {
        return (
            <div className="app">
                <SearchBar toggler={this.props.toggler} updater={this.updateQuery}/>
                <h2>This is the search page!</h2>
            </div>
        )
    }
}