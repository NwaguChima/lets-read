import React from "react";
import AddComments from "../comments/AddComments";
import Comments from "../comments/Comments";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/usersSlice";

const PostDetails = ({ post }) => {
  const user = useSelector((state) => selectUserById(state, post.userId));

  return (
    <div className="container mx-auto md:px-2 py-16 w-1/2">
      <h1 className="text-3xl mb-4 text-gray-700 font-bold">{post.title}</h1>
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/img/avater.jpeg"
          width={35}
          height={35}
          alt=""
          className="bg-gray-400 rounded-full  w-full"
        />

        <h1 className="font-bold text-xl">{user.name}</h1>
      </div>
      <p className="text-xl text-gray-600">{post.body}</p>
      <h1 className="text-xl mt-6">Comments: </h1>
      <div className="mt-6">
        {["hello world"].map((comment, index) => (
          <Comments comment={comment} key={index} />
        ))}
      </div>
      <AddComments postId={post.id} />
    </div>
  );
};

export default PostDetails;
321;
