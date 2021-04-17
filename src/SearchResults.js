import React from 'react'
import './App.css'
import TestApi from "./TestApi";


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.query,
        }
    }


    render() {
        return (
            <div>
                {this.props.query !== '' && <TestApi name={this.props.query} storedBooks={this.props.storedBooks} refresher={this.props.refresher}/> }
            </div>
        )
    }
}

export default SearchResults
