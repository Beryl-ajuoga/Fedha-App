import React from "react";
// import "../signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 const Signup = () => {
  
 const [email, setEmail] = useState("");
const [Phonenumber, setPhonenumber] = useState("");
 const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  const submitting = (event) => {
    event.preventDefault();
    const user = { Phonenumber, password, email };
    axios.post('https://polls.apiblueprint.org/users',user)
    .then(res=>console.log(res))
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: JSON.stringify(user),
    //   redirect: "login",
    // };
  };

  return (
    <div className="signUp">
      <div className="contain"></div>
      <div className="main">
        <div className="main-cont">
          <div className="form">
            <h2 className="signup">Sign Up</h2>
            <form onSubmit={submitting}>
              <label>
                <div>
                 <div className="names">
                  <div id="name1" className="name-1">
                    <input
                     style={{width: '85%', marginRight:'75px'}}
                      id="first-name"
                      className="container"
                      type="text"
                      placeholder="First Name"
                      // value={firstname}
                      // onChange={(e) => {
                      //   setFirstName(e.target.value);
                      // }}
                    ></input>
                  </div>
                  <div id="name2" className="name-2">
                    <input
                  style={{width: '123%', marginRight: '20%'}}
                      id="second-name"
                      className="container"
                      type="text"
                      placeholder="Last Name"
                      // value={lastname}
                      // onChange={(e) => {
                      //   setLastName(e.target.value);
                      // }}
                    ></input>
                    
                  </div>
                 </div>
                </div>
                <div className="">
                  <br />
                  <select
                    className="gender"
                    name="sex"
                    id="genders"
                    // onChange={handleGenderChange}
                  >
                    {/* <option value="Select gender">Select Gender</option>
                    {gender.map((gender) => (
                      <option value={sex.valueOf}>{sex.label}</option>
                    ))} */}
                  </select>
                </div>
                <div className="email">
                  <input
                    className="container"
                    type="text"
                    placeholder="Enter email"
                    // value={email}
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}
                  ></input>
                </div>
                <div className="password">
                  <input
                    className="container"
                    type="password"
                    placeholder="Password"
                    // value={password}
                    // onChange={(e) => {
                    //   setPassword(e.target.value);
                    // }}
                  ></input>
                  <br></br>
                </div>
                <div className="confirm_password">
                  <h5> </h5>
                  <input
                    className="container"
                    type="password"
                    placeholder="Confirm Password"
                    // value={confirmPassword}
                    // onChange={(e) => {
                    //   setConfirmPassword(e.target.value);
                    // }}
                  ></input>
                  <br></br>
                </div>
              </label>
              <Link path to="/login">
              <button className="button" type="submit">
                  SignUp
                </button>
              </Link>
            </form>
            <Link path to="/login">
            <p className="account">
              Have an account?
              <a href="/login">
                <span> Login </span>{" "}
              </a>{" "}
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;