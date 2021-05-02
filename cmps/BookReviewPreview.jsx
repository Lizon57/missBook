export function BookReviewPreview(review) {

    const { writer, rate, dateReaded } = review.review

    return (
        <React.Fragment>
            <div className="flex space-between review-info-container">
                <div>Wrote by: {writer}</div>
                <div>Rate: {rate}</div>
                <div>Date readed: {dateReaded}</div>
            </div>
            <div className="review-text">
                {review.review.review}
            </div>
        </React.Fragment>
    )
}