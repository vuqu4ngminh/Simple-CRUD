import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import initApis from "./apis/apis";
import bodyParser from 'body-parser';
import mongoose from "mongoose";

require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL).then(() => {
    configViewEngine(app)
    initWebRoutes(app)
    initApis(app)
    const PORT = process.env.PORT || 6060

    app.listen(PORT, () => {
        console.log("Server is running on " + PORT);
    })
}).catch((error) => {
    console.log(error);
})
