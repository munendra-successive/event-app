import { type NextFunction, type Request, type Response } from "express";
import JoiSchema from "../schema/joiSchema";
import logger from "../../../utils/logger";

class Validation {
  static validate = (req: Request, res: Response, next: NextFunction): any => {
    try {
      logger.info("Validation - validate");
      JoiSchema.register().validate(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      return res.status(500).json({ message: "Validation error" });
    }
    next();
    return undefined;
  };
}

export default Validation;
