const express = require('express');
const swaggerUI = require("swagger-ui-express");
const mongoose = require("mongoose");
require("dotenv").config();


const routes = require('./../routes/mutant.routes');
const path = require("path");

const swaggerJsDoc = require("swagger-jsdoc");
const swagger = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ficohsa Challenge",
            version: "1.0.0"
        }
    },
    apis: [`${path.join(__dirname, "./../routes/*.js")}`]
}

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.databases();
        this.middlewares();
        this.routes();
    }

    // Middleware 
    middlewares() {
        this.app.use(express.json());
        this.app.use("/api", routes);
        this.app.use("/api/documentation", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swagger)));
    }

    routes() {
        this.app.get('*', function(req, res) {
            res.redirect('/api/documentation');
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running in port:', process.env.PORT);
        });
    }

    databases() {
        // mongodb connection
        mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log("Connected to MongoDB Atlas"))
        .catch((error) => console.error(error));
    }

    
}

module.exports = Server;