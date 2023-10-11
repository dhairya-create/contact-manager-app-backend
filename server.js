//Creating express server
const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

//to accept the data from client

app.use(express.json())

//Defining the PORT
const port = process.env.PORT || 5000;

app.use('/api/contacts',require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
