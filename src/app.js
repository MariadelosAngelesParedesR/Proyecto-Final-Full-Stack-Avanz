//objeto
const express = require("express");
const mysql = require('mysql');
const myconn = require ('express-myconnection');

const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const dbConn = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
};


//server
const app = express();
//port
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
//niddelwares
app.use(myconn(mysql, dbConn, "single"));
app.use (express.urlencoded({
	extended: false
}))
app.use(express.json());
app.use(morgan("dev"));

//rutas
app.use('/', require('./routes/inicioroutes'));

//Listen
app.listen(PORT, () =>
	console.log(`El server se esta ejecutando correctamente en el puerto ${PORT}`)
);


