export interface UserItemProps {
  name: string;
  phone: string;
  email: string;
}

export interface UserData extends UserItemProps {
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}
