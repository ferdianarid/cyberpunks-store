import Head from 'next/head'
import { books } from '../apis/books'
import Cards from '../components/Cards'
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
        <div className="my-10">
          <h1 className="font-bold text-2xl mb-2">BookStore with React Redux</h1>
          <p className="text-sm font-normal text-gray-200">Lets grab your favourite book for weekend</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {books && books.map((book) => (
            <Cards key={book.id} images={book.image} title={book.title} description={book.description} />
          ))}
        </div>
      </div>
    </PagesLayouts>
  )
}
