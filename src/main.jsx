import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Wrapper from "./components/Wrapper";
import MainContent from "./components/MainContent";
import AddPosts from "./components/AddPosts";
import User from "./routes/User";
import Home from "./routes/Home";
import Login  from "./routes/Login";
import Register, { action as RegisterAction } from "./routes/Register";
import Posts, {loader as postsLoader} from "./routes/Posts";
import SinglePost, {loader as singlePostLoader} from "./routes/SinglePost";

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
            children: [
              {
                path: "/add-post",
                element: <AddPosts />,
              },
            ],
          },
          {
            path: "/users/:userName",
            element: <User />,
          },
          {
            path: "/posts",
            element: <Posts />,
            loader: postsLoader,
          },
          {
            path: "/posts/:postId",
            element: <SinglePost />,
            loader: singlePostLoader,
          },
          // {
          //   path: "/posts/:postId",
          //   element: <SinglePost />,
          //   loader: singlePostLoader,
          // }
        ],
      },
      {
        path: "login",
        element: <Login />,
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

