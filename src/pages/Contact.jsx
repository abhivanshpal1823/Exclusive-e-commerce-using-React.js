import { Link } from "react-router";
import Email_icon from "../assets/images/email_icon.png"
import Phone_icon from "../assets/images/Phone_icon.png"
import { FormFields } from "../components/FormFields";

Link
const Contact = () => {
    return (
        <>
            <div className="w-[100%]">
                <div className="pb-18">

                    <div className="container mx-auto left-0 right-0">
                        <div className="py-10">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link to="/">Home /</Link>
                                </li>
                                <li>
                                    <Link to="/contact_us"> Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="container mx-auto left-0 right-0 flex gap-8">
                        <aside className="w-[37%] py-14 px-12 shadow-2xl  rounded-sm">
                            <div className="flex items-center space-x-5 ">
                                <img src={Phone_icon} alt="phone icon" />
                                <h2 className="text-[18px] font-medium "> Call To Us </h2>
                            </div>
                            <div className="space-y-4 pt-8 border-b-1 pb-8 border-gray-500">
                                <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
                                <p className="text-[14px]">Phone: +8801611112222</p>
                            </div>


                            <div className="flex items-center space-x-5  ">
                                <img src={Email_icon} alt="email_icon" />
                                <h2 className="text-[18px] font-medium "> Write To US </h2>
                            </div>
                            <div className="space-y-4 pt-8 pb-10">
                                <p className="text-[14px]">Fill out our form and we will contact you within 24 hours.</p>
                                <a href="##">Emails: customer@exclusive.com </a>
                                <a href="##"> Emails: support@exclusive.com </a>
                            </div>

                        </aside>
                        {/* right-section */}
                        <div className="w-full px-10 py-10 shadow-xl ">
                            <form action="" className="space-x-2">
                                <FormFields
                                    type="text"
                                    placeholder="Your Name"
                                    inputClass="py-4 px-3 bg-gray-100 text-[18px] rounded-sm w-[30%]"
                                />
                                <FormFields
                                    type="email"
                                    placeholder="Your Email"
                                    inputClass="py-4 px-3 bg-gray-100 text-[18px] rounded-sm w-[30%]"
                                />
                                <FormFields
                                    type="phone"
                                    placeholder="Your Phone"
                                    inputClass="py-4 px-3 bg-gray-100 text-[18px] rounded-sm w-[30%]"
                                />
                            </form>
                            <div>
                                <textarea name="text" id="text" className="bg-gray-100 py-4 px-6 rounded-md w-full h-60 mt-10 text-[20px] text-gray-600">Your Massage</textarea>
                                <div className="flex  justify-end pt-8">
                                    <button className="text-white bg-[#db4444] px-14 py-4 rounded-sm text-[16px]"> Send Massage </button>

                                </div>
                            </div>

                        </div>
                        {/* right-section */}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;