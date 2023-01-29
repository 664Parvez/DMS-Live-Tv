import Link from "next/link"


const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <>
            <div id="footer_section">
                <div className="row">
                    <div className="col-lg-3">
                       <h4>About DMS Live TV</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam alias ad fugiat excepturi quas aspernatur officiis blanditiis eveniet expedita voluptas ipsum earum, ratione, voluptatibus perferendis . . .</p>
                       <Link href="/about" className="btn btn-outline-light btn-lg mt-4">Read More</Link>
                    </div>
                    <div className="col-lg-3">
                        <h4>ABOUT COMPANY</h4>
                        <ul>
                            <li><Link href="/about"><i class="fa-solid fa-arrow-right"></i> About Us</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Mission Ans Vision</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Company Profile</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Company Team</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Career-Opportunities</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>SERVICES</h4>
                        <ul>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Search Engine Optimization</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Social Media Marketing</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Display Marketing (PPC)</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Targeted Email Marketing</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Online Brand Promotion</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>DEVELOPMENT</h4>
                        <ul>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Software Development</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Web Development</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Custom Web Design</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Apps Development</Link></li>
                            <li><Link href=""><i class="fa-solid fa-arrow-right"></i> Web Maintenance</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="copywrite">
                <p className="mb-0 text-center">© 2008 - {date} DMS Live TV. All Right Reserved. | Design & Development By :- <Link href="https://www.digitalmarketingbd.com/">Digital Marketing Solution (Pvt.) Ltd.</Link></p>
            </div>
        </>
    )
}

export default Footer