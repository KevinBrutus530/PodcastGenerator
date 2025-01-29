import express, { Application } from "express";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import podcastRoutes from "./routes/routes";
import errorHandler from "./middleware/errorHandler";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/api", podcastRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
