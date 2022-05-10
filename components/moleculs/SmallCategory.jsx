import React from 'react'
import Link from 'next/link'
import { SmallText } from '../atoms/Text'
import { FaTv, FaBeer, FaBook, FaDatabase } from "react-icons/fa"

const SmallCategory = ({ id, title, description }) => {
    let colors = ""
    if (id === 1) {
        colors = "bg-yellow-400"
    } else if (id === 2) {
        colors = "bg-blue-600"
    } else if (id === 3) {
        colors = "bg-red-600"
    } else if (id === 4) {
        colors = "bg-white"
    } else {
        colors = "bg-base-100"
    }

    const categoryParams = title.toLowerCase()

    return (
        <React.Fragment>
            <Link href={`/categories/${categoryParams}`} passHref>
                <div className="bg-base-200 p-4 rounded-xl hover:cursor-pointer flex">
                    <div className={`rounded-lg w-2 md:w-12 md:h-12 ${colors} flex items-center justify-center`}>
                        {title == 'Computer' ? <FaTv className='text-gray-900 hidden md:block' size={32} />
                            : title == 'Bread' ? <FaDatabase className='text-white hidden md:block' size={32} />
                                : title == 'Books' ? <FaBook className='text-white hidden md:block' size={32} />
                                    : title == 'Beverages' ? <FaBeer className='text-gray-900 hidden md:block' size={32} /> : ''}
                    </div>
                    <div className="ml-4">
                        <h1 className="font-bold text-white text-sm md:text-lg">{title}</h1>
                        <SmallText addclass={'ml-0 mt-1'}>{description}</SmallText>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default SmallCategory