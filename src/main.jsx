import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Wrapper from "./components/Wrapper";
import MainContent from "./components/MainContent";

import User from "./routes/User";
import Home from "./routes/Home";
import Login, { action as loginAction } from "./routes/Login";
import Register, { action as RegisterAction } from "./routes/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <MainContent />,
          },
          {
            path: "/users/:userName",
            element: <User />,
          }
        ],
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    action: RegisterAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);