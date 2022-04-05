import { useRouter } from 'next/router'
import React from 'react'
import Head from "next/head"
import PagesLayouts from '../../layouts/PagesLayouts'

const ProductDetails = () => {
    const router = useRouter().query.productId

    const product = [
        {

            id: 25,
            title: "Design Sprint Books",
            image: "https://miro.medium.com/max/1400/1*SZNgCxNNqPtRDVZwTAk03A.jpeg",
            description: "If a dog chews shoes whose shoes does he choose?"

        }
    ]
    return (
        <PagesLayouts>
            <Head>
                <title>Product {router}</title>
                <meta name="description" content="boookstore for find favourite book" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="my-10">
                <h1 className="font-bold text-2xl mb-2">Product Details Page {router}</h1>
                <p className="text-sm font-normal text-gray-200">Description detail about your product</p>
            </div>
        </PagesLayouts>
    )
}

export default ProductDetails