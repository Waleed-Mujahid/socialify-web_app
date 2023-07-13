import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import AuthApi from "../components/AuthApi";
import ShowPosts from "../components/ShowPosts";
import classes from "./User.module.css";

export const Loader = () => {
  return (
    <div className={classes.heading}>
      <h2>Loading...</h2>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className={classes.heading}>
      <h2>Sorry, no posts found for this user</h2>
    </div>
  );
}

export default function () {
  const { userName } = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = useContext(AuthApi);
  const userExists = filteredPosts.length > 0;

  useEffect(() => {
    setIsLoading(false);
    setFilteredPosts(data.posts.filter((post) => post.author === userName));
  }, [userName]);

  if (isLoading) return <Loader />;
  if (!userExists) return <NotFound />;
    
  return (
    <>
      <h2 className={classes.heading}>{userName}'s personal blog</h2>
      <ShowPosts posts={filteredPosts} />
    </>
  );
}
