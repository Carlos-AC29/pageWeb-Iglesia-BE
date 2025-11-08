import express from "express";
import authRoutes from "./routes/authRoutes";
import inscripcionRoutes from "./routes/inscripcionRoutes";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/inscripciones", inscripcionRoutes);

export { app };
