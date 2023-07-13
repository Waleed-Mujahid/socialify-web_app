import { useLoaderData } from "react-router-dom";
import classes from "./SinglePost.module.css";

export default function SinglePost() {
  const post = useLoaderData();

  return (
    <div className={classes.container}>
        <ul key={post.id} className={classes.postBox}>
          <li className={classes.postAuthor} >{post.title}</li>
          <li className={classes.postText}>{post.body}</li>
        </ul>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(errFor);
  }
  return null;
}
