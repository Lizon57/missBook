export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            authors: '',
            publishedDate: 0,
            pageCount: 0,
            categories: '',
            language: '',
            listPrice: 0,
            isOnSale: null
        }
    }


    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }


    render() {
        const { title, authors, publishedDate, pageCount, categories, language, listPrice, isOnSale } = this.state.filterBy

        return (
            <section className="filter-container">
                <div className="filter-inside-container"> {/* filter inside container ki ani METUMTAM! */}
                    <h2>Filter books:</h2>

                    <form className="books-filter" onSubmit={this.onFilter}>
                        <div>
                            <label htmlFor="byTitle">Title:</label>
                            <input type="text" id="byTitle" name="title" value={title} onChange={this.handleChange} />
                        </div>
                        <button>Filter</button>
                    </form>
                </div>
            </section>
        )
    }
}