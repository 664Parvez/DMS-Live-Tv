import Link from "next/link"
import Head from "next/head"

import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import PageTitle from "../../Components/Page_title"

import Container from "../../Components/Container"

const about = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />
            
            <Container>

            <PageTitle title="About Us" brad="About Us" />


                <div id="about_us">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-8">
                            <h2>Why Choose Us</h2>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis</p>
                            <p>Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem, consequatur vel laudantium ducimus, tempore debitis sint in voluptatum dicta molestias omnis veritatis tempora optio est aspernatur vero quae cum quod voluptates, voluptate ut enim perspiciatis consequuntur. Laborum inventore quidem magni libero rem voluptate, fuga beatae numquam doloribus officiis repudiandae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam facere illo hic velit sunt laborum nisi asperiores quibusdam eligendi eum. Iure quod nostrum aspernatur quidem error voluptas tempore nobis deserunt, neque ex dicta doloremque. Labore pariatur quas cupiditate laboriosam dolor!</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img src="/img/PC.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div id="about_second">
                    <h2 className="text-center">Why You’ll Love DMS Live TV? <br />
                    The Reasons Why Netfix Is The Best.
                    </h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card mt-4 text-center">
                                <h3>Flexible Theme Options</h3>
                                <p>We have provide various theme options it's easy to customize.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card mt-4 text-center">
                                <h3>Adjustable Website Layouts</h3>
                                <p>Findup is fully responsive with a clean design, working great as is.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card mt-4 text-center">
                                <h3>One Click Demo Import</h3>
                                <p>Powerful one click installer it's quick, easy and rocket fast!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card mt-4 text-center">
                                <h3>Regular Updates</h3>
                                <p>Whenever we have provide new update user get auto notifications.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about_third">
                    <div className="row">
                        <div className="col-lg-6 text-sm-center">
                            <img src="/img/mobile.webp" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Retina Ready Mobile Optimized</h2>
                            <p>Fully optimized for a perfect responsive and retina ready layout for selling on mobile.</p>

                            <ul>
                                <li><i className="fa-solid fa-check"></i> Fluid Design</li>
                                <li><i className="fa-solid fa-check"></i> Responsive layout</li>
                                <li><i className="fa-solid fa-check"></i> Retina Ready</li>
                            </ul>

                            <Link href="/" className="mt-5 btn btn-lg">Watch Channel Program</Link>
                        </div>
                    </div>
                </div>

            </Container>

            <Footer />
        </>
    )
}

export default about