import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Signup.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(email);
  // console.log(password);

  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  console.log(user);

  const navigate = useNavigate();
  const navstateData = useLocation()
  console.log(navstateData);
const authHandler = async (e) => {
  e.preventDefault();
  console.log(e.target.name);
  if (e.target.name === "signIn") {
    setLoading({ ...loading, signIn: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false });
        navigate(navstateData?.state?.redirect || "/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      });
  } else {
    setLoading({ ...loading, signUp: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUp: false });
        navigate(navstateData?.state?.redirect || "/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading({ ...loading, signUp: false });
      });
  }
};

  // const authHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name);
  //   if (e.target.name === "signIn") {
  //     setLoading({ ...loading, signIn: true });
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userInfo) => {
  //         // console.log(userInfo);

  //         dispatch({
  //           type: Type.SET_USER,
  //           user: userInfo.user,
  //         });
  //         setLoading({ ...loading, signIn: false });
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading({ ...loading, signIn: false });
  //         //console.log(err.message);
  //       });
  //   } else {
  //     setLoading({ ...loading, signUp: true });
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((userInfo) => {
  //         // console.log(userInfo);

  //         dispatch({
  //           type: Type.SET_USER,
  //           user: userInfo.user,
  //         });
  //         setLoading({ ...loading, signUp: false });
  //         navigate(navstateData?.state?.redirect || "/");
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         //console.log(err.message);
  //         setLoading({ ...loading, signUp: false });
  //       });
  //   }
  // };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://assets.aboutamazon.com/dims4/default/c7f0d8d/2147483647/strip/true/crop/6110x2047+0+0/resize/645x216!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F2e%2Fd7%2Fac71f1f344c39f8949f48fc89e71%2Famazon-logo-squid-ink-smile-orange.png"
          alt="amazon logo"
        />
      </Link>

      {/* login/signup form */}
      <div className={classes.login__container}>
        <h1> Sign-In</h1>
        {navstateData.state?.msg && (
            <small style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold"
            }}>
              {navstateData.state?.msg}

            </small>
          )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          {/* signin button */}

          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.login__signInButton}>
            {loading.signIn ? <ClipLoader color="teal" size={15} /> : "SignIn"}
          </button>
          {/* agreement */}
        </form>
        <p>
          By signing-in you agree to the Mintesnot_Tesfaye's AMAZON FAKE CLONE
          Conditions of Use &sale. please see our Privacy notice, our cookies
          Notice and our Interst-Based Ads Notice.
        </p>
        {/* SignUp or Create account button */}

        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={classes.login__registerButton}>
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
