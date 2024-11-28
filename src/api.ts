import express, { Application, ErrorRequestHandler } from "express";
import serverless from "serverless-http";
import helloAuth from "@hellocoop/express";
import bodyParser from "body-parser";
import { helloConfig } from "./hello.config";

const app: Application = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Router
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Identity v0",
  });
});
app.use(`/.netlify/functions/api`, router);

// Hellō Middleware
app.use(helloAuth(helloConfig));

// Error Handling
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message,
  });
};
app.use(errorHandler);

// Export for Netlify
module.exports = app;
module.exports.handler = serverless(app);
