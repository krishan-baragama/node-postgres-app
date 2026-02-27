const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");

const env = process.env.NODE_ENV || "dev";

dotenv.config({
  path: path.resolve(__dirname, `.env.${env}`)
});

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Server running in ${env} mode`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});