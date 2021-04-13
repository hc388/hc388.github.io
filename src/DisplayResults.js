import React from 'react';
import './App.css'
import TileEachBook from "./TileEachBook";

const DisplayResult = (props) => {
    const dispBookObj = props.bookObj
    let finalBookObj = []
    const booksList = props.booksList
    const tempList = []
    let status = "none";

    const check_if_exists = (obj) => {
        // for (const item in booksList){
        //     let temp = booksList[item].filter( second => (second.title === obj.title) && (second.author === obj.author))
        //     if (temp.length !==0)
        //         status = item
        // }
        return true
    }
    return(
        <div className="list-books">
            {console.log("List of books", dispBookObj)}

            <div className="list-books-content">
                <div className="bookshelf">
                    <div className= "bookshelf-books">
                        <ol className= "books-grid">
                            {
                                dispBookObj.map( obj => {
                                  if(check_if_exists(obj))
                                    return <li key={obj.img}><TileEachBook eachBook={obj} deleter={props.deleter} bookToggler = {props.bookToggler} def={status}/></li>

                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default DisplayResult