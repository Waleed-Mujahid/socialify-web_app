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
      
      {/*main content goes here*/}
      <div className={classes.container}>
        <Outlet />    
      </div>
      
    </div>
  );
}

export default Home;
