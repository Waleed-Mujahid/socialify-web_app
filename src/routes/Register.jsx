import classes from "./Login.module.css";
import { Form, redirect } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [data, setData] = useState([]);

  return (
    <div className={classes.container}>
      <div className={classes.logo}>Socialify</div>
      <Form method="post">
        <label htmlFor="username">Username</label>
        <input required type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input required type="password" name="password" id="password" />
        <button type="submit">Register</button>
      </Form>
    </div>
  );
}

export default Register;

export async function action({ request }) {
  const formData = await request.formData();
  const fields = {};

  for (const [name, value] of formData.entries()) {
    fields[name] = value;
  }

  const newUser = fields;

  try {
    // Fetch the existing users from the server
    const response = await fetch("/src/users.json");

    // console.log(response.json());
    const users = await response.json();

    // Update the users array with the new user
    const existingUsers = users.users;
    console.log(existingUsers);
    const updatedUsers = [...existingUsers, newUser];
    console.log(updatedUsers);
    // Write the updated users array back to the server
    await fetch("/src/users.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUsers),
    });

    console.log("User saved successfully.");
    2;
  } catch (error) {
    console.error("Error updating users:", error);
  }

  return redirect("/");
}
