import { getContact, getContacts } from "./contacts";

export async function rootLoader() {
   const contacts = await getContacts();
   return { contacts };
}

export async function contactLoader({ params }) {
   const contact = await getContact(params.contactId);
   return { contact };
}
