import { action, makeObservable, observable } from "mobx";
import { UserData } from "./interfaces";

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
}

const userStore = new UserStore();
export default userStore;
