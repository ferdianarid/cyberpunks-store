import Head from 'next/head'
import Image from "next/image"
import Banner from "../components/moleculs/Banner"
import { computer } from "../apis/products"
import PagesLayouts from '../layouts/PagesLayouts'
import { SmallText } from "../components/atoms/Text"
import { Indicators } from '../components/atoms/Indicators'
import { bannerImages } from '../apis/banner'
import { books } from '../apis/books'
import CardProducts from '../components/organism/CardProducts'
import sidebanner from "../assets/sidebanner.webp"
import { category } from "../apis/category"
import SmallCategory from "../components/moleculs/SmallCategory"

export default function Homepage() {
  return (
    <PagesLayouts>
      <div className="">
        <Head>
          <title>Bookstore - Find your books</title>
          <meta name="description" content="boookstore for find favourite book" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Product List and Location */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full max-w-[500px] my-3 md:my-6 rmScroll flex items-center space-x-4 overflow-x-scroll">
            {
              computer.map((items) => (
                <SmallText key={items.id} addclass={'hover:cursor-pointer hover:text-white'}>{items.title}</SmallText>
              ))
            }
          </div>
          <SmallText>Location : <span className="font-bold"> Jombang, East Java </span></SmallText>
        </div>

        {/* Banner and Indicators */}
        <div className="mt-6 md:mt-0">
          <div className="carousel w-full">
            {
              bannerImages.map((banner) => (
                <Banner key={banner.id} itemNumber={banner.id} images={banner.name} />
              ))
            }
          </div>
          <div className="flex justify-center w-full py-2 gap-2 mt-4">
            {
              bannerImages.map((item) => (
                <Indicators key={item.id} indNumber={item.id} />
              ))
            }
          </div>
        </div>

        {/* Small Category */}
        <div className="w-full mt-7 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {
            category.map((item) => (
              <SmallCategory key={item.id} id={item.id} title={item.title} description={item.description} />
            ))
          }
        </div>

        {/* Heading Special Offer */}
        <div className="w-full mt-7 mb-4 md:mb-7 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="">
            <h1 className="font-bold text-white text-xl">Special Offer For You</h1>
            <SmallText addclass={'ml-0 mt-1 leading-normal'}>We have an special offer for you. Lets check produck list on below</SmallText>
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="font-bold text-yellow-500 hover:text-yellow-300 text-md hover:cursor-pointer">Load more</h1>
          </div>
        </div>

        {/* Offer Product List */}
        <div className="p-0 bg-base-100 md:p-4 md:bg-base-300 rounded-2xl">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            <div className="w-full p-0">
              <h1 className="font-bold text-white text-xl">Midnight Sale</h1>
              <SmallText addclass={'ml-0 mt-1 leading-normal'}>Lets grab your favourite product <br /> before midnight sale is ended</SmallText>
              <div className="text-center">
                <Image src={sidebanner} width={190} height={300} alt="sidebanner" />
              </div>
            </div>
            {
              books.map((item) => (
                <CardProducts key={item.id} images={item.image} title={item.title} description={item.description} prices={item.prices} />
              ))
            }
          </div>
        </div>
      </div>
    </PagesLayouts>
  )
}
