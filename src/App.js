import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SlowmadApp from "./SlowmadApp";
import ContactPage from "./ContactPage";
import Page from "./Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Page>
        <SlowmadApp />
      </Page>
    )
  },
  {
    path: "slowmad/contact-us",
    element: (
      <Page>
        <ContactPage />
      </Page>
    )
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;