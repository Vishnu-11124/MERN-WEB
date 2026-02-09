import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express()

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB()

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})