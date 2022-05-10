import React from 'react'
import Image from "next/image"
import { connect } from 'react-redux'
import { AddToCart, AddWishlist } from '../redux/actions/products'
import { FaHeart } from "react-icons/fa"

const ItemsProducts = ({ id, images, title, description, prices, addtocart, addwishlist }) => {
    return (
        <div className="card w-full bg-base-200 shadow-xl p-4">
            <figure><Image src={images} height={270} width={300} alt="product" className='h-[165px] object-cover rounded-xl w-full' /></figure>
            <div className="mt-5">
                <h2 className="font-bold text-md">{title}</h2>
                <p className='font-normal text-sm my-2'>{description}</p>
            </div>
            <div className="card-actions flex items-center mt-4">
                <h1 className="font-bold text-yellow-500 md:mr-6 mr-10 text-md">$ {prices}</h1>
                <button onClick={() => addwishlist(id)} className="btn hidden md:block btn-primary btn-sm text-xs"><FaHeart className='text-white' size={16} /></button>
                <button onClick={() => addtocart(id)} className="btn btn-primary btn-sm text-xs">Buy Now</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addtocart: (id) => dispatch(AddToCart(id)),
        addwishlist: (id) => dispatch(AddWishlist(id))
    }
}

export default connect(null, mapDispatchToProps)(ItemsProducts)