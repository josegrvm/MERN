import { Link } from "react-router-dom";
import artworks from "../data/artworks";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
        <h1>Bienvenido a la Galería de Arte</h1>
        <ul>
            {artworks.map((art) => (
            <li key={art.id}>
                <Link to={`/art/${art.id}`}>{art.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Home;