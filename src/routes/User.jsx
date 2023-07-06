import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import AuthApi from "../components/AuthApi";
import ShowPosts from "../components/ShowPosts";
import classes from "./User.module.css";

export default function () {
  const { userName } = useParams();
  const [flag, setFlag] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const data = useContext(AuthApi);
  const posts = data.posts;


  useEffect(() => {
    const user = posts.find((post) => post.author === userName);
    setIsLoading(false);

    if (user != undefined) {
      setFlag(true);
      setFilteredPosts(posts.filter((post) => post.author === userName));
    }
  }, []);

  return (
    <div className={classes.container}>
      {flag && !isLoading && 
      (<div>
        <h2>{userName}'s personal blog</h2>
        <ShowPosts posts={filteredPosts} />
      </div>
      )
    }

      {!flag && !isLoading &&
      <div>
        <h2>Sorry, no posts found for { userName }</h2>
      </div>
    }

    </div>
  );
}
