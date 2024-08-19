import { redirect } from "react-router-dom";
import { createContact, updateContact } from "./contacts";

export async function rootAction() {
   const contact = await createContact();

   return redirect(`/contacts/${contact.id}/edit`);
}

export async function favoriteAction({ request, params }) {
   const formData = await request.formData();
   return updateContact(params.contactId, {
      favorite: formData.get("favorite") === "true",
   });
}
