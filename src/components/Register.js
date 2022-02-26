import React from "react";
import "./register.css";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          city: city,
          age: age,
          password: password,
        }),
      });
    //   let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setCity("");
        setAge("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div class="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1>Create New Account</h1>
          <br />
          <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
          <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)}/>
          <input type="number" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          {/* <a href="#">Forgot your password?</a> */}
          <br />
          <button>Submit</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </>
  );
};
