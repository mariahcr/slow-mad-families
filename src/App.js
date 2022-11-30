import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SlowmadApp from "./SlowmadApp";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SlowmadApp />
    )
  },
  {
    path: "slowmad/contact-us",
    element: (
      <ContactPage />
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