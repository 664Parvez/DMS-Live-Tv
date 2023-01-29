import Link from "next/link"

const Navbar = () => {
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
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact-us">Contact</Link></li>
                            <li className="text-white"> | </li>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register">Register</Link></li>
                        </ul>
                    </div>
                    <div className="hamber_icon">
                        <img id="hambar" src="/img/hambar.png" alt="" />
                    </div>
            </div>
        </>
    )
}

export default Navbar