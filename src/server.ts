import "./utils/env";
import app from "./app";

const server = app.listen(app.get("port"), app.get("listen"));

export default server;