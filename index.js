require("dotenv").config();

const express = require("express");
const { json } = require("sequelize");
const api = require("./router/router");
const app = express();
const port =  4000

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));

app.use(api);

app.listen(port, () => {
    console.log(`SERVER RUNNING AT PORT ${port}`);
    
})