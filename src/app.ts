import express from "express";
import bodyParser from "body-parser";
import * as loggerLib from "./api/logger";
import * as api from "./api";

// Create Express server
const app = express();
const webappFolder = 'dist/web';

const logger = loggerLib.createLogger('api.app');

// Express configuration
app.set("listen", () => {
  logger.info(`app started at ${app.get("port")}`);
});
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/api/*', api.a);

app.get('*.*', express.static(webappFolder));

app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: webappFolder });
});

export default app;