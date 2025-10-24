import { useParams, useNavigate } from "react-router-dom";
import artworks from "../data/artworks";
import "./ArtDetail.css";

const ArtDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const index = artworks.findIndex((a) => a.id === parseInt(id));
    const art = artworks[index];

    if (!art) return <h2>Obra no encontrada</h2>;

    const handlePrev = () => {
        if (index > 0) navigate(`/art/${artworks[index - 1].id}`);
        else navigate("/home");
    };

    const handleNext = () => {
        if (index < artworks.length - 1) navigate(`/art/${artworks[index + 1].id}`);
        else navigate("/home");
    };

    return (
        <div className="detail-container">
        <h2>{art.title}</h2>
        <img src={art.image} alt={art.title} />
        <p><strong>Artista:</strong> {art.artist}</p>
        <p>{art.description}</p>
        <div className="buttons">
            <button onClick={handlePrev}>Anterior</button>
            <button onClick={() => navigate("/home")}>Inicio</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
        </div>
    );
};

export default ArtDetail;