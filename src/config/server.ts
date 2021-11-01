import express from "express";
import helmet from "helmet";
import cors from 'cors';
import connectDB from "./mongo";
import authRoute from "../routes/v1/auth";
import apiResponseHandler from "../utils/apiResponse";
// import isAuthorized from "../middlewares/auth";

const app = express();

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db
connectDB();

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// routes
app.use('/v1/auth', authRoute);

// response handler
app.use(apiResponseHandler);

export default app;