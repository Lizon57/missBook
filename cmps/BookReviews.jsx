import {BookAddReview} from './BookAddReview.jsx'
import {BookShowReviews} from './BookShowReview.jsx'

export class BookReviews extends React.Component {

    render() {


        return (
            <React.Fragment>
                <section className="books-show-reviews">
                    <BookShowReviews bookId={this.props.bookId} />
                </section>
                <section className="books-add-reviews">
                    <BookAddReview bookId={this.props.bookId} />
                </section>
            </React.Fragment>

        )
    }
}