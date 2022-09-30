import React from "react";
import AddComments from "../comments/AddComments";
import Comments from "../comments/Comments";
import Image from "next/image";

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto md:px-2 py-16 w-1/2">
      <h1 className="text-3xl mb-4 text-gray-700 font-bold">{post.title}</h1>
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/"
          width={35}
          height={35}
          alt=""
          className="bg-gray-400 rounded-full  w-full"
        />

        <h1 className="font-bold text-xl">{post.userId}</h1>
      </div>
      <p className="text-xl text-gray-600">{post.body}</p>
      <h1 className="text-xl mt-6">Comments: </h1>
      {/* <p className='mt-6'>9/28/2022</p> */}
      <div className="mt-6">
        {["hello world"].map((comment, index) => (
          <Comments comment={comment} key={index} />
        ))}
      </div>
      <AddComments />
    </div>
  );
};

export default PostDetails;
321;
