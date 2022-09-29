import React from "react";
import { data } from "../../data";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs"

const Cards = ({ post }) => {
    let date = post.date

    let newDate = new Date(date)
    let formatDate = newDate.toLocaleDateString()
    console.log("dd", formatDate)
    return (
        <>
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>

                <div className="flex items-center justify-between">

                    <p className="flex text-xs	 dark:text-gray-400 italic">{formatDate}</p>
                 
                    <div >
                        <p className="dark:text-white">Comments: {post.comments.length}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">

              
                <Link href={`/posts/${post.id}`} >
                    <p className="inline-flex  mt-3  items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </p>
                </Link>
                    <i className="dark:text-white mt-8"><BsThreeDots /></i>
                </div>
            </div>
        </>
    );
};

export default Cards;