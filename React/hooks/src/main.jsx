import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContext from "./userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserContext.Provider value={{ username: "Anubhav" }}>
    <App />
  </UserContext.Provider>
);
