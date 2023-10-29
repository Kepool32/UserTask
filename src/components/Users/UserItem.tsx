import React from "react";
import { UserData } from "store/interfaces";
import { useState } from "react";
import { TfiMobile } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import UserModal from "./UserModal";
import "./UserItem.css";

interface UserItemProps {
  user: UserData;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    });
  };

  return (
    <div className="user-card" onClick={openModal}>
      <h4 className="user-name">{user.name}</h4>
      <div className="user-mobile">
        <TfiMobile className="mobile" />
        <span className="mobile-number">{user.phone}</span>
      </div>
      <div className="user-mail">
        <CiMail className="mail" />
        <span className="mail-adress">{user.email}</span>
      </div>

      {isModalOpen && <UserModal user={user} onClose={closeModal} />}
    </div>
  );
};

export default UserItem;
