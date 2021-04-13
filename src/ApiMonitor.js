import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'

class ApiMonitor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: this.props.name,
            booknames: []
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

            let writer = ""
            let img = ""
            let title = "";
            for (let obj in name) {
                (name[obj].hasOwnProperty("authors")) ? writer = name[obj].authors[0] : writer = "Unknown";
                (name[obj].hasOwnProperty("imageLinks")) ? img = name[obj].imageLinks.thumbnail : img = "Unknown"
                let tempObj = {title: name[obj].title, img: img, author: writer}
                this.setState(oldState => ({booknames: [...oldState.booknames, tempObj]}))
            }
        })

    }


    render() {
        return (
            <div>
                <ol>
                    {
                        <DisplayResult bookObj={this.state.booknames} toggler={this.props.toggler}
                                       deleter={this.props.deleter} bookToggler = {this.props.bookToggler} booksList = {this.props.booksList}/>
                    }
                </ol>
            </div>

        )
    }
}

export default ApiMonitor;
