import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import NumberFormatInt from '../helpers/CurrencyFormat'

const Navbar = ({ listItemInCart }) => {
    const [count, setCount] = useState(20)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let itemCount = 0
        let currentPrice = 0
        listItemInCart.forEach(item => {
            itemCount += item.quantity
            currentPrice += (item.quantity * item.prices) * 15500
        })
        setCount(itemCount)
        setTotalPrice(currentPrice)
    }, [listItemInCart, count, totalPrice, setTotalPrice])

    return (
        <React.Fragment>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href="/">
                        <p className="normal-case text-md text-white font-bold">CyberPunk</p>
                    </Link>
                </div>
                <input type="text" placeholder="Type here" className="mx-7 input input-bordered input-sm w-full max-w-xs" />
                <div className="mr-4 flex space-x-5">
                    <Link href="/products">
                        <a className="text-xs hover:text-white font-bold">Products</a>
                    </Link>
                    <Link href="/categories">
                        <a className="text-xs hover:text-white font-bold">Categories</a>
                    </Link>
                    <Link href="/articles">
                        <a className="text-xs hover:text-white font-bold">Articles</a>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{count}</span>
                            </div>
                        </label>
                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-200 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{count} Items</span>
                                <span className="text-info font-semibold">Total Price : {NumberFormatInt(totalPrice)}</span>
                                <div className="card-actions">
                                    <Link href="/cart">
                                        <a className="btn mt-3 btn-primary btn-md btn-block">
                                            View cart
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        listItemInCart: state.products.carts
    }
}

export default connect(mapStateToProps)(Navbar)