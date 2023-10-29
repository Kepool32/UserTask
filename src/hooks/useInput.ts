import { useState, ChangeEvent } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    handleInputChange,
  };
};

export default useInput;
