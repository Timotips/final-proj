import Head from 'next/head'
import Navbar from "../components/navbar";
import Title from "../components/title";
import Details from "../components/details";
import Footer from "../components/footer";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Sacred Hearth College</title>
      </Head>
      <Navbar />
      <Title />
      <Details />
      <Footer />
    </>
  )
}
