/* eslint-disable no-console */
require("dotenv").config();
const logger = require("./logger");
const app = require("./app");
const port = app.get("port");
const server = app.listen(port);

process.on("unhandledRejection", (reason, p) =>
    logger.error("Unhandled Rejection at: Promise ", p, reason)
);

server.on("listening", () =>
    logger.info(
        "CodeBridge Application started on http://%s:%d",
        app.get("host"),
        port
    )
);
app.setup(server);
