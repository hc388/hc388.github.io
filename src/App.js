import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SearchPage from "./SearchPage";
import HomeDisplay from "./HomeDisplay";
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            searching: false,
            booksList: {}

        }
        this.refreshScreen = this.refreshScreen.bind(this)

        this.toggleScreen = this.toggleScreen.bind(this)
    }

    async componentDidMount() {
        await BooksAPI.getAll().then(attr => {
            this.setState({booksList: attr})
        })
    }

    // async updateBook = (book, shelf) => {
    //     BooksAPI.update(book, shelf).then(attr => console.log(attr))
    // }
    refreshScreen = async (book, shelf, componentDidMount) => {
        await BooksAPI.update(book, shelf)

        this.setState({booksList: {}})
        BooksAPI.getAll().then(attr => {
            this.setState({booksList: attr})
        })
    }
    toggleScreen = () => {
        this.setState(prevState => ({search: !prevState.search}))
    }

    render() {

        return (
            <div>

                {this.state.search ?
                    <Route  path='/search' render={() => (
                        <SearchPage toggler={this.toggleScreen} storedBooks={this.state.booksList}
                                    refresher={this.refreshScreen}/> )} /> :
                    <Route exact path='/' render={() => (
                        (Object.keys(this.state.booksList).length !== 0) &&
                        <HomeDisplay toggler={this.toggleScreen} storedBooks={this.state.booksList}
                                     refresher={this.refreshScreen}/> )} />
                    }

            </div>
        )
    }


}

export default BooksApp;
