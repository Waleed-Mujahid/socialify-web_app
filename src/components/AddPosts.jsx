import React from "react";
import classes from "./addPosts.module.css";
import { useContext, useRef } from "react";
import AuthApi from "./AuthApi";
import { useNavigate } from "react-router-dom";


export default function addPosts() {
  const data = useContext(AuthApi);
  const formRef = useRef(null);
  const navigate = useNavigate();
  let user = data.userName === "" ? "Anonymous" : data.userName;

  function submitHandler(event) {
    event.preventDefault();
    const text = event.target.text.value;
    const newPost = { author: user, text: text };
    data.setPosts([...data.posts, newPost]);
    data.setNewPostFlag(false);
    navigate("/");
  }

  function clickOutHandler(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      data.setNewPostFlag(false);
      navigate("/");
    }
  }

  function cancelHandler(event) {
    event.preventDefault();
    data.setNewPostFlag(false);
    navigate("/");
  }

  document.addEventListener("mousedown", clickOutHandler);

  return (
      <form className={classes.container} onSubmit={submitHandler} method="post" ref={formRef}>
        <label className={classes.label} htmlFor="text">
          What is on your mind {user} ?
        </label>
        <textarea required name="text" id="text" cols="30" rows="6"></textarea>

        <div className={classes.buttons}>
          <button type="submit" className={classes.post}>
            Post
          </button>
          <button type="submit" className={classes.post} onClick={cancelHandler} >
            Cancel
          </button>
        </div>
      </form>
  );
}
