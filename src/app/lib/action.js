import { createContact } from "./contacts";

export async function rootAction() {
   const contact = await createContact();
   return { contact };
}
