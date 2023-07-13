import classes from "./Error.module.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className={classes.container}>
      <h2>Error 404: Page not found</h2>
      <Link to = "/" >Click here to go back</Link>
    </div>
  );
}
