import Head from "next/head"
import Link from "next/link"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Container from "./Components/Container"
import Channel from "./Components/channels"

const SinglePage = () => {
    return (
        <>
            <Head>
                <title>Single Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>
                
                <div id="single_first_section">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-8">
                            <iframe src="https://www.youtube.com/embed/sUKwTVAc0Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="col-lg-4">
                            <input type="text" className="form-control form-control-lg" placeholder="Start the discussion . . ." />
                        </div>
                    </div>
                </div>

                <Channel />

            </Container>

            <Footer />
        </>
    )
}

export default SinglePage