
import Banner_img from "../assets/images/banner_img.png";
import Frame_img from "../assets/images/frame_img.png";
import Play_station_img from "../assets/images/play_station_img.png";
import Women_collection from "../assets/images/women_collection.png";
import Speaker from "../assets/images/speaker_img.png";
import Perfume from "../assets/images/perfume_img.png";
import { Link } from "react-router";
import {asideData, arrowIcons, flashProductsData,browseCategoryData,sellingProductData,exploreProductsData,deliveryData } from "../data/products";
import Countdown from "../components/Countdown";
import ProductCard from "../components/ProductsCard";



const Home = () => {
    return (
        <div>
            <div className="w-[100%]">
                {/* main-wrapper */}
                <div className='w-[95%]'>
                    {/* saidbar-section */}
                    <div className='container mx-auto flex'>
                        <aside className='border-r-1 border-gray-300 w-[20%] pt-8 pr-18 '>
                            <ul className='text-[18px] space-y-2'>
                                {
                                    asideData.map((items) => {
                                        return (
                                            <li key={items.id}><Link to=""> {items.asidebar_link} </Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </aside>
                        <div className='w-[80%] pl-10 pt-12'>
                            <img src={Banner_img} alt="banner_img" />
                        </div>
                    </div>
                    {/* /saidbar-section */}

                    {/* Flash-Sales section */}
                    <div className='w-full border-b-1 border-gray-300 '>
                        <div className='container mx-auto pt-18'>
                            <p className='text-[16px] font-semibold text-[#db4444]'>Today's</p>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-22 items-end">
                                    <h2 className='text-[36px] font-semibold '> Flash Sales </h2>
                                    <div className='flex gap-3'>

                                        <Countdown />
                                    </div>
                                </div>
                                <div className="space-x-2 ">
                                    {
                                        arrowIcons.map((icons) => (
                                            <p key={icons.id} className='bg-gray-200 rounded-full inline p-2'> <i className={icons.icon}></i></p>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* cards-section */}
                            <div className='flex gap-5 pt-10' >
                                {flashProductsData.map((item) => (
                                    <ProductCard key={item.id} items={item} />
                                ))}
                            </div>
                            {/* /cards-section */}
                            <div className='text-center pt-18 pb-8'>
                                <Link to="/wishlist"> <button className='bg-[#db4444] cursor-pointer px-8 py-2 mx-auto text-white rounded-sm'> View All Products </button></Link>
                            </div>
                        </div>
                    </div>
                    {/* /Flash-Sales section */}

                    {/* Browse By Category */}
                    <div className='pt-20 container mx-auto border-b-1 pb-12 border-gray-300'>
                        <p className='text-[#db4444] text-[16px] font-semibold'>Categories</p>
                        <h2 className='text-[36px] font-semibold pt-2'> Browse By Category </h2>
                        <div className='flex gap-17 pt-10'>

                            {
                                browseCategoryData.map((items) => (

                                    <div key={items.id} className='border-2 border-gray-300 inline-block px-6 py-4 text-center w-[12%]'>
                                        <img className='mx-auto left-0 right-0' src={items.icon} alt="Phone_icon" />
                                        <p className='text-[16px] pt-2'>{items.name}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    {/* /Browse By Category*/}

                    {/* Best Selling Products */}
                    <div className='container mx-auto pt-20 pb-8 '>
                        <p className='text-[#db4444] text-[16px] font-semibold'>This Month</p>
                        <div className='flex  justify-between'>
                            <h2 className='text-[36px] font-semibold pt-2'> Best Selling Products </h2>
                            <button className='bg-[#db4444]  px-8 text-white rounded-sm'> View All </button>
                        </div>
                        {/* products-cards */}

                        <div className='flex gap-5 mx-auto left-0 right-0 pt-10'>
                            {
                                sellingProductData.map((items) => (
                                    <ProductCard key={items.key} items={items} />
                                ))
                            }
                        </div>
                        {/* /products-cards */}
                    </div>
                    {/* /Best Selling Products */}
                    {/* frame_img */}
                    <div className='container mx-auto'>
                        <img src={Frame_img} alt="frame_img" />
                    </div>
                    {/* /frame_img */}
                    {/* Explore Our Products */}
                    <div className='container mx-auto pt-20'>
                        <p className='text-[#db4444] text-[16px] font-semibold'>Our Products</p>
                        <h2 className='text-[36px] font-semibold pt-2'>Explore Our Products </h2>
                        <div className='flex gap-5 pt-10  flex-wrap'>
                            {
                                exploreProductsData.map((items) => {
                                    return (
                                        <div key={items.id} className='w-[23%] group relative '>
                                            <div className="p-4 bg-gray-200">
                                                <div className=' relative  left-54'>
                                                    <p className='rounded-[100%] py-2'> <i className={items.heart_icon}></i></p>
                                                    <p className=''> <i className={items.eye_icon}></i></p>
                                                </div>
                                                <div className='relative bottom-18 left-8 h-[168px]'>
                                                    <img className='pt-4' src={items.image} alt="Dog_food" />
                                                </div>
                                            </div>
                                            <div className='bg-black absolute bottom-[60px] w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                                <button className=' py-1 text-white text-[18px] font-medium'> {items.cart_btn_text} </button>
                                            </div>
                                            <div className=' pt-2'>
                                                <p className='text-[16px] font-medium'>{items.title}</p>

                                                <p className=''> <span className='text-[#db4444]'> {items.price} </span> <i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><span className='text-xl font-bold text-gray-400' >({items.rating_number})</span></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        {/* /cards-section */}
                        <div className='text-center pt-18'>
                            <button className='bg-[#db4444] px-8 py-2 mx-auto text-white rounded-sm'> View All Products </button>
                        </div>
                    </div>
                    {/*/Explore Our Products */}

                    {/* new-arrival section */}
                    <div className='container mx-auto pt-20' >
                        <p className='text-[#db4444] text-[16px] font-semibold'>Our Products</p>
                        <h2 className='text-[36px] font-semibold pt-2'>New Arrival </h2>

                        <div className='container gap-8 mx-auto flex pt-10'>
                            <div className='w-[57%] '>
                                <img src={Play_station_img} alt="play_station_img" />
                            </div>
                            <div className='w-[57%] gap-8   grid grid-rows-2' >
                                <div className='w-full'>
                                    <img src={Women_collection} alt="women_collection" />
                                </div>
                                <div className='grid gap-6 grid-cols-2' >
                                    <div className=''>
                                        <img src={Speaker} alt="speaker" />
                                    </div>
                                    <div className=''>
                                        <img src={Perfume} alt="perfume" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /new-arrival section */}

                    {/* delivery-section */}
                    <div className='w-[943px] mx-auto flex  justify-between pt-20 pb-10'>
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
                </div >
                {/* /main-wrapper */}
            </div>
        </div>
    )
}

export default Home;
