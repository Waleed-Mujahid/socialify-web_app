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
      {!newPostFlag && (
        <div className={classes.container}>
          <Link
            to="/add-post"
            onClick={clickHandler}
            className={classes.newPostButton}
          >
            Click here to add post
          </Link>
          <Link className={classes.newPostButton} to='/posts' > Fetch posts from Server </Link>
        </div>
      )}

      <div className={classes.newPost}>{newPostFlag && <Outlet />}</div>

      <div className={`${newPostFlag ? classes.blur : ""}`}>
        <ShowPosts posts={posts} />
      </div>
    </>
  );
}
