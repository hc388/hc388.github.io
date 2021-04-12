import './App.css'

import React, { useState } from 'react';

const SearchBar = (props) => {
    const [query, setQuery] = useState("");

    const handleChange = event => {
        setQuery(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.updater(query)
    }
    return(
        <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search" onClick={props.toggler}>Close
                </button>
                <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={handleChange}
                               value={query}

                        />
                    </form>
                </div>
                <button onClick = {props.reset}>Reset</button>
            </div>
        </div>
    )
}

export default SearchBar