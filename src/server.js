require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

// config view engine 
viewEngine(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// init web routes
initWebRoutes(app);
let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("App is running at port 8080 (it's actually working what?!)")
});