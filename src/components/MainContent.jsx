import React from "react";
import { useContext } from "react";
import ShowPosts from "./ShowPosts";
import AuthApi from "./AuthApi";
import classes from "./MainContent.module.css";
import { Outlet, Link } from "react-router-dom";

export default function MainContent() {
  const data = useContext(AuthApi);
  const posts = data.posts;
  const setNewPostFlag = data.setNewPostFlag;
  const newPostFlag = data.newPostFlag;

  function clickHandler() {
    setNewPostFlag(true);
  }

  return (
    <>
      <div class = {classes.emptySpaceNav}></div>
      {!newPostFlag && (
        <Link
          to="/add-post"
          onClick={clickHandler}
          className={`${classes.newPostButton} ${
            !newPostFlag ? "" : classes.blur
          }`}
        >
          Click here to add post
        </Link>
      )}

      <div className={classes.clear}></div>

      {newPostFlag && <Outlet />}

      <div className={`${newPostFlag ? classes.blur : ""}`}>
        <ShowPosts posts={posts} />
      </div>
    </>
  );
}
