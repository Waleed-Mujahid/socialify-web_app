import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import AuthApi from "../components/AuthApi";
import ShowPosts from "../components/ShowPosts";
// import classes from "./User.module.css";

const Loader = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default function () {
  const { userName } = useParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = useContext(AuthApi);
  const posts = data.posts;
  const userExists = filteredPosts.length > 0;

  useEffect(() => {
    setIsLoading(false);
    setFilteredPosts(posts.filter((post) => post.author === userName));
  }, [userName]);

  if (isLoading) return <Loader />;
  if (!userExists) return <h2>Sorry, no posts found for {userName}</h2>;

  return (
    <>
      <h2>{userName}'s personal blog</h2>
      <ShowPosts posts={filteredPosts} />
    </>
  );
}
