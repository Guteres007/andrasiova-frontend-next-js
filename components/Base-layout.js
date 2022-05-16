import Head from 'next/head'
import Header from "./Header";

export default function BaseLayout({ children }) {
  return (
    <>
      <Head>
        <title>Andrášiová</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"  />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>

         <Header/>
         {children}
      </>
  )
}
