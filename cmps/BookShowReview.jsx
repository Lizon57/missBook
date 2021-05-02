import { storageService } from '../services/storage-service.js'
import { BookReviewPreview } from './BookReviewPreview.jsx'

export class BookShowReviews extends React.Component {

    reviews = storageService.loadFromStorage(`${this.props.bookId}-reviews`)

    render() {
        return (
            <React.Fragment>
            {
                this.reviews &&
                    this.reviews.map(review => <BookReviewPreview review={review} key={review.rId} />)
            }
            </React.Fragment>
        )
    }
}