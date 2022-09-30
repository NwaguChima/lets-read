import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:px-20 md:py-8 bg-black mt-auto">
            <div className="sm:flex sm:items-center sm:justify-between px-9">
                <Link href="/posts" >
                    <div className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">POSTS</span>
                    </div>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <Link href="/posts">
                        <p className="mr-4 hover:underline md:mr-6 
                        hover:text-orange-600   hover:border-red-500  hover:border-b-2">Post</p>

                    </Link>
                    <Link href="/users">
                        <p className="mr-4 hover:underline md:mr-6 
                        hover:text-orange-600   hover:border-red-500  hover:border-b-2">Users</p>
                    </Link>
                    <Link href="">
                        <p className="mr-4 hover:underline md:mr-6 hover:text-orange-600   hover:border-red-500  hover:border-b-2">Create Post</p>
                    </Link>


                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <Link href="/posts">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span className='text-orange-600'>POSTS™</span>. All Rights Reserved.
                </span>
            </Link>
        </footer>
    )
}

export default Footer
