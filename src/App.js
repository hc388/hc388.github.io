import logo from './logo.svg';
import './App.css';
import React from 'react'
import SearchPage from "./SearchPage";
import HomeDisplay from "./HomeDisplay";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: false,
            searching: false,
            booksList: {
                "currentlyReading": [],
                "wantToRead": [],
                "read": []
            }
        }
    }

    toggleScreen = () => {
        this.setState(prevState => ({showSearchPage: !prevState.showSearchPage}))
    }
    render() {
        return(
            <div>
                {this.state.showSearchPage ?
                    <SearchPage toggler={this.toggleScreen}/> :
                    <HomeDisplay toggler={this.toggleScreen}/>
                }
            </div>
        )
    }


}

export default BooksApp;
