import logo from './logo.svg';
import './App.css';
import React from 'react'

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
                This is the app home page!
            </div>
        )
    }


}

export default BooksApp;
