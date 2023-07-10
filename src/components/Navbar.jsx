import React from "react";
import { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthApi from "./AuthApi";
import classes from "./Navbar.module.css";


const Navbar = ({ logOutHandler }) => {
  const data = React.useContext(AuthApi);
  const dropDown = (! data.userName) ? "Log In" : "Log Out";
  const navigate = useNavigate ();
  console.log(data.userName);
  // useEffect(() => {
  //   if (data.userName != "") {
  //     setDropDown("Log Out");
  //   }
  // }, [data.userName]);

  function clickHandler() {
    const input = document.querySelector("input");
    if (input.value != "") {
      const url = `/users/${input.value}`;
      input.value = "";
      navigate(url);
    }
  }

  function handleKeyDown(event)
  {
    if (event.key === 'Enter') {
      clickHandler();
    }
  }

  return (
    <div>
      <nav>
        <div className={classes.container}>
          <img
            className={classes.img}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg"
            alt="logo"
          />
          <Link className={classes.elements} to="/"> Socialify </Link>
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
    </div>
  );
};

export default Navbar;
