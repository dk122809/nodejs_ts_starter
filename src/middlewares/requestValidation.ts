import httpStatus from "http-status";

const requestValidator = (schema) => {
  return async (req, res, next) => {
    const options = {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    };
    const { error } = await schema.validate(req.body, options);
    let errorData = error?.details.map((item) => ({
      [item.context.label]: item.message,
    }));
    if (error) {
      next({
        statusCode: httpStatus.BAD_REQUEST,
        status: false,
        message: error?.details.map((item) => item.message).join(", "),
        error: errorData,
      });
    } else {
      next();
    }
  };
};

export default requestValidator;
