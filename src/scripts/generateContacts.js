import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = contacts.concat(newContacts);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log(`Successfully added ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(17);
