import React from "react";
import classes from "./ShowPosts.module.css";
import { useNavigate, Link } from "react-router-dom";

export default function ShowPosts({ posts }) {
  // Make sure that the posts have the same structure
  if (!posts[0].author) {
    posts.forEach((post) => {
      post.author = post.title;
      post.text = post.body;
    });
  }

  const navigate = useNavigate();
  const clickHandler = (event) => {};

  return (
    <div className={classes.container}>
      {posts.map((post, index) => (
        <ul key={index} className={classes.postBox} onClick={clickHandler}>
          <Link to={!post.id ? `/users/${post.author}` : `/posts/${post.id}`}>
            <li className={classes.postAuthor}>{post.author}</li>
            <li className={classes.postText}>{post.text}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}
