import express from "express";
import morgan from "morgan";

import ph_Routes_Routes from "./routes/ph.routes.js";
const app=express();

// config
app.set("port",5000)

//middlewares
app.use(morgan("dev"));
app.use(express.json())

//rutas
app.use("/api/ph",ph_Routes_Routes)

export default app;
