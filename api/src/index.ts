import cors from "cors";
import express from "express";
import {json} from "body-parser";
import env from "./configuration/env";
import {controllers} from "./controllers";
import {db} from "./configuration/db-connection";
import {errorHandler, currentUser} from "./middlewares";

db();
const server = express();

server.use(json());
server.use(cors());
server.use(errorHandler);
server.use(currentUser);

controllers.forEach((endpoint) => {
  server.use("/api" + endpoint.uri, endpoint.router);
});

server.listen(env.PORT, () =>
  console.log(`Server is running on port ${env.PORT}`)
);
