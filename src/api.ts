import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

import serverless from "serverless-http";
import helloAuth from '@hellocoop/express';
import bodyParser from "body-parser";

const app: Application = express();
const helloConfig = require( './hello.config.ts') ;

// Parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "Welcome to Identity v0"
  });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message,
  });
};
app.use(errorHandler);

app.use(`/.netlify/functions/api`, router);

(async () => {
  try {
    // const issuerAgent = await initializeIssuerAgent();
    // const issuerAgent = await initializeAgent(issuerConfig, ISSUER_PORT);
    // const verifierAgent = await initializeAgent(verifierConfig, VERIFIER_PORT);
    // console.log("Agents successfully initialized.");

    // app.use('/', routes(issuerAgent, verifierAgent)); 
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log("Hello Config:", helloConfig);

    app.use( helloAuth( helloConfig ) )

    //TODO: Run Mediator in separate Express app 
    // const mediatorInvitationUrl = await initializeMediator(mediatorConfig, MEDIATOR_PORT);
    // const holderAgent = await initializeHolder(mediatorInvitationUrl);

    // Global error handler
    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Server Running on port: ${PORT}`);
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error:any) {
    console.error("Error during initialization:", error.message);
    process.exit(1);
  }
})();

module.exports = app;
module.exports.handler = serverless(app);
