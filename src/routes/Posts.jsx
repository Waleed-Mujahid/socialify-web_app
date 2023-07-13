import { useLoaderData } from "react-router-dom";
import ShowPosts from "../components/ShowPosts";
import { Loader } from "./User";

export default function Posts() {
  // Get the data from the loader
  const data = useLoaderData();

  // If the data is not available, show a loader
  if (!data) return <Loader />;

  // If the data is available, show the posts
  return (
    <div>
      {" "}
      <ShowPosts posts={data} />{" "}
    </div>
  );
}

export async function loader() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
}
