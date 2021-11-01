import Joi from "joi";

const register = Joi.object({
  name: Joi.string().required().max(128),
  username: Joi.string().required().min(6).max(128),
  password: Joi.string().required().min(6).max(128),
});

const login = Joi.object({
  username: Joi.string().required().min(6).max(128),
  password: Joi.string().required().min(6).max(128),
});

export { register, login };
