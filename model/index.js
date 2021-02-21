const { json } = require('express');
const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  try {
    const information = await fs.readFile(contactsPath, 'utf-8');
    const parsedContacts = JSON.parse(information);
    return parsedContacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const information = await fs.readFile(contactsPath, 'utf-8');
    const parsedContacts = JSON.parse(information);
    const showContactById = parsedContacts.find((contact) => {
      if (String(contact.id) === String(contactId)) {
        return contact;
      }
    });
    return showContactById;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
