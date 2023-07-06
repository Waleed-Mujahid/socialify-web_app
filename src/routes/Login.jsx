import React from "react";
import { redirect, Form } from "react-router-dom";
import AuthApi from "../components/AuthApi";
import classes from "./Login.module.css";

function Login({ setUser }) {
  const data = React.useContext(AuthApi) 

  async function submitHandler(event) {
    const response = await fetch("/src/users.json");
    const users = await response.json();
    const existingUsers = users.users;

    const user = existingUsers.find(
      (user) => user.userName === event.target.username.value
    );
    if (user === undefined) {
      window.alert("User not found");
    } else {
      if (user.password === event.target.password.value) {
        data.setUserName(event.target.username.value);
      } else {
        window.alert("Incorrect Password");
      }
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.logo}>Socialify</div>
      <Form method="post" onSubmit={submitHandler} to = '/login'>
        <label htmlFor="username">Username</label>
        <input required type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input required type="password" name="password" id="password" />
        <button type="submit" className={classes.link}>
          Login
        </button>
      </Form>
    </div>
  );
}

export default Login;

export async function action({ request }) {
  return redirect("/");
}