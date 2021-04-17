import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'

import DisplayResults from "./DisplayResults";

class TestApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: this.props.name,
            booknames: [],
            validSearch: true,
            categories: []
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.name !== prevProps.name) {
            this.componentDidMount()
        }
    }

    componentDidMount() {
        this.setState({query: this.props.name, booknames: []})
        BooksAPI.search(this.props.name).then(name => {
                if (name !== undefined && !name.hasOwnProperty("error")) {
                    this.setState({booknames: name})
                    //this.state.booknames.push(name[obj].title)
                }
            }
        )

    }


    render() {
        return (
            <div>
                <ol>{

                    this.state.booknames !== "Unknown" &&
                    <DisplayResults bookObj={this.state.booknames} toggler={this.props.toggler}
                                    storedBooks={this.props.storedBooks} refresher={this.props.refresher}/>
                }
                </ol>
            </div>

        )
    }
}

export default TestApi;
