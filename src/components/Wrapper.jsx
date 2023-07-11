import React from "react";
import { useState } from "react";
import AuthApi from "./AuthApi";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  const newPost1 = {author: "Waleed", text: "Life is like riding a bicycle. To keep your balance, you must keep moving."}
  const newPost2 = {author: "Ahmed", text: "Genius is one percent inspiration and ninety-nine percent perspiration."}
  const newPost3 = {author: "Ahmed", text: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."}


  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState([newPost1, newPost2, newPost3]);
  const [newPostFlag, setNewPostFlag] = useState(window.location.pathname === "/add-post" ? true : false);


  return (
    <div style={{ height: "100%" }}>
      <AuthApi.Provider value={{ userName, setUserName, posts, setPosts, newPostFlag, setNewPostFlag }}>
        <Outlet />
      </AuthApi.Provider>
    </div>
  );
}
