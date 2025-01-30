import express from "express";
import cors from "cors";
import connectToDatabase from "./db/db.js";

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server is running on port :", process.env.PORT);
});
