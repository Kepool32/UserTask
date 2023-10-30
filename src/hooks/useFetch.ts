import { useEffect } from "react";

import userStore from "store/UserStore";

const useFetch = () => {
  useEffect(() => {
    userStore.fetchData();
  }, []);
};

export default useFetch;
