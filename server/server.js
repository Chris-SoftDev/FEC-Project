import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db.js";

dotenv.config({ path: "./server/.env" });

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.static("../"));

app.route("/languages").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM languages`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/currencies").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM currencies`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/reviews").get(async (req, res) => {
  try {
    
    const data = await db.query(`SELECT * FROM reviews`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
