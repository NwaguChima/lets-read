import React from "react";
import { useSelector } from "react-redux";
import { selectPostsByUser } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

const Users = () => {
  const users = useSelector(selectAllUsers);

  const postsForUser = useSelector((state) => selectPostsByUser(state, 1));
  console.log("postsForUser", postsForUser);
  console.log("users", users);

  return <div>users</div>;
};

export default Users;
