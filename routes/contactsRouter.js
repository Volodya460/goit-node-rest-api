import express from "express";
import validateBody from "../middlewares/validateBody.js";
import model from "../models/contact.js";
import ctrl from "../controllers/contactsControllers.js";
import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", isValidId, ctrl.getOneContact);

contactsRouter.delete("/:id", isValidId, ctrl.deleteContact);

contactsRouter.post(
  "/",
  validateBody(model.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(model.updateContactSchema),
  ctrl.updateContact
);
contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(model.updateFavoriteSchema),
  ctrl.updateContact
);

export default contactsRouter;
