import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    <>
      <Head>
         <title>Andrášiová</title>
      </Head>
         <Header/>
         {children}
        <Footer/>
      </>
  )
}
