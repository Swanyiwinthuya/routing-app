import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import { action as destroyAction } from "./routes/destroy";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Contact, {
  loader as contactLoader,
   action as contactAction,
} from "./routes/contact";
import EditContact , {
  action as editAction,
} from "./routes/edit";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
