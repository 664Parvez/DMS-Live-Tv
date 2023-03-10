import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script';

import Navbar from "../../Components/Navbar"

import Container from '../../Components/Container'


export default function Home({data}) {

  console.log(data);
  
  return (
    <>

      <Head>                                                                                                 
        <title>DMS Live TV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Script strategy='afterInteractive' dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start": new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-ML74N46');`}}>
        </Script>

      </Head>

      <Navbar />

        <div id='background_img' className='text-center'>
          <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-8'>
              <h1>Endless movies, TV shows, and more.</h1>
              <h3>Enjoy anywhere. Unsubscribe anytime.</h3>
              <Link href='/channel' className='btn btn-lg mt-4'>Let's get started !</Link>
            </div>
            <div className='col-lg-2'></div>
          </div>
        </div>

      <Container>


      </Container>
      

    </>
  )
}
