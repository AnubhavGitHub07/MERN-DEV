import React, { useContext } from "react";
import UserContext from "./userContext";

const Navbar = () => {
  const { user, theme, setTheme } = useContext(UserContext);

  return (
    <div>
      <h2>User: {user}</h2>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
