import { getContacts } from "./contacts";

export async function rootLoader() {
   const contacts = await getContacts();
   return { contacts };
}
