import pino from "pino";
import {config} from "../configuration/pino";

const logger = pino(config);

export {logger};
