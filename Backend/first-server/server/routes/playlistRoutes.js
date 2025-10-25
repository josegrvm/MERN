import express from "express";
import { crearPlaylist } from "../data/playlist";

const router = express.Router();

router.get("/", (req, res) => {
    const playlist = crearPlaylist();
    res.json(playlist);
});

export default router;
