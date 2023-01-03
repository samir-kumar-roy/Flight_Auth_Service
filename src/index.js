const { PORT } = require("./config/serverConfig");
const express = require("express");
const app = express();
const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log("server is running at port: " + PORT);
    })
}
prepareAndStartServer();