import React, { useState } from "react";
import Link from "next/link";
;

const Navbar = () => {
    const [navbar, setNavBar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-gray-100 shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/posts">
                                <h2 className="text-2xl text-black-300 font-bold text-orange-600">
                                    POSTS
                                </h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavBar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
                                <li
                                    className="text-gray-600 
                                hover:text-orange-600  hover:font-bold
                                hover:border-b-2
                                hover:border-red-500
                                active:text-orange-600 "
                                >
                                    <Link href="/posts">
                                        <a>Posts</a>
                                    </Link>
                                </li>
                                <li
                                    className=" text-gray-600 
                                    hover:text-orange-600 hover:font-bold
                                    hover:border-b-2
                                    hover:border-red-500
                                    active:text-orange-600"
                                >
                                    <Link href="/users">
                                        <a>Users</a>
                                    </Link>
                                </li>
                                <li
                                    className=" text-gray-600 
                                    hover:text-orange-600 hover:font-bold
                                    hover:border-b-2
                                    hover:border-red-500
                                    active:text-orange-600"
                                >
                                    <Link href="/createpost">
                                        <a>Create Post</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
