import React from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import useInput from "hooks/useInput";
import userStore from "store/UserStore";
import "./UserSearchInput.css";

const UserSearchInput: React.FC = () => {
  const { inputValue, handleInputChange } = useInput();

  useEffect(() => {
    userStore.filterUser(inputValue);

    userStore.fetchData();
  }, [inputValue]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={inputValue || ""}
        onChange={handleInputChange}
      />
      <div className="search-icon">
        <CiSearch className="search" />
      </div>
    </div>
  );
};

export default UserSearchInput;
