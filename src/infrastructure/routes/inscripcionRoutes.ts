import express from "express";
import { InscripcionController } from "../controllers/InscripcionController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// Solo se puede acceder si el usuario tiene token válido
router.post("/registrar", authMiddleware, InscripcionController.registrar);

export default router;
