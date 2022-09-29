import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:px-20 md:py-8 dark:bg-gray-100 mt-auto">
            <div className="sm:flex sm:items-center sm:justify-between px-9">
                <a href="" className="flex items-center mb-4 sm:mb-0">
                    {/* <Image src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-orange-600">POSTS</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="/posts" className="mr-4 hover:underline md:mr-6   hover:text-orange-600   hover:border-red-500  hover:border-b-2 ">Post</Link>
                        {/* className="dark:text-gray-600 font-semibold
                        hover:text-orange-600  hover:font-bold
                        hover:border-b-2
                        hover:border-red-500
                        active:text-orange-600 */}
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 
                        hover:text-orange-600   hover:border-red-500  hover:border-b-2">Users</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-orange-600   hover:border-red-500  hover:border-b-2">Privacy Policy</a>
                    </li>


                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/posts" className='text-orange-600'>POSTS™</Link>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer
