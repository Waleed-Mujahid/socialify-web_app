import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthApi from "./AuthApi";
import classes from "./Navbar.module.css";

const Navbar = ({ logOutHandler }) => {
  const data = useContext(AuthApi);
  const dropDown = !data.userName ? "Login" : "Log Out";
  const navigate = useNavigate();


  function clickHandler() {
    const input = document.querySelector("input");
    if (input.value != "") {
      const url = `/users/${input.value}`;
      input.value = "";
      navigate(url);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      clickHandler();
    }
  }

  return (
      <nav>
        <div className={classes.container}>
          <img
            className={classes.img}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg"
            alt="logo"
          />
          <Link className={classes.elements} to="/">
            {" "}
            Socialify{" "}
          </Link>
          <div className={classes.searchBar}>
            <div>
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onKeyDown={handleKeyDown}
              />
              <div>
                <button onClick={clickHandler}>GO</button>
              </div>
            </div>
          </div>
          <Link
            className={classes.elements}
            onClick={logOutHandler}
            to={"/login"}
          >
            {dropDown}
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
