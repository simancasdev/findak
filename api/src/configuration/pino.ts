import env from "./env";

export const config = {
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:mm-dd-yyyy HH:MM:ss",
      ignore: env.ENVIRONMENT === "development" ? "hostname,pid" : undefined,
    },
  },
};
