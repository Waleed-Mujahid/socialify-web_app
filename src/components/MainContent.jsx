import React from "react";
import { useContext } from "react";
import AddPosts from "./addPosts";
import ShowPosts from "./ShowPosts";
import AuthApi from "./AuthApi";
import classes from "./MainContent.module.css";

export default function MainPage() {
  const data = useContext(AuthApi) 
  const userName= data.userName
  const posts= data.posts;
  const setPosts= data.setPosts;
  const setNewPostFlag= data.setNewPostFlag;
  const newPostFlag= data.newPostFlag;

  function clickHandler() {
    setNewPostFlag(true);
  }

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
        {!newPostFlag && (
          <button
            onClick={clickHandler}
            className={`${classes.newPostButton} ${
              !newPostFlag ? "" : classes.blur
            }`}
          >
            Click here to add post
          </button>
        )}

        <div className={classes.clear}></div>

        {newPostFlag && (
          <AddPosts
            setFlag={setNewPostFlag}
            userName={userName}
            addPost={addNewPost}
          />
        )}

        <div className={`${newPostFlag ? classes.blur : ""}`}>
          <ShowPosts posts={posts} />
        </div>
      </div>
  );
}
