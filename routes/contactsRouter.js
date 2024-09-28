import express from "express";
import validateBody from "../middlewares/validateBody.js";
import model from "../models/contact.js";
import ctrl from "../controllers/contactsControllers.js";
import isValidId from "../middlewares/isValidId.js";
import authenticate from "../middlewares/authenticat.js";

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrl.getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getOneContact);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.deleteContact);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(model.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(model.updateContactSchema),
  ctrl.updateContact
);
contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(model.updateFavoriteSchema),
  ctrl.updateContact
);

export default contactsRouter;
