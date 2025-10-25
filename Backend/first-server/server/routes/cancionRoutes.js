import express from "express";
import { crearCancion } from "../data/cancion";

const router = express.Router();

router.get("/", (req, res) => {
    const cancion = crearCancion();
    res.json(cancion);
});

export default router;
