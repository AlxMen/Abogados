process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const router = require("./api/routers/router");

const mongooseStart = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL || "mongodb://localhost:27017/", {
            dbName: process.env.MONGO_DB || "lawfirm",
        }
        );
        console.log("Connected to DB");
    } catch (err) {
        console.log(`Error connecting to DB: ${err}`);
    }
}

mongooseStart()


try {
    // Start Express Server
    // creamos const para conectar al puerto en .env
    const PORT = process.env.PORT || 8080
    app
        .use(morgan("combined"))
        .use(cors())
        .use(express.json())
        .use("/api", router)
        .listen(PORT, (err) => { // usamos PORT para conectar al puerto en .env
            console.info("\n\n" + "=".repeat(40));
            console.info(`💻  SERVER LIVE`);
            console.info(`📡  PORT: http://localhost:${PORT}`);
            console.info("=".repeat(40) + "\n\n");
        });
} catch (err) {
    console.log(`Error launching Server: ${err}`);
}