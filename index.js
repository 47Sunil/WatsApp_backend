import dotenv from "dotenv";
import app from "./app.js";
import logger from "./config/logger.js";

// dotEnv config {to access the variables}
dotenv.config();

// env variables
const PORT = process.env.PORT || 8000;

console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
  logger.info(`server is listening at ${PORT}`);
});

console.log("kmdv");
