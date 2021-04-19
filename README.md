# MyReads Project
####Hrithik Chaudhary

This project created using create-react-app and can be launched using the keyword 'npm start'.
This project is made within the guidelines provided by Udacity.
## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css # Styles for this app.
    ├── App.js # The root file. Link to two other components on for SearchPage and HomePage. By default, the app calls HomePage component.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── HomeDispaly.js # Used for displying the books currently added to the catalog
    ├── SearchPage.js # Contains two components-- for seach bar and search contents
    ├── Searcher.js # Component with SearchBar that takes input query from user and sends it back to SearchPage
    ├── TestApi.js # Receives the query as props and then calls BooksAPI and gets books matching the query
    ├── DisplayResults.js # Receives the list of books from TestApi and then processes them for display
    ├── TileEachBook.js # Component that properly formats a book and then displays it on the screen
    ├── CurrentlyReading.js # Component that forwards the books currently in catalog and under currently Reading category.
    ├── Read.js # Displays books under read category
    ├── WantToRead.js # Displays books under want to read category
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js 
    └── yarn.lock
```
