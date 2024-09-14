import express from "express";
import validateBody from "../helpers/validateBody.js";
import Schema from "../schemas/contactsSchemas.js";
import ctrl from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getOneContact);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post(
  "/",
  validateBody(Schema.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  validateBody(Schema.updateContactSchema),
  ctrl.updateContact
);

export default contactsRouter;
