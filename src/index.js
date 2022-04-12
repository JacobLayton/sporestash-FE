import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
// import Modal from "react-modal";
import "./fontAwesome";

const rootElement = document.getElementById("root");

// Modal.setAppElement(rootElement);

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* <Auth0ProviderWithHistory> */}
      <CssBaseline />
      <App />
      {/* </Auth0ProviderWithHistory> */}
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
