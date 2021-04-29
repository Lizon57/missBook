export function BookDetails({ book, goBack }) {
    const currYear = new Date().getFullYear()
    let regionNames = new Intl.DisplayNames(['en'], { type: 'language' });

    return (
            <section className="book-details-container">
                <div className="book-details-title">{book.title}</div>
                <div className="book-details-subtitle">{book.subtitle}</div>
                <div className="book-thumbnail-container">
                    {(book.listPrice.isOnSale) ? <div className="book-details-on-sale">On-sale!</div> : ''}
                    <img src={book.thumbnail} />
                </div>

                <div className="book-details-info">

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Year publish:</span>
                        <span className="book-details-info-text">{book.publishedDate}
                            {((currYear - book.publishedDate) > 10) ? ' - Veteran Book' :
                                ((currYear - book.publishedDate) < 1) ? ' - NEW!' : ''}
                        </span>
                    </div>

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Author{(book.authors.length > 1) ? 's' : ''}:</span>
                        <span className="book-details-info-text">{book.authors.join(', ')}</span>
                    </div>

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Description:</span>
                        <span className="book-details-info-text">{book.description}</span>
                    </div>

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Language:</span>
                        <span className="book-details-info-text">{regionNames.of(book.language)}</span>
                    </div>

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Categories:</span>
                        <span className="book-details-info-text">{book.categories.join(', ')}</span>
                    </div>

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Pages:</span>
                        <span className="book-details-info-text">{book.pageCount}
                            {(book.pageCount > 500) ? ' - Long reading' :
                                (book.pageCount > 200) ? ' - Decent reading' :
                                    (book.pageCount < 100) ? ' - Light rading' : ''}
                        </span>
                    </div>

                    <div className="book-details-info-row">
                        <span className="book-details-info-title">Price:</span>
                        <span className="book-details-info-text">only {book.listPrice.amount.toLocaleString(
                            undefined, { style: 'currency', currency: book.listPrice.currencyCode }
                        )}
                            {(!book.listPrice.isOnSale) ? ' (Out of stock 😔)' : ''}
                        </span>
                    </div>

                    <div className="book-details-buy-container">
                        {(book.listPrice.isOnSale) ? <button className="buy-book-btn" onClick={() => alert(`HA! ma ze po hanut?`)}>Buy it now!</button> : ''}
                        <button className="go-back-btn" onClick={goBack}>← Go back</button>
                    </div>
                </div>
            </section>
    )
}