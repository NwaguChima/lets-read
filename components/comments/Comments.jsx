import Image from "next/image";
import React from "react";

const Comments = ({ comment }) => {
  return (
    <div className="sm:mt-1 p-5  bg-white rounded-lg border border-gray-200 shadow-md sm:w-full ">
      <div className="">
        <p className="mb-2">- {comment}</p>
      </div>
    </div>
  );
};

export default Comments;
