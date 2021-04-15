import React from 'react'
import './App.css'
import TileEachBook from "./TileEachBook";
import DisplayNone from "./DisplayNone";

const Read = (props) => {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                Read
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {   props.booksList.length === 0 ? <DisplayNone /> :
                        props.booksList.map( obj => <li key={obj.id}><TileEachBook eachBook = {obj} deleter = {props.deleter} def = {"read"} bookToggler = {props.bookToggler} storedBooks = {props.storedBooks}/></li>)}
                </ol>
            </div>

        </div>
    )
}

export default Read