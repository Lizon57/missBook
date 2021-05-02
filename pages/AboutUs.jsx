export class AboutUs extends React.Component {

    shityInterval = setInterval(() => {
        console.log(`This is an inreval set just to unset :(`)
    }, 1000)

    componentWillUnmount() {
        clearInterval(this.shityInterval)
    }

    render() {
        return (
            <section className="flex about-us-container">
                <div className="about-us-img-container">
                    <img src="../assets/img/Oren-profile.jpg" />
                </div>
                <div className="about-us-par">
                    Oren Yaniv is the CEO &amp; founder of Miss Book bla bla bla bla bla bla bla.
            </div>
            </section>
        )
    }
}