import express from "express";
import cancionRoutes from "./routes/cancionRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/cancion", cancionRoutes);
app.use("/api/playlist", playlistRoutes);

app.listen(PORT, () => {
    console.log(`🎵 Servidor API Música corriendo en http://localhost:${PORT}`);
});
