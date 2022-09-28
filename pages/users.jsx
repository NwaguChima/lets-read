import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";

const Users = () => {
  const users = useSelector(selectAllUsers);
  console.log("users", users);

  return <div>users</div>;
};

export default Users;
