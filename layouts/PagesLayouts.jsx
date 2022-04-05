import React from 'react'
import Navbar from '../components/Navbar'

const PagesLayouts = ({ children }) => {
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-2 md:px-24">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

export default PagesLayouts