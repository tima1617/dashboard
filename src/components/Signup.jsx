import "./Signup.css";
import { useRef, useState } from "react";
import { signup, logout, login, useAuth } from "../firebase";
import { Link } from "react-router-dom";

function Signup() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Signup error.");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Login error.");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Logout error.");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div className="container">
        <h1 hidden={currentUser}>S'inscrire</h1>
        {/* <div>Actuellement connecté en tant que : {currentUser?.email} </div> */}
        <div className="informations">
          <input
            hidden={currentUser}
            ref={emailRef}
            placeholder="email"
          ></input>
          <input
            hidden={currentUser}
            ref={passwordRef}
            type="password"
            placeholder="password"
          ></input>
          <Link classname="button" to="/home" hidden={!currentUser}>
            Accueil
          </Link>
        </div>
        <div className="button-container">
          <a href="/signup">
            {/* <button hidden={loading || currentUser} onClick={handleSignup}> */}
            <button hidden={loading || currentUser}>S'inscrire</button>
          </a>
          <a href="/">
            <button hidden={loading || currentUser}>Se connecter</button>
          </a>

          <button hidden={loading || !currentUser} onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
