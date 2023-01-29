import Head from "next/head"
import Link from "next/link"
import Container from "./Components/Container"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import PageTitle from "./Components/Page_title"

const Login = () => {
    return (
        <>

            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>
                
                <PageTitle title="Login" brad="Login" />

                <div id="login_form">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="text-center my-4">
                                <img src="/img/DMS-LIVE-TV2.png" alt="" />
                            </div>
                            <div id="login_form_div">
                                <form action="">
                                    <label htmlFor="email" className="mt-4">Email</label>
                                    <input type="text" className="form-control form-control-lg" id="email" placeholder="Email" />
                                    <label htmlFor="password" className="mt-4">Password</label>
                                    <input type="password" className="form-control form-control-lg" id="password" placeholder="Password" />
                                    
                                    <div className="row">
                                        <div className="col-6">
                                            <div class="form-check mt-5">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-6 mt-5 text-end">
                                            <Link href="/forget-password" id="forget_password">Forgot Password ?</Link>
                                        </div>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-lg mt-5">Login</button>
                                </form>

                                <div className="text-center mb-0 mt-4">
                                    <Link href="/register" className="have_account">Don't have an account ?</Link>
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

export default Login