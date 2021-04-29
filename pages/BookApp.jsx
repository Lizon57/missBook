import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        selectedBook: null
    }


    componentDidMount() {
        this.loadBooks()
    }


    loadBooks() {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({ books })
            })
    }

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }


    render() {
        const { books, selectedBook } = this.state

        if (!books) return <div>Loading...</div>

        return (
            <main>
                {!selectedBook && <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookList books={books} setSelectedBook={this.setSelectedBook} />
                </React.Fragment>}

                {selectedBook && <BookDetails book={selectedBook} goBack={() => this.setSelectedBook(null)} />}
            </main>
        )
    }
}