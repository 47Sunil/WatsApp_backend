import dotenv from "dotenv";
import app from "./app.js";

// dotEnv config {to access the variables}
dotenv.config();

// env variables
const PORT = process.env.PORT || 8000;

console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});

console.log("kmdv");
