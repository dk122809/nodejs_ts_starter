import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { config } from "../config/vars";
import { UNAUTHORIZED } from "../utils/responseMessage";

const unauthorizedResponse = {
  statusCode: httpStatus.UNAUTHORIZED,
  status: false,
  message: UNAUTHORIZED,
};

const isAuthorized = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userData = await jwt.verify(token, config.secret_key);
    req.userData = userData;
    return next();
  } catch (err) {
    return next(unauthorizedResponse);
  }
};

export default isAuthorized;
