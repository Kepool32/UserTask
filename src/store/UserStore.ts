import { action, makeObservable, observable } from "mobx";
import { UserData } from "./interfaces";
import axios from "axios";

class UserStore {
  user: UserData[] | null = null;
  loading = false;
  filteredUser: UserData[] | null = null; // Add filteredUser

  constructor() {
    makeObservable(this, {
      user: observable,
      loading: observable,
      setUser: action,
      setLoading: action,
      filterUser: action,
    });
  }

  setUser(user: UserData[] | null) {
    this.user = user;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  filterUser(inputValue: string) {
    if (this.user) {
      this.filteredUser = this.user.filter((user) =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }
  }

  async fetchData() {
    this.setLoading(true); // Устанавливаем состояние загрузки в true

    try {
      const response = await axios.get("http://127.0.0.1:3000/");
      const user = response.data;
      this.setUser(user);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      this.setLoading(false);
    }
  }
}

const userStore = new UserStore();
export default userStore;
