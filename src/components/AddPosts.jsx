import React from "react";
import classes from "./addPosts.module.css";

export default function addPosts({setFlag, userName, addPost}) {
  let user = (userName === "") ? "Anonymous" : userName;

  function submitHandler(event) {
    event.preventDefault();
    setFlag(false);
    const text = event.target.text.value;
    const newPost = {author: user, text: text};
    addPost(newPost);
   }

  return (
    <div className={classes.container}>
      <form onSubmit = {submitHandler} method="post">
        <label className = {classes.label} htmlFor="text">What is on your mind {user} ?</label>
        <textarea required name="text" id="text" cols="30" rows="6"></textarea>
        <button type="submit" className={classes.post}>Post</button>
      </form>
    </div>
  );
}
