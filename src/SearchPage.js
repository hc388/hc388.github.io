import React from 'react'
import './App.css'
import Searcher from "./Searcher";
import TestApi from "./TestApi";


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
            searching: true,

        })
    }

    sortedBookObj = {
        'currentlyReading': [],
        'wantToRead': [],
        'read': []
    }
    sortBooks = () => {
        for (let obj of this.props.storedBooks) {
            if (obj.shelf === "currentlyReading") {
                this.sortedBookObj['currentlyReading'].push(obj)
            } else if (obj.shelf === 'wantToRead')
                this.sortedBookObj['wantToRead'].push(obj)
            else
                this.sortedBookObj['read'].push(obj)
        }
    }
    deleter = () => {
        this.setState({query : ''})
    }

    render() {
        if(Object.keys(this.props.storedBooks).length !== 0)
            this.sortBooks()
        return (
            <div className="app">
                <Searcher toggler={this.props.toggler} updater={this.updateQuery} deleter={this.deleter}/>
                <h2>This is the search page!</h2>
                {this.state.query !== '' && <TestApi name={this.state.query} storedBooks={this.props.storedBooks} refresher={this.props.refresher}/> }
            </div>
        )
    }
}