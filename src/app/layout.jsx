import { useEffect, useRef } from "react";
import { Form, NavLink, Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";

export const Index = () => {
   return (
      <p id="zero-state">
         This is a demo for React Router.
         <br />
         Check out <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
      </p>
   );
};

export default function RootLayout() {
   const { contacts, q } = useLoaderData();
   const navigation = useNavigation();
   const submit = useSubmit();

   const inputSearchRef = useRef(null);

   const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

   useEffect(() => {
      inputSearchRef.current.value = q;
   }, [q]);

   return (
      <>
         <div id="sidebar">
            <h1>React Router Contacts</h1>
            <div>
               <Form id="search-form" role="search">
                  <input
                     id="q"
                     aria-label="Search contacts"
                     placeholder="Search"
                     type="search"
                     name="q"
                     defaultValue={q}
                     ref={inputSearchRef}
                     onChange={(event) => {
                        const isFirstSearch = q == null;
                        submit(event.currentTarget.form, {
                           replace: !isFirstSearch,
                        });
                     }}
                     className={searching ? "loading" : ""}
                  />
                  <div id="search-spinner" aria-hidden hidden={!searching} />
                  <div className="sr-only" aria-live="polite"></div>
               </Form>
               <Form method="post">
                  <button type="submit">New</button>
               </Form>
            </div>
            <nav>
               {contacts.length ? (
                  <ul>
                     {contacts.map((contact) => (
                        <li key={contact.id}>
                           <NavLink
                              to={`contacts/${contact.id}`}
                              className={({ isActive, isPending }) =>
                                 isActive ? "active" : isPending ? "pending" : ""
                              }
                           >
                              {contact.first || contact.last ? (
                                 <>
                                    {contact.first} {contact.last}
                                 </>
                              ) : (
                                 <i>No Name</i>
                              )}{" "}
                              {contact.favorite && <span>★</span>}
                           </NavLink>
                        </li>
                     ))}
                  </ul>
               ) : (
                  <p>
                     <i>No contacts</i>
                  </p>
               )}
            </nav>
         </div>
         <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
            <Outlet />
         </div>
      </>
   );
}
