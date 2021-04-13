import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'

import DisplayResult from "./DisplayResults";

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
                if (name != undefined && !name.hasOwnProperty("error")) {
                    this.setState(({booknames: name}))
                    //this.state.booknames.push(name[obj].title)
                }
            }
        )

    }


    render() {
        //console.log("TestAPI got the books: ", this.state.booknames)
        return (
            <div>
                <ol>
                    {//this.state.query !== "" && this.state.booknames.map(obj => <h3>obj.title</h3>)}
                        console.log("TestAPI got the query: ", this.props.name)

                    }
                    {console.log("calling displayresults for", this.state.booknames)}
                    {

                        this.state.booknames !== "Unknown" &&
                        <DisplayResult bookObj={this.state.booknames} toggler={this.props.toggler}/>
                    }
                </ol>
            </div>

        )
    }
}

export default TestApi;
