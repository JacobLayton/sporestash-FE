import React from "react";
// import LoginButton from '../components/Login-Button';
// import '../styles/login.css';
// import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  // const { logout, loginWithRedirect } = useAuth0();
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Welcom back dingus!</h1>
        <button
          id="login-button"
          onClick={() =>
            // loginWithRedirect({
            //   redirectUri: `${window.location.origin}/admin`,
            // })
            alert("login")
          }
        >
          Log In
        </button>
        {/* <span
          className='mini-log-out'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </span> */}
      </div>
    </div>
  );
}

export default Login;
