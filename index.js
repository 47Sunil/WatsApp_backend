import dotenv from "dotenv";
import app from "./app.js";
import logger from "./config/logger.js";
import mongoose from "mongoose";

// dotEnv config {to access the variables}
dotenv.config();

// env variables
const { DATABASE_URL } = process.env;
const PORT = process.env.PORT || 8000;
console.log(process.env.NODE_ENV);

// exit on mongodb error
mongoose.connection.on("error", (err) => {
  logger.error(`Mongodb connection error : ${err}`);
  process.exit(1);
});

// mongodb debug mode
if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

// connect mongodb
mongoose
  .connect(DATABASE_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to mongodb");
  });

//! here we are using custom logger.
let server = app.listen(PORT, () => {
  logger.info(`server is listening at ${PORT}`);
  //   console.log("process id", process.pid); // process has an id
  //   throw new Error("error in servere");
});

//! handle server error or uncought exception and unhandled rejection error.
const exitHandler = () => {
  if (server) {
    logger.info("server closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const unexpextedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpextedErrorHandler); // it act as an event listener.
process.on("unhandledRejection", unexpextedErrorHandler);

//! SIGTERM
// it is not for window, but we will need while deployment.
process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server closed");
    process.exit(1);
  }
});
