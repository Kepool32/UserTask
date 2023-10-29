import { useRef } from "react";
import { UserData } from "store/interfaces";
import { IoClose } from "react-icons/io5";
import useOutsideClick from "hooks/useOutsideClick";
import React from "react";
import Loader from "../Loader/Loader";
import "./UserModal.css";

interface UserModalProps {
  user: UserData;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(modalRef, onClose);

  return (
    <div className="user-modal-overlay">
      <div ref={modalRef} className="modal-content">
        {user ? (
          <div className="modal-info">
            <div className="modal-name">
              <span className="name">{user.name}</span>
              <IoClose className="modal-exit" onClick={onClose} />
            </div>
            <div>
              <div className="info">
                <div className="info-labels">
                  <p>Телефон:</p>
                  <p>Почта:</p>
                  <p>Дата приема:</p>
                  <p>Должность:</p>
                  <p>Подразделение:</p>
                </div>
                <div className="info-data">
                  <p>{user.phone}</p>
                  <p>{user.email}</p>
                  <p>{user.hire_date}</p>
                  <p>{user.position_name}</p>
                  <p>{user.department}</p>
                </div>
              </div>
              <div className="additional-info">
                <p className="additional-label">Дополнительная информация</p>
                <p className="additional-data">{user.address}</p>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default UserModal;
