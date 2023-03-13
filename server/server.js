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

app.route("/ratings").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT AVG(cleanliness) as avg_cleanliness,
    AVG(accuracy) as avg_accuracy,
    AVG(communication) as avg_communication,
    AVG(location) as avg_location,
    AVG(check_in) as avg_check_in,
    AVG(value) as avg_value
  FROM ratings;`);

    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/ratings/avg").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT AVG((cleanliness + accuracy + communication + location + check_in + value) / 6) AS overall_avg FROM ratings;
    `);
    res.status(200).json(data.rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

app.route("/property").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM property`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.route("/images").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM images`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
