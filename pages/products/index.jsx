import React from 'react'
import Head from "next/head"
import ItemsProducts from '../../components/ItemsProducts'
import PagesLayouts from '../../layouts/PagesLayouts'
import { connect } from 'react-redux'

const Products = ({ products }) => {
    return (
        <PagesLayouts>
            <Head>
                <title>Bookstore - Find your books</title>
                <meta name="description" content="boookstore for find favourite book" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="my-10">
                <h1 className="font-bold text-2xl mb-2">Product Page</h1>
                <p className="text-sm font-normal text-gray-200">Lets grab your favourite book for weekend</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                {
                    products.map((items) => (
                        <ItemsProducts key={items.id} id={items.id} images={items.image} title={items.title} description={items.description} prices={items.prices} />
                    ))
                }
            </div>
        </PagesLayouts>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Products)