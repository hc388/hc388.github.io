import React from 'react'
import './App.css'
import TestApi from "./TestApi";


const SearchResults = (props) => {

    return(
        <div>
            <div className="list-books-title">
                <h1>Search Results</h1>
            </div>
                <TestApi name={props.query} toggler={props.toggleSearch}/>
        </div>
    )
}

export default SearchResults