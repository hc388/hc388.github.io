import React from 'react'
import './App.css'
import TileEachBook from "./TileEachBook";

const conveToArray = (obj) => {
    let array = []
    for (let eachobj in obj)
        array.push(obj[eachobj])
    return array
}

class DisplayResults extends React.Component {
    checkStatus = (obj, array) => {
        let tempArray = this.props.storedBooks
        let status = 'unknown'
        for (let storedBookStatus in tempArray) {
            for (let book in tempArray[storedBookStatus]) {
                if (tempArray[storedBookStatus][book].id === obj.id) {
                    console.log("Found an existent book", tempArray[storedBookStatus][book].title)
                    status = tempArray[storedBookStatus][book].shelf
                }
            }
        }
        return <li key={obj.id}><TileEachBook eachBook={obj} storedBooks={this.props.storedBooks}
                                              def={status} refresher={this.props.refresher}/></li>

    }

    render() {

        let bookslist = this.props.bookObj
        let array = conveToArray(bookslist)

        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div className="bookshelf">
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    array.map(obj => {
                                        return this.checkStatus(obj, array)
                                    })

                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default DisplayResults