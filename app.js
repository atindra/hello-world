// app.js
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Route for root path
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "index.html");
  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Sorry, something went wrong.");
      return;
    }
    res.send(data);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
