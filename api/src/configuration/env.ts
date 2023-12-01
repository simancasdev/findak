require("dotenv").config();

export default {
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.ENVIRONMENT,
  JWT_SECRET: process.env.JWT_SECRET,
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  MONGO_STAGING_URL: process.env.MONGO_STAGING_URL,
  DATABASE: {
    URL: `mongodb://${process.env.MONGO_HOST}:${
      process.env.MONGO_PORT || 27017
    }/${process.env.MONGO_DB}`,
    PROPERTIES: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
    },
  },
};
