import React from "react";
import classes from "./ShowPosts.module.css";

export default function ShowPosts({ posts }) {
  return (
    <div className={classes.container}>
      {posts.map((post, index) => (
        <ul key={index} className={classes.postBox}>
          <li className={classes.postAuthor}>{post.author}</li>
          <li className={classes.postText}>{post.text}</li>
        </ul>
      ))}
    </div>
  );
}
