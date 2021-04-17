import React from 'react'
import * as BooksAPI from './BooksAPI'

const TileEachBook = (props) => {
    const checkStatus = (obj) => {
        if(props.def !== 'unknown')
            return props.def
        return 'none'
        }
    const callStatusChange = value => props.refresher(props.eachBook, value)
    const changeStatus = (event) => {
        console.log("You selected the option", event.target.value, "for the book ", props.eachBook.title)
        event.preventDefault()
        callStatusChange(event.target.value)
    }
    let status = checkStatus(props.eachBook)
    return(
        <div className="book">
            <div className= "book-top">
                <div className="book-cover"  style = {{ width: 128, height: 193, backgroundImage: `url(${props.eachBook.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={status} onChange={changeStatus}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.eachBook.title}</div>
            {

                (props.eachBook.hasOwnProperty('authors') && props.eachBook.authors.length === 1) ? <div className="book-authors">{props.eachBook.authors}</div> :
                    <div className="book-authors">2 or more</div>

            }

        </div>
    )
}

export default TileEachBook