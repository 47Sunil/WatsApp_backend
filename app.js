import express from "express";
import dotenv from "dotenv";
import morgan from "morgan"; // to console the request info
import helmet from "helmet"; // to secure express app by setting various http headers.
import mongoSanitize from "express-mongo-sanitize"; // sanitizes user-supplied data to prevent mongoDB operator injection.
import cookieParser from "cookie-parser"; // to parse cookie header and req.cookie with an on=bject keyed by the cookie name.
import compression from "compression"; // to compress response bodies for all request that traverse through the middleware.
import fileUpload from "express-fileupload"; // to make uploaded files accessable from req.files
import cors from "cors"; // to protect and restrict access to the server.

//  create express app
const app = express();

// to console the request info
if (process.env.NODE_ENV != "production") {
  app.use(morgan("dev"));
}

// to secure express app by setting various http headers.
app.use(helmet());

// parse json request url
app.use(express.json());

// parse json request body
app.use(express.urlencoded({ extended: true }));

// sanatize request data
app.use(mongoSanitize());

// enable cookie-parser
app.use(cookieParser());

// gzip compression
app.use(compression());

// file upload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//restrict access to teh server.
app.use(
  cors({
    origin: "http://localhost:3000", // only port to connect frontEnd
  })
);

app.get("/", (req, res) => {
  res.send(req.body);
});

export default app;
