import React from "react";
import { observer } from "mobx-react-lite";
import userStore from "store/UserStore";
import UserItem from "./UserItem";
import useFetch from "hooks/useFetch";
import Loader from "../Loader/Loader";
import "./UserList.css";

const UserList: React.FC = observer(() => {
  useFetch();

  return (
    <div className="container">
      {userStore.loading ? (
        <Loader />
      ) : (
        (userStore.filteredUser || userStore.user)?.map((user) => (
          <UserItem key={user.email} user={user} />
        ))
      )}
    </div>
  );
});

export default UserList;
