import React from 'react'

const Cards = ({ images, title, description }) => {
    return (
        <div className="card w-full bg-base-200 shadow-xl">
            <figure><img src={images} className='h-[165px] object-cover w-full' alt="Shoes" /></figure>
            <div className="card-body p-4">
                <h2 className="font-bold text-md">{title}</h2>
                <p className='font-normal text-sm my-2'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm text-xs">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cards