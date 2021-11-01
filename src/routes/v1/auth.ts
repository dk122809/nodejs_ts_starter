import express from "express";
import { signin, signup } from "../../controllers/auth";
import requestValidator from "../../middlewares/requestValidation";
import { login, register } from "../../validations/auth";

const router = express.Router();

/**
 * @api {post} auth/register Register
 * @apiDescription Register a new user
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String{1..128}}          name     User's name
 * @apiParam  {String{6..128}}  password  User's password
 * @apiParam  {String}  username  User's username
 *
 * @apiSuccess (Created 201) {Boolean}  status     response status
 * @apiSuccess (Created 201) {String}  message   response message
 * @apiSuccess (Created 201) {Object}  data    user data and token
 *
 * @apiError (Bad Request 400) {Boolean}  status  response status
 * @apiError (Bad Request 400) {String}  message  response message
 * @apiError (Bad Request 400) {Object}  error  errors in json
 * @apiError (Bad Request 400) {Object}  data  empty array
 */
router.post("/register", requestValidator(register), signup);

/**
 * @api {post} auth/login Register
 * @apiDescription login user
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String{6..128}}  password  User's password
 * @apiParam  {String}  username  User's username
 *
 * @apiSuccess (Created 201) {Boolean}  status     response status
 * @apiSuccess (Created 201) {String}  message   response message
 * @apiSuccess (Created 201) {Object}  data    user data and token
 *
 * @apiError (Bad Request 400) {Boolean}  status  response status
 * @apiError (Bad Request 400) {String}  message  response message
 * @apiError (Bad Request 400) {Object}  error  errors in json
 * @apiError (Bad Request 400) {Object}  data  empty array
 */
router.post("/login", requestValidator(login), signin);

export default router;
