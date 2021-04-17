import React from 'react'
import './App.css'
import TileEachBook from "./TileEachBook";
import DisplayNone from "./DisplayNone";

const CurrentlyReading = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                Currently Reading
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.booksList.length === 0 ? <DisplayNone/> :
                        props.booksList.map(obj => <li key={obj.id}><TileEachBook eachBook={obj}
                                                                                  def={"currentlyReading"}
                                                                                  storedBooks={props.storedBooks}
                                                                                  refresher={props.refresher}/>
                        </li>)}
                </ol>
            </div>

        </div>
    )
}

export default CurrentlyReading