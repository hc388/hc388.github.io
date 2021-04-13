import React from 'react'
import './App.css'
import TileEachBook from "./TileEachBook";
import DisplayNone from "./DisplayNone";

const WantToRead = (props) => {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                Want To Read
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {   props.booksList.length === 0 ? <DisplayNone /> :
                        props.booksList.map( obj => <li key={obj.img}><TileEachBook eachBook = {obj} deleter = {props.deleter} def = {"wantToRead"} bookToggler = {props.bookToggler}/></li>)}
                </ol>
            </div>

        </div>
    )
}

export default WantToRead