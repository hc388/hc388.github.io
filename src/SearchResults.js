import React from 'react'
import './App.css'
import TestApi from "./TestApi";
import DisplayResult from "./DisplayResults";


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query : props.query,
            booknames : []
        }
    }

    const
    searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ]
    updateBooks = props => {
        this.setState({booknames : this.props.booknames})
    }

    render() {
        return (
            <div>
                <TestApi name={this.props.query}/>
                <ol>
                    {this.state.booknames !== "Unknown" &&
                        <DisplayResult bookObj={this.state.booknames} toggler={this.props.toggler}/>
                    }
                </ol>

            </div>
        )
    }
}

export default SearchResults
