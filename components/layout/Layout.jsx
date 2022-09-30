import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Navbar />
            <div>

                {children}
            </div>

            <div className='absolute inset-x-0 h-16 mt-auto'>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
