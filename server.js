const express = require('express');
require("dotenv").config();
const app = new express();

const port = process.env.PORT || 4000 ;

const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const path = require("path");

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "client/build")));
    app.get("*", (req,res)=> {
        res.sendFile(path.join(__dirname,"client/build/index.html"))
    })
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

