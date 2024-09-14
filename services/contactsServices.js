import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);

  return JSON.parse(data);
}

async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find((el) => el.id === id);
  return result || null;
}

async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex((el) => el.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

async function updateContact(id, { name, email, phone }) {
  const contacts = await listContacts();
  const index = contacts.findIndex((el) => el.id === id);
  if (index === -1) {
    return null;
  }

  contacts[index] = {
    ...contacts[index],
    ...(name && { name }),
    ...(email && { email }),
    ...(phone && { phone }),
  };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
