import React from "react";
import Navbar from "../components/Navbar";
import classes from "./Home.module.css";
import AuthApi from "../components/AuthApi";
import { Outlet } from "react-router-dom";

function Home() {
  const data = React.useContext(AuthApi) 

  function clickHandler() {
    data.setUserName("");
  }

  return (
    <div className={classes.home}>
      <Navbar logOutHandler = {clickHandler}/>
      <div className={classes.container}>
        <div className={`${classes.item} ${data.newPostFlag ? classes.blur : ""}`} > </div>
        <div className={`${classes.item}`} > 
          <Outlet />
        </div>
        <div className={`${classes.item} ${data.newPostFlag ? classes.blur : ""}`} > </div>
      </div>
    </div>
  );
}

export default Home;
