import { Link } from "react-router-dom";
import AboutBanner from "../assets/images/about-banner.png";
import { deliveryData, sallingIncome, employees } from "../data/products";
import { socialMediaIcons } from "../data/DefaultData";


const About = () => {
    return (
        <>
            <div className="w-[100%]">
                <div className="py-8 container mx-auto left-0 right-0">
                    <ul className="flex space-x-3 text-[20px] font-[400]">
                        <li className="text-gray-900 hover:text-blue-900">
                            <Link to="/">Home <span className="pl-2 ">/</span></Link>
                        </li>
                        <li className="text-gray-900 hover:text-blue-900">
                            <Link to="/about_us"> About</Link>
                        </li>
                    </ul>
                </div>
                <div className="container mx-auto left-0 right-0">
                    <div className="flex items-center ">
                        <div className=" w-[50%] pr-33">
                            <h2 className="text-[50px] font-semibold "> Our Story </h2>
                            <p className="text-[16px] pt-8">Launched in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p className="text-[16px] pt-6">
                                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                            </p>

                        </div>
                        <div className="text-center w-[50%]">
                            <img src={AboutBanner} alt="story_img" />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto left-0 right-0  pt-25">
                    <div className="w-full flex gap-10">
                        {
                            sallingIncome.map((data) => (
                                <div key={data.id} className=" border py-6 rounded-sm w-[calc((100%-30px)/4)]">
                                    <img className="mx-auto" src={data.icons} alt="" />
                                    <h2 className="text-center text-[32px] font-bold">{data.price}</h2>
                                    <p className="text-center">{data.status}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="container mx-auto left-0 right-0 flex pt-[25px]">
                    <div className="w-full flex gap-10">
                        {
                            employees.map((data) => (
                                <div key={data.id} className="w-[calc((100%-75px)/3)]">
                                    <div className="bg-gray-100 rounded-sm">
                                        <img className="mx-auto pt-[16px]" src={data.img} alt="tom_img" />
                                    </div>
                                    <h1 className="text-[32px] font-medium text-gray-900"> {data.name} </h1>
                                    <p> {data.post} </p>

                                    <p className="space-x-3"> <i className={data.twitter_icon}></i> <i className={data.instagram_icon}></i> <i className={data.linkdin_icon}></i> </p>

                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="container mx-auto mt-[86px] mb-[65px] left-0 right-0">
                    {/* delivery-section */}
                    <div className='w-[943px] mx-auto flex justify-between '>
                        {
                            deliveryData.map((items) => {
                                return (
                                    <div key={items.id} className=''>
                                        <img className='mx-auto' src={items.icon} alt="delivery_icon" />
                                        <h2 className='text-[20px] font-semibold'> {items.title}</h2>
                                        <p className='text-[14px]' >{items.paragraph}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* /delivery-section */}
                </div>
            </div>
        </>
    )
}
export default About;