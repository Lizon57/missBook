import { BookPreview } from './BookPreview.jsx'

export function BookList({ books }) {
    return (
        <section className="books-lst-container">
            {books.map(book => <BookPreview book={book} key={book.id} />)}
        </section>
    )
}