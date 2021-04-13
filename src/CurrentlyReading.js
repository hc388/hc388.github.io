import React from 'react'
import './App.css'
import TileEachBook from "./TileEachBook";
import DisplayNone from "./DisplayNone";

const CurrentlyReading = (props) => {
    console.log("Currently contains", props.booksList)
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                Currently Reading
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {console.log("curr says", props.booksList)}
                    { props.booksList.length === 0 ? <DisplayNone /> :
                        props.booksList.map( obj => <li key={obj.id}><TileEachBook eachBook = {obj} def = {"currentlyReading"}/></li>)}
                </ol>
            </div>

            </div>
    )
}

export default CurrentlyReading