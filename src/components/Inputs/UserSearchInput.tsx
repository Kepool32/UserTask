import React from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import useInput from "hooks/useInput";
import userStore from "store/UserStore";
import "./UserSearchInput.css";
import axios from "axios";

const UserSearchInput: React.FC = () => {
  const { inputValue, handleInputChange } = useInput();

  useEffect(() => {
    userStore.filterUser(inputValue);

    userStore.setLoading(true);

    axios
      .get("http://127.0.0.1:3001/")
      .then((response) => {
        const user = response.data;
        userStore.setUser(user);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      })
      .finally(() => {
        userStore.setLoading(false);
      });
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
