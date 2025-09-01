import Qucode from "../assets/images/qrcode_img.png";
import Google_btn from "../assets/images/google_play_btn.png";
import Appstore_btn from "../assets/images/appstore_btn.png";
import { Link } from "react-router";
// import { MENU_PATH, TOP_MENU } from "../config/Menus";

const account_data = [
    {
        id: "1",
        menu: "My Account",
    },
    {
        id: "2",
        menu: "Login / Register",
        urlLink: "/login"
    },
    {
        id: "3",
        menu: "Cart",
        urlLink: "/carts"
    },
    {
        id: "4",
        menu: "Wishlist",
        urlLink: "/wishlist"

    },
    {
        id: "5",
        menu: "Shop",
    },
]
const quick_link_data = [
    {
        id: "1",
        links: "Privacy Policy"
    },
    {
        id: "2",
        links: "Terms Of Use"
    },
    {
        id: "3",
        links: "FAQ"
    },
    {
        id: "4",
        links: "Contact_us",
        urlLink: "/contact_us"
    },
]


const Footer = () => {
    return (
        <>
            {/* footer_section */}
            <footer className='bg-[#000000] border-b-1 border-gray-900 mt-10'>
                <div className='container mx-auto pt-16 pb-12 flex justify-between font-sans '>
                    <div className='text-white'>
                        <h2 className='text-[24px] font-bold text-whit'> <Link to="/"> Exclusive</Link></h2>
                        <p className='text-[20px] font-normal pt-6 text-whit' >Subscribe</p>
                        <p className='text-[14px] font-[50px] pt-8 text-whit'>Get 10% off your first order</p>
                        <input className='border-2 border-white rounded-sm py-1 mt-4 text-white px-2' type="text" placeholder='Enter your email' />
                    </div>


                    <div className='space-y-4'>
                        <h3 className='text-[20px] font-medium text-white pb-3'> Support</h3>
                        <p className='text-white pt-3'>111 Bijoy sarani, <br /> Dhaka,  DH 1515, Bangladesh.</p>
                        <a className='text-white pt-3' href="exclusive@gmail.com">exclusive@gmail.com</a>
                        <p className='text-white pt-3'>+88015-88888-9999</p>

                    </div>

                    <div className=''>
                        <h2 className='text-[20px] font-medium text-white'>Account </h2>
                        <ul className='text-white space-y-4 pt-6'>
                            {
                                account_data.map((items) => {
                                    return (
                                        <li key={items.id}><a href={items.urlLink}>{items.menu}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[20px] font-medium text-white'> Quick Link </h2>
                        <ul className='text-white space-y-4 pt-6'>

                            {
                                quick_link_data.map((items) => {
                                    return (
                                        <li key={items.id}><Link to={items.urlLink}>{items.links}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-[20px] font-medium text-white'> Download App </h2>
                        <p className='text-[14px] text-gray-300 pt-6'>Save $3 with App New User Only</p>

                        <div className='grid grid-cols-2 pt-4'>
                            <div className=''>
                                <img src={Qucode} alt="qrcode" />
                            </div>
                            <div className='grid grid-rows-2 text-white'>
                                <img src={Google_btn} alt="52" />
                                <img src={Appstore_btn} alt="kjh" />
                            </div>
                        </div>
                        <div className='text-white space-x-4 pt-4'>
                            <i className="fa-brands fa-facebook text-2xl"></i>
                            <i className="fa-brands fa-square-twitter text-2xl"></i>
                            <i className="fa-brands fa-instagram text-2xl"></i>
                            <i className="fa-brands fa-linkedin text-2xl"></i>

                        </div>
                    </div>
                </div>
            </footer>
            {/* /footer_section */}
            {/* sub-footer section */}
            <div className='bg-[#000000]'>
                <p className='text-gray-400  text-[18px] text-center py-6'> <span className='text-[20px]'>©</span> Copyright Rimel 2022. All right reserved</p>
            </div>
            {/* /sub-footer section */}
        </>
    )
}
export default Footer