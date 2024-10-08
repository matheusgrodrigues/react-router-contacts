import { createBrowserRouter } from "react-router-dom";

import GlobalError from "./app/global-error";
import RootLayout, { Index } from "./app/layout";
import EditContact from "./app/contact/edit";
import Contact from "./app/contact";

import { rootLoader, contactLoader } from "./app/lib/loader";
import { rootAction, deleteContactAction, editAction, favoriteAction } from "./app/lib/action";

const router = createBrowserRouter([
   {
      errorElement: <GlobalError />,
      element: <RootLayout />,
      loader: rootLoader,
      action: rootAction,
      path: "/",
      children: [
         {
            errorElement: <GlobalError />,
            children: [
               { index: true, element: <Index /> },
               {
                  element: <Contact />,
                  loader: contactLoader,
                  action: favoriteAction,
                  path: "contacts/:contactId",
               },
               {
                  element: <EditContact />,
                  loader: contactLoader,
                  action: editAction,
                  path: "contacts/:contactId/edit",
               },
               {
                  errorElement: <div>Oops! There was an error.</div>,
                  action: deleteContactAction,
                  path: "contacts/:contactId/destroy",
               },
            ],
         },
      ],
   },
]);

export default router;

/* -> Outra forma com JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
*/
