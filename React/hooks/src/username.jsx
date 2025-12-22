import React, { useContext } from "react";
import UserContext from "./userContext";

const UserName = () => {
  const { user, theme, setTheme } = useContext(UserContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh"
      }}
    >
      <h2>User: {user}</h2>
      <p>Current Theme: {theme}</p>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default UserName;
