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
    checkStatus = (obj) => {
        let tempArray = this.props.storedBooks
        let status = 'unknown'
        console.log("Object found ", obj)
        for (let storedBookStatus in tempArray) {
            console.log("StoredBookStatus looks like", tempArray[storedBookStatus])
                if (tempArray[storedBookStatus].id === obj.id) {
                    status = tempArray[storedBookStatus].shelf

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