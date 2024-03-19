const express = require('express');
require("dotenv").config();
const app = new express();

const port = process.env.PORT || 4000 ;
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

