const fs = require("node:fs/promises");
const crypto = require("node:crypto");
const path = require("node:path");

const contactsPath = path.join(__dirname, "../config/contacts.json");

//* helpers
async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

//* api
async function getAll() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getById(contactId) {
  const contacts = await getAll();
  const contact = contacts.find((contact) => contact.id === contactId);

  return contact ?? null;
}

async function add(body) {
  const contacts = await getAll();

  const newContact = {
    ...body,
    id: crypto.randomUUID(),
  };
  contacts.push(newContact);
  await writeContacts(contacts);

  return newContact;
}

async function updateById(contactId, body) {
  const contacts = await getAll();

  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  contacts[idx] = { ...contacts[idx], ...body };
  await writeContacts(contacts);

  return contacts[idx];
}

async function removeById(contactId) {
  const contacts = await getAll();

  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }

  const deletedContact = contacts.splice(idx, 1);
  await writeContacts(contacts);

  return deletedContact;
}

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById,
};
