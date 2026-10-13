import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const app = express();

connectDB()

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("running server"));

const PORT = 4000;

app.listen(PORT, () => console.log("server runnining now!"));
