import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../App";
import firebaseConfig from "../firebase.config";
import google from "../Images/google.png";
import "./Login.css";
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const LogIn = () => {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email }
        setLoggedInUser(signedInUser)
        history.replace(from)
        console.log(result);
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  // ==================== Sign In With Email & Password ===================== //
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 7
      const hasNumber = /\d{1}/.test(e.target.value)
      isFieldValid = isPasswordValid && hasNumber
    }
    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.success = true
          newUserInfo.error = ""
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          history.replace(from)
          console.log("signed in user", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.success = true
          newUserInfo.error = ""
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          history.replace(from)
        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message;
          newUserInfo.success = false
          setUser(newUserInfo)
        });
    }
    e.preventDefault()
  }
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button onClick={googleSignIn}><Image  width="20px" src={google}></Image>Continue with Google</button><br />
      <input onChange={() => setNewUser(!newUser)} type="checkbox" name="newUser" />
      <label htmlFor="newUser">New User Sing Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input onBlur={handleBlur} type="text" name="name" placeholder="Name" />}<br />
        <input onBlur={handleBlur} type="email" name="email" placeholder="Email" required /><br />
        <input onBlur={handleBlur} type="password" name="password" placeholder="Password" required /><br />
        <input  type="submit" value={newUser ? "Create an account" : "Log In"} />
      </form>
      {user.success
        ? <h4 style={{ color: "green" }}>User {newUser ? "Created" : "Logged In"} Successfully</h4>
        : <h4 style={{ color: "red" }}>{user.error}</h4>
      }
    </div>
  );
};


export default LogIn;