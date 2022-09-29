import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";
import {
  useGetPostsByUserIdQuery,
  selectPostById,
} from "../features/posts/postsSlice";

const Users = () => {
  const users = useSelector(selectAllUsers);

  const {
    isSuccess,
    error,
    isLoading,
    isError,
    data: postsForUser,
  } = useGetPostsByUserIdQuery(1);
  console.log("users=====>", postsForUser);

  return <div>users</div>;
};

export default Users;
