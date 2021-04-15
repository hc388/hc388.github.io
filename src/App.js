import './App.css';
import React from 'react'
import SearchPage from "./SearchPage";
import HomeDisplay from "./HomeDisplay";
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: false,
            searching: false,
            booksList : {}

        }
    }
    componentDidMount() {
        BooksAPI.getAll().then(attr => {
            this.setState({booksList: attr})
    })
    }

    toggleScreen = () => {
        this.setState(prevState => ({showSearchPage: !prevState.showSearchPage}))
    }
    render() {
        return(
            <div>
                {this.state.showSearchPage ?
                    <SearchPage toggler={this.toggleScreen} storedBooks = {this.state.booksList}/> :
                    (Object.keys(this.state.booksList).length !== 0) && <HomeDisplay toggler={this.toggleScreen} storedBooks = {this.state.booksList}/>
                }
            </div>
        )
    }


}

export default BooksApp;
