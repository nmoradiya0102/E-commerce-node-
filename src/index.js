const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
// const cors = require("cors");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/index");
const config = require("./config/config");
const app = express();

app.use(bodyParser.urlencoded({extended : false}));

/**
 * allow json data from body
 * parse application json
*/
app.use(bodyParser.json());

app.use("/v1" , routes);

/** Get image */
app.use(express.static(`./public`));

app.use((req , res , next) => {
    next(new Error("Route not found..!"));
});

// Database connection
connectDB();

// Create a server using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number " + config.port);
});