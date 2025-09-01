import { Link } from "react-router";
import { wishlistCartsData } from "../data/products";
import { justForCartsData } from "../data/products";


const Wishlist = () => {
    return (
        <>
            <div className="w-[100%]">
                {/* wishlists-section */}
                <div className=" container mx-auto pt-20">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[20px] "> Wishlist (4)</h2>
                        <button className="border-1 border-gray-400 px-8 py-2">Move All To Bag</button>
                    </div>
                    {/* carts-section */}
                    <div className="flex gap-5 pt-14 ">
                        {
                            wishlistCartsData.map((items) => {
                                return (
                                    <div key={items.id} className=" w-[23%] relative group">
                                        <div className="bg-gray-200 px-5 pt-5 pb-18" >
                                            <p className="bg-[#db4444] px-3 text-white inline-block">{items.discount_parcent}</p>
                                            <p className="relative left-50 bottom-6"> <i className={items.icon}></i> </p>
                                            <Link to={items.path}>   <img className="mx-auto h-[140px] " src={items.carts_image} alt="cart_img" /> </Link>
                                        </div>
                                        <Link to={items.path}>   <div className=" bg-black w-full text-center p-2 text-white absolute bottom-14 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ">
                                            <button className="text-[12px]"> <i className={items.cart_btn_icon}></i> {items.cart_btn}</button>
                                        </div> </Link>
                                        <div className="">
                                            <p className="pt-2 text-[16px] font-medium">{items.title}</p>
                                            <p className="text-[#db4444] text-[16px] font-medium">{items.price} <del className="text-gray-600">{items.del_price}</del> </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* carts-section */}
                </div>
                {/* wishlists-section */}
                {/* just-for-you */}
                <div className="container mx-auto pt-10">
                    <div className="flex justify-between items-center">
                        <p className="text-[20px] ">Just For You</p>
                        <button className="[16px] border-1 border-gray-400 px-8 py-2 text-gray-800">See All</button>
                    </div>
                    {/* carts-section */}
                    <div className="flex gap-7 pt-14">
                        {
                            justForCartsData.map((items) => {
                                return (
                                    <div key={items.id} className=" w-[23%] relative group">
                                        <div className="bg-gray-200 px-5 pt-5 pb-18">
                                            <div className="flex  items-center justify-between ">
                                                <p className="bg-[#db4444]  px-3 text-white"> {items.discount_parcent} </p>
                                                <p> <i className={items.icon}></i> </p>
                                            </div>
                                            <img className="mx-auto h-[140px] pt-2" src={items.carts_image} alt="" />
                                        </div>
                                        <div className=" bg-black w-full text-center p-2 text-white absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ">
                                            <button className="text-[12px]"> <i className={items.cart_btn_icon}></i> {items.cart_btn}</button>

                                        </div>
                                        <div className="">
                                            <p className="pt-2 text-[16px] font-medium">{items.title}</p>
                                            <p className="text-[#db4444] text-[16px] font-medium">{items.price} <del className="text-gray-600">{items.del_price}</del></p>
                                            <p><i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><span className="font-semibold text-gray-600"> ({items.number}) </span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* carts-section */}
                </div>
                {/* just-for-you */}
            </div >
        </>
    )
}
export default Wishlist;