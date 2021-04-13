import React from 'react'

const TileEachBook = (props) => {
    console.log("TIle received", props.eachBook)
    //
    // const addBook = (event) => {
    //     props.adding(event.target.value, props.eachBook, props.def)
    // }

    // const manageBook = (event) => {
    //     if (props.def === "none") {
    //         console.log("Going straight to addBook")
    //         props.bookToggler(event.target.value, props.eachBook)
    //     }
    //     else if(event.target.value === "none")
    //         props.deleter(props.def, props.eachBook)
    //     else
    //         props.bookToggler(event.target.value, props.eachBook, props.def)
    // }
    if(!props.eachBook.hasOwnProperty('authors'))
        console.log("Found no authors for ", props.eachBook)
    return(
        <div className="book">
            <div className= "book-top">
                <div className="book-cover"  style = {{ width: 128, height: 193, backgroundImage: `url(${props.eachBook.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={props.def} >
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