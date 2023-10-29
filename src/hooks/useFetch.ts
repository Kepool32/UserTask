import { useEffect } from "react";
import axios from "axios";
import userStore from "store/UserStore";

const useFetch = () => {
  useEffect(() => {
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
  }, []);
};

export default useFetch;
