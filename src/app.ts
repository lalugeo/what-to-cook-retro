import express from "express";
import bodyParser from "body-parser";
import * as loggerLib from "./api/logger";
import * as api from "./api";
import * as db from "./db";

const webappFolder = 'dist/web';

const logger = loggerLib.createLogger('api.app');
const app = express();
app.set("listen", async () => {
  try {
    await db.getConnection();
    logger.info(`app started at ${app.get("port")}`);
  } catch (err) {
    logger.error(err.message);
  }
});

app.set("port", process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

api.routes(app);

app.get('*.*', express.static(webappFolder));

app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: webappFolder });
});

export default app;