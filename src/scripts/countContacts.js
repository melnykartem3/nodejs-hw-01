import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const contactsLength = contacts.length;
    return contactsLength;
  } catch (error) {
    console.log('failed to count the number of contacts', error);
    return 0;
  }
};

console.log(await countContacts());
