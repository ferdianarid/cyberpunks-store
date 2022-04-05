import React, { useState, useEffect } from 'react'
import Head from "next/head"
import { singleBook } from '../apis/books'
import Cards from '../components/ItemsProducts'
import PagesLayouts from '../layouts/PagesLayouts'
import { connect } from 'react-redux'
import ItemsInCart from '../components/ItemsInCart'
import NumberFormatInt from '../helpers/CurrencyFormat'

const Cart = ({ CartItems }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [totalInUSD, setTotalInUSD] = useState(0)

    useEffect(() => {
        let currentPrice = 0
        let currentItems = 0
        let currentUSD = 0

        CartItems.forEach((item) => {
            currentPrice += (item.quantity * item.prices) * 15500
            currentItems += item.quantity
            currentUSD += (item.prices * item.quantity)
        })

        setTotalInUSD(currentUSD)
        setTotalItems(currentItems)
        setTotalPrice(currentPrice)

    }, [CartItems, totalItems, totalPrice, setTotalItems, setTotalPrice, totalInUSD, setTotalInUSD])

    return (
        <React.Fragment>
            <PagesLayouts>
                <Head>
                    <title>Bookstore - Find your books</title>
                    <meta name="description" content="boookstore for find favourite book" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-0">
                    <div className="my-10">
                        <h1 className="font-bold text-2xl mb-2">Cart page</h1>
                        <p className="text-sm font-normal text-gray-200">List of books you have added to cart</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-bold text-md">Total Quantity : <span className="text-yellow-500"> {totalItems} items </span></h1>
                        <h1 className="font-bold text-md">Total Price in USD : <span className="text-yellow-500"> $ {totalInUSD} </span></h1>
                        <h1 className="font-bold text-md">Total Price in IDR : <span className="text-yellow-500"> IDR {NumberFormatInt(totalPrice)} </span></h1>
                    </div>
                    <button className="btn btn-primary btn-sm text-xs mt-3">Checkout</button>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-10">
                    {CartItems.map((item) => (
                        <ItemsInCart key={item.id} id={item.id} title={item.title} images={item.image} description={item.description} prices={item.prices} quantity={item.quantity} />
                    ))}
                </div>
            </PagesLayouts>
        </React.Fragment >
    )
}

const mapStateToProps = state => {
    return {
        CartItems: state.products.carts
    }
}

export default connect(mapStateToProps)(Cart)