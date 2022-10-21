import { useRef, useState } from "react";
import { signup, logout, login, useAuth } from "./firebase";
import "./App.css";

export default function App() {
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
        {/* <div>Actuellement connecté en tant que : {currentUser?.email} </div> */}
        <div className="informations">
          <input ref={emailRef} placeholder="email"></input>
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
          ></input>
        </div>
        <div className="button-container">
          <button hidden={loading || currentUser} onClick={handleSignup}>
            S'inscrire
          </button>

          <button hidden={loading || currentUser} onClick={handleLogin}>
            Se connecter
          </button>

          <button hidden={loading || !currentUser} onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
