import { createBrowserRouter } from "react-router-dom";

import GlobalError from "./app/global-error";
import RootLayout from "./app/layout";
import Contact from "./app/contact/Contact";

import { rootLoader } from "./app/lib/loader";

const router = createBrowserRouter([
   {
      errorElement: <GlobalError />,
      children: [
         {
            element: <Contact />,
            path: "/contacts/:contactsId",
         },
      ],
      element: <RootLayout />,
      loader: rootLoader,
      path: "/",
   },
]);

export default router;
