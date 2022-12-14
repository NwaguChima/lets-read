import React, { useState } from "react";
import { data } from "../../data";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import Moment from "react-moment";
import { useDeletePostMutation } from "../../features/posts/postsSlice";

const Cards = ({ post }) => {
  const [deletePost] = useDeletePostMutation(post.id);

  const handleDelete = async () => {
    try {
      await deletePost({ id: post.id }).unwrap();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="p-6 max-w-md bg-white rounded-lg border shadow-md border-gray-300 max-h-80">
      <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-gray-700 truncate uppercase">
        {post.title}
      </h5>

      <p className="mb-3 text-base lg:text-lg font-normal text-gray-600 line-clamp-3">
        {post.body}
      </p>

      <div className="flex items-center justify-between">
        <Moment fromNow className="flex text-xs	 text-gray-600 italic">
          {post.date}
        </Moment>

        <div>
          <p className="text-gray-500 text-xs">
            Comments: {post.comments.length}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <Link href={`/posts/${post.id}`}>
          <p className="inline-flex   items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 bg-orange-600  ">
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        </Link>
        <i className="text-red-500">
          <MdDeleteOutline onClick={handleDelete} />
        </i>
      </div>
    </div>
  );
};

export default Cards;
