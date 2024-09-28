import express from "express";
import validateBody from "../middlewares/validateBody.js";
import authenticat from "../middlewares/authenticat.js";

import model from "../models/users.js";
import ctrl from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(model.registerSchema), ctrl.register);
authRouter.post("/login", validateBody(model.loginSchema), ctrl.login);
authRouter.get("/current", authenticat, ctrl.getCurrent);
authRouter.post("/logout", authenticat, ctrl.logout);
authRouter.patch(
  "/",
  authenticat,

  validateBody(model.updateSubscriptionSchema),
  ctrl.updateSubscription
);

export default authRouter;
