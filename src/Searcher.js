import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
class Searcher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            query : ''
        }
    }
    handleChange = event => {
        let value = event.target.value
        if(value=== '')
            this.props.deleter()
        this.setState({query : value})
        this.props.updater(value)
    }
    handleSubmit = event => {
        let value = event.target.value
        this.props.updater(value)
    }
    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/' onClick={this.props.toggler}><button className='close-search'>Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <form onSubmit={e => { e.preventDefault(); }}>
                            <input type="text"
                                   placeholder="Search by title or author"
                                   onChange={this.handleChange}
                                   value={this.state.query}

                            />
                        </form>
                    </div>
                    <button onClick={this.props.reset}>Reset</button>
                </div>
            </div>
        )
    }

}

export default Searcher