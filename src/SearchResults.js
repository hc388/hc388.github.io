import React from 'react'
import './App.css'
import TestApi from "./TestApi";


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: props.query,
            booknames: []
        }
    }

    updateBooks = props => {
        this.setState({booknames: this.props.booknames})
    }

    render() {
        return (
            <div>
                <TestApi name={this.props.query} storedBooks={this.props.storedBooks} refresher={this.props.refresher}/>
            </div>
        )
    }
}

export default SearchResults
