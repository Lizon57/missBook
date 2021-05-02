const { NavLink, withRouter } = ReactRouterDOM

export function _AppHeader() {
    return (
        <div className="flex align-center nav-container">
            <a className="nav-logo" href="/">Miss Book</a>
            <ul className="clean-list flex nav-links-ul">
                <li><NavLink exact to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink></li>
                <li><NavLink to="/book" className="nav-link">Books</NavLink></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)