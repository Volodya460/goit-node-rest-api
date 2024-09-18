import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const cleanedMessage = error.message.replace(/\"/g, "");
      next(HttpError(400, cleanedMessage));
    }
    next();
  };

  return func;
};

export default validateBody;
