import React from 'react'
import { SmallText } from '../atoms/Text'

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
    return (
        <React.Fragment>
            <div className="bg-base-200 p-4 rounded-xl flex">
                <div className={`rounded-lg w-2 md:w-12 md:h-12 ${colors}`}></div>
                <div className="ml-4">
                    <h1 className="font-bold text-white text-sm md:text-lg">{title}</h1>
                    <SmallText addclass={'ml-0 mt-1'}>{description}</SmallText>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SmallCategory