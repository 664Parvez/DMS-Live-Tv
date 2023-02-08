import React, {useState} from "react"
import Link from "next/link"

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const responsive_nav = () => {
        setNavbar(!navbar)
    } 

    return (
        <>
            <div id="navbar" className="d-flex align-items-center justify-content-between">
                
                    <div className="text-start">
                        <Link href="/">
                            <img id="Logo" src="/img/DMS-LIVE-TV.png" alt="" />
                        </Link>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li><Link href="/channel">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact-us">Contact</Link></li>
                            <li className="text-white"> | </li>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register">Register</Link></li>
                        </ul>
                    </div>
                    <div className="hamber_icon">
                        <img id="hambar" onClick={responsive_nav} src="/img/hambar.png" alt="" />
                    </div>


            </div>
                    <div className={ navbar ? "responsive_nav" : "responsive_nav_hide" }>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact-us">Contact</Link></li>
                            <li id="login_btn"><Link href="/login">Login</Link></li>
                            <li id="register_btn"><Link href="/register">Register</Link></li>
                        </ul>
                    </div>
        </>
    )
}

export default Navbar