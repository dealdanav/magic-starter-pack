import { Link } from "react-router-dom";

const Home_Page = () => {
    return (
        <article className="home-page">
            <div className="home-wrapper">
                <figure className="background-home">
                    <img src="./assets/background_home.jpg" alt="Magic Wizards" title="Magic the Gathering"/>
                </figure>
                <h1 className="home-title">Welcome to the Magic Starter Pack creator</h1>
            </div>
            <div className="home-content-wrapper">
                <div>
                    <p className="page-title">A quick view to get started with the set creation in Magic the Gathering.</p>
                    <Link to="/creation" exact className="creation-link">
                        Go and Create your Starter Pack
                    </Link>
                </div>
                <figure className="img-content">
                    <img src="./assets/character.jpg" alt="Ilust. Chase Stone" title="Ilust. Chase Stone"/>
                </figure>
            </div>
        </article>
    );
}
export default Home_Page;