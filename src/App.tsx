import React from "react";
import UserSearchInput from "./components/Inputs/UserSearchInput";
import "./App.css";
import UserList from "./components/Users/UserList";

function App() {
  return (
    <div className="form">
      <UserSearchInput />
      <UserList />
    </div>
  );
}

export default App;
