import React from 'react'

const TileEachBook = (props) => {
    const checkStatus = (obj) => {
        if(props.def !== 'unknown')
            return props.def
        for(let eachBook of props.storedBooks){
            if(eachBook.id === obj.id) {
                return eachBook.shelf
            }
        }
        return 'none'
    }
    let status = checkStatus(props.eachBook)
    return(
        <div className="book">
            <div className= "book-top">
                <div className="book-cover"  style = {{ width: 128, height: 193, backgroundImage: `url(${props.eachBook.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={status} >
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