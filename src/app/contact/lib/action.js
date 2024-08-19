import { redirect } from "react-router-dom";
import { deleteContact } from "../../lib/contacts";

export const deleteContactAction = async ({ params }) => {
   await deleteContact(params.contactId);
   return redirect("/");
};
