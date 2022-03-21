import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
// import Modal from "react-modal";
import "./fontAwesome";

const rootElement = document.getElementById("root");

// Modal.setAppElement(rootElement);

ReactDOM.render(
  <BrowserRouter>
    {/* <Auth0ProviderWithHistory> */}
    <App />,{/* </Auth0ProviderWithHistory> */}
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
