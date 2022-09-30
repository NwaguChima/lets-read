import React, { useState } from "react";
import { data } from "../../data";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs"
import { MdDeleteOutline } from "react-icons/md"

const Cards = ({ post }) => {
    let date = post.date

    let newDate = new Date(date)
    let formatDate = newDate.toLocaleDateString()
    console.log("dd", formatDate)
    const handleModal = () => {

    }
    return (
        <>
      
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-100 shadow-md dark:bg-gray-50 dark:border-gray-300 ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">{post.title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{post.body}</p>

                <div className="flex items-center justify-between">

                    <p className="flex text-xs	 dark:text-gray-600 italic">{formatDate}</p>

                    <div >
                        <p className="dark:text-gray-500">Comments: {post.comments.length}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">


                    <Link href={`/posts/${post.id}`} >
                        <p className="inline-flex  mt-3  items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">

                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </p>
                    </Link>
                    <i className="dark:text-red-500 mt-8"><MdDeleteOutline onClick={handleModal} /></i>
                </div>
            </div>
        </>
    );
};

export default Cards;
