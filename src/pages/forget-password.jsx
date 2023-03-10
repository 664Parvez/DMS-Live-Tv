import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

import Container from "../../Components/Container"
import PageTitle from "../../Components/Page_title"

const forgetPassword = () => {
    return (
        <>
            <Head>
                <title>Forget Password</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>

                <PageTitle title="Forget Password" brad="forget password" />

                <div id="forgetPassword">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <Image height="100" width="300" src="/img/DMS-LIVE-TV2.png" alt="" />
                            </div>

                            <div id="forgetPassword_form_div">
                                <form action="">

                                    <label htmlFor="email" className="mt-4">Email</label>
                                    <input type="text" className="form-control form-control-lg" id="email" placeholder="Email" />

                                    <button type="submit" className="btn btn-lg mt-4">New Password</button>
    
                                </form>
                                
                                <div className="text-center mt-5">
                                    <Link href="/login" id="forget_login_link">Login Your Account <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>  
                </div>

            </Container>

            <Footer />

        </>
    )
}

export default forgetPassword