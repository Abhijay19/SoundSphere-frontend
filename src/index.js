import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Auth0Provider } from '@auth0/auth0-react';
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
        domain="dev-bdscs30rqjeiaajl.us.auth0.com"
        clientId="DX0WpStIrNJVaTDbdkAwZQxS7ZlGJvsU"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>,
    );
