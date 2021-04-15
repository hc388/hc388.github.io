import React from 'react'
import './App.css'
import TileEachBook from "./TileEachBook";

const conveToArray = (obj) => {
    let array = []
    for (let eachobj in obj)
        array.push(obj[eachobj])
    return array
}

const DisplayResults = (props) => {
    let bookslist = []
    bookslist = props.bookObj
    let array = conveToArray(bookslist)
    return (
        <div className="list-books">
            <div className="list-books-content">
                <div className="bookshelf">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                array.map(obj =>
                                    <li key={obj.id}><TileEachBook eachBook={obj} storedBooks={props.storedBooks} def={'unknown'}/> </li>
                                )
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DisplayResults