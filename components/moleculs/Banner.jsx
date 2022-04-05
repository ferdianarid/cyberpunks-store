import React from 'react'
import Image from "next/image"

const Banner = ({ itemNumber, images }) => {
    return (
        <React.Fragment>
            <div id={`item${itemNumber}`} className="carousel-item w-full max-h-[400px]">
                <Image src={images} className="w-full rounded-xl object-cover object-top" />
            </div>
        </React.Fragment>
    )
}

export default Banner