import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "./contacts";

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

export const deleteContactAction = async ({ params }) => {
   await deleteContact(params.contactId);
   return redirect("/");
};

export async function editAction({ request, params }) {
   const formData = await request.formData();
   const updates = Object.fromEntries(formData);
   await updateContact(params.contactId, updates);
   return redirect(`/contacts/${params.contactId}`);
}
