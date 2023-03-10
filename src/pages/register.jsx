import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

import PageTitle from "../../Components/Page_title"
import Container from "../../Components/Container"

import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"

const Register = () => {
    return (
        <>
            <Head>
                <title>Register</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar/>

            <Container>

                <PageTitle title="Register" brad="Register" />

                <div id="signup_form">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="text-center my-4">
                                <Image height="100" width="300" src="/img/DMS-LIVE-TV2.png" alt="" />
                            </div>

                            <div id="signup_form_div">
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label htmlFor="firstName" className="mt-4">First Name</label>
                                            <input type="text" className="form-control form-control-lg" id="firstName" placeholder="First Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="lastName" className="mt-4">Last Name</label>
                                            <input type="text" className="form-control form-control-lg" id="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <label htmlFor="email" className="mt-4">Email</label>
                                    <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" />

                                    <label htmlFor="phone" className="mt-4">Number</label>
                                    <input type="tel" className="form-control form-control-lg" id="phone" placeholder="Phone Number" />

                                    <label htmlFor="password" className="mt-4">Password</label>
                                    <input type="password" className="form-control form-control-lg" id="password" placeholder="Password" />

                                    <button type="submit" className="btn btn-lg mt-5">Register</button>
                                </form>

                                <div className="text-center mb-0 mt-4">
                                    <Link href="/login" className="have_account">Already have an account ?</Link>
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


export default Register