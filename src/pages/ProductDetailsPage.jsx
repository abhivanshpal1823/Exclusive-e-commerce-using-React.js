import { useState } from "react"
import Product_detail_img from "../assets/images/product_detail_img.png"
import { flashProductsData } from "../data/products"
import { productsSmallImg } from "../data/products";
import { productSize } from "../data/products";
import { DeliveryStatus } from "../data/products";
import { FormFields } from "../components/FormFields";





const ProductDetailsPage = () => {

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(prev => Math.max(1, prev - 1));
    }
    return (
        <>
            <div className="w-[100%]">
                <div className="container mx-auto pt-25 flex gap-14">
                    <div className="space-y-4">
                        {
                            productsSmallImg.map((img) => {
                                return (
                                    <img key={img.id} src={img.image} alt="" />
                                )
                            })
                        }

                    </div>
                    <div className="">
                        <img src={Product_detail_img} alt="" />
                    </div>
                    <div className="pr-12 pl-8 w-[40%]">
                        <h2 className="text-[24px] font-semibold"> Havic HV G-92 Gamepad</h2>
                        <p className="text-gray-600 text-[14px] pt-2">(150 Reviews)</p>
                        <span className="text-[24px] pt-2 block">$192.00</span>
                        <p className="border-b-1 border-gray-600 text-[14px] pt-2 pb-6">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

                        <div className="pt-6 flex items-center gap-2">
                            <span className="text-[18px] text-gray-800"> Colours : </span>
                            <div className="space-x-1">

                                <FormFields
                                    type="radio"
                                    fieldName="box1"
                                    inputClass=" accent-pink-500  w-4 h-4 border-1 rounded-full  cursor-pointer"
                                />

                                <FormFields
                                    type="radio"
                                    fieldName="box2"
                                    inputClass="accent-pink-500   w-4 h-4 border-1 cursor-pointer0 rounded-full "
                                />
                            </div>

                        </div>
                        <div className="flex space-x-2.5 items-center pt-4">
                            <h2 className="text-2xl text-gray-700"> Size : </h2>
                            {
                                productSize.map((size) => (
                                    <p className="border-1 border-gray-500 text-center w-[32px] rounded-sm text-[14px] text-gray-900"> {size} </p>
                                ))
                            }
                        </div>
                        <div className="flex items-center gap-5 pt-6 ">
                            <div className="flex items-center">
                                <button className="w-[35px] border-1 text-center  border-gray-400 py-1.5 rounded-l-sm" onClick={decrement}> <i className="fa-solid fa-minus"></i> </button>
                                <p className="w-[100px]  border-1 border-gray-500 text-center py-1.5">  {count} </p>
                                <button className="w-[35px] border-1 text-center  border-gray-400 py-1.5 rounded-r-sm" onClick={increment}> <i className="fa-solid fa-plus"></i> </button>
                            </div>

                            <button className="px-8 bg-[#db4444] text-white py-1.5 rounded-sm">Buy Now</button>
                            <p className="border-1 border-gray-600 px-2 rounded-sm"> <i className="fa-regular fa-heart text-xl py-1.5"></i> </p>

                        </div>

                        <div className="pt-7">
                            {
                                DeliveryStatus.map((data) => (
                                    <div className="flex items-center border-1 border-gray-500 rounded-t-sm gap-4 py-5 px-4">
                                        <p><i className={data.icon}></i></p>
                                        <div>
                                            <h2 className="text-[16px]"> {data.title}</h2>
                                            <p className="text-[14px]"> {data.status}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* related items */}
                {/* cards-section */}
                <div className="container mx-auto">
                    <p className='text-[16px] font-semibold text-[#db4444] pt-18'><span className=" border-8 rounded-sm border-[#db4444] mr-2 bg-white"></span> Today's</p>
                    <div className='flex gap-5 pt-8'>
                        {
                            flashProductsData.map((items) => {
                                return (
                                    <div key={items.id} className='w-[24%] group relative '>
                                        <div className="p-4 bg-gray-200">
                                            <p className='bg-[#db4444] inline px-3  py-1 rounded-sm text-white'> {items.percentage} </p>
                                            <div className=' relative bottom-5 left-57'>
                                                <p className='rounded-[100%] py-2'> <i className={items.heart_icon}></i></p>
                                                <p className=''> <i className={items.eye_icon}></i></p>
                                            </div>
                                            <div className='relative bottom-10 h-[150px] left-6'>
                                                <img src={items.image} alt="gamepad_img" />
                                            </div>
                                            <div className='bg-black absolute bottom-[84px] text-center right-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                                <button className='py-1 text-white text-[18px] font-medium'> {items.cart_btn_text} </button>
                                            </div>
                                        </div>
                                        <div className=' pt-2'>
                                            <p className='text-[16px] font-medium'>{items.title}</p>
                                            <p className='text-[#db4444]'>{items.price} <del className='text-gray-500 mark'> {items.mark_price} </del></p>
                                            <p className=''> <i className={items.rating}></i>  <i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i>  <span className='text-xl font-bold text-gray-400'>({items.rating_number})</span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* /cards-section */}

                {/* related items */}



            </div>
        </>
    )
}
export default ProductDetailsPage;