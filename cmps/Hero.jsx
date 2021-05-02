const { Link } = ReactRouterDOM;

export function Hero() {
    return (
        <section className="flex align-center hero-container">
            <div className="hero">
                <h1>Miss Book</h1>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, perspiciatis illo explicabo omnis nulla repellendus nesciunt debitis recusandae, labore consequatur pariatur aperiam perferendis. Aliquid, quidem?</div>
                <Link to="/book"><button>Take me there!</button></Link>
            </div>
        </section>
    )
}