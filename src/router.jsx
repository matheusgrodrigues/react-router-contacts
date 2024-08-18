import { createBrowserRouter } from "react-router-dom";

import GlobalError from "./app/global-error";
import RootLayout from "./app/layout";
import EditContact from "./app/contact/edit";
import Contact from "./app/contact";

import { contactLoader, rootLoader } from "./app/lib/loader";
import { rootAction } from "./app/lib/action";

const router = createBrowserRouter([
   {
      errorElement: <GlobalError />,
      element: <RootLayout />,
      loader: rootLoader,
      action: rootAction,
      path: "/",
      children: [
         {
            element: <Contact />,
            loader: contactLoader,
            path: "contacts/:contactId",
         },
         {
            element: <EditContact />,
            loader: contactLoader,
            path: "contacts/:contactId/edit",
         },
      ],
   },
]);

export default router;
