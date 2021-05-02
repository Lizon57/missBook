import {reviewService} from '../services/review-service.js'

export class BookAddReview extends React.Component {
    state = {
        currReview: {
            writer: '',
            rate: 0,
            dateReaded: '',
            review: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value.toLowerCase()
        this.setState({ currReview: { ...this.state.currReview, [field]: value } })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const {writer, rate, dateReaded, review} = this.state.currReview
        reviewService.addReview(this.props.bookId, writer, rate, dateReaded, review)
        this.setState({
            currReview: {
                writer: '',
                rate: 0,
                dateReaded: '',
                review: ''
            }
        })
    }

    render() {
        const { writer, rate, dateReaded, review } = this.state.currReview

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="flex space-between">
                    <div>
                        <label htmlFor="review-writer">You're name:</label>
                        <input type="text" id="writer-name" placeholder="You're name" onChange={this.handleChange} name="writer" value={writer} />
                    </div>

                    <div>
                        <label htmlFor="review-rate">Rate:</label>
                        <select id="review-rate" onChange={this.handleChange} name="rate" value={rate}>
                            <option value="0"></option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="review-date-readed">Date readed:</label>
                        <input type="date" onChange={this.handleChange} name="dateReaded" value={dateReaded} />
                    </div>
                </div>

                <div>
                    <textarea placeholder="You're review" onChange={this.handleChange} name="review" value={review}></textarea>
                    <input type="submit" value="Submit!" />
                </div>
            </form >
        )
    }
}