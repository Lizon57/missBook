import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from './BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null
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

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }


    render() {
        const { books } = this.state

        if (!books) return <div>Loading...</div>

        return (
            <main>
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} />
            </main>
        )
    }
}