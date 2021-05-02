const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Hero } from './cmps/Hero.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
    return (
        <Router>
            <nav>
                <AppHeader />
            </nav>
            <main>
                <Switch>
                    <Route component={BookDetails} path="/book/:bookId" />
                    <Route component={BookApp} path="/book" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Hero} path="/" />
                </Switch>
            </main>
        </Router>
    )
}