import express, { Application, ErrorRequestHandler } from "express";
import serverless from "serverless-http";
import helloAuth from "@hellocoop/express";
import bodyParser from "body-parser";
import { helloConfig } from "./utils/helloConfig";

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

// Move "/hellocoop" under the router
router.use("/hellocoop", (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  res.send("Middleware test passed!"); // Temporary response
  next()
});

router.use("/hellocoop", helloAuth(helloConfig));

app.use(`/.netlify/functions/api`, router);


// Test route
app.get("/.netlify/functions/api/test", (req, res) => {
  res.send("Test route working!");
});
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
