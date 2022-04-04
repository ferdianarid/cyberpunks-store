import Head from 'next/head'
import Navbar from '../components/Navbar'
import PagesLayouts from '../layouts/PagesLayouts'

export default function Home() {
  return (
    <PagesLayouts>
      <div className="">
        <Head>
          <title>Bookstore - Find your books</title>
          <meta name="description" content="boookstore for find favourite book" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <h1 className="font-bold text-4xl">
          BookStore with React Redux
        </h1>
      </div>
    </PagesLayouts>
  )
}
