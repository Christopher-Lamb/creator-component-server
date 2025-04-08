const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");

// Middleware to parse JSON bodies
app.use(express.json());

// Allow requests from http://localhost:3002
app.use(
  cors({
    origin: "http://localhost:3002",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

const routes = require("./routes"); // Import the top-level routes
app.use("/", routes); // Use the routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
