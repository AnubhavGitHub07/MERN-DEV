import React, { useState } from "react";
import UserContext from "./userContext";
import Navbar from "./navbar";

const App = () => {
  const [user] = useState("Anubhav");
  const [theme, setTheme] = useState("light");

  return (
    <UserContext.Provider value={{ user, theme, setTheme }}>
      <Navbar />
    </UserContext.Provider>
  );
};

export default App;
