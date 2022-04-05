import Head from 'next/head'
import Image from "next/image"
import Banner from "../components/moleculs/Banner"
import { computer } from "../apis/products"
import PagesLayouts from '../layouts/PagesLayouts'
import { SmallText } from "../components/atoms/Text"
import { Indicators } from '../components/atoms/Indicators'
import { bannerImages } from '../apis/banner'

export default function Homepage() {
  return (
    <PagesLayouts>
      <div className="">
        <Head>
          <title>Bookstore - Find your books</title>
          <meta name="description" content="boookstore for find favourite book" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex items-center justify-between">
          <div className="my-6 flex items-center space-x-4">
            {
              computer.map((items) => (
                <SmallText key={items.id}>{items.title}</SmallText>
              ))
            }
          </div>
          <SmallText>Location : <span className="font-bold"> Jombang, East Java </span></SmallText>
        </div>
        <div className="">
          <div className="carousel w-full">
            {
              bannerImages.map((banner) => (
                <Banner key={banner.id} itemNumber={banner.id} images={banner.name} />
              ))
            }
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            {
              bannerImages.map((item) => (
                <Indicators key={item.id} indNumber={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </PagesLayouts>
  )
}
