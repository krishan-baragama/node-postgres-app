const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

const env = process.env.NODE_ENV || "dev";

// Load correct env file
dotenv.config({
  path: path.resolve(__dirname, `.env.${env}`)
});

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Server running in ${env} mode`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});