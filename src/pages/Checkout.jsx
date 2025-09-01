import Small_gamepad from "../assets/images/Small_gamepad.png";
import Small_monitor from "../assets/images/Small_monitor.png";
import { flashProductsData } from "../data/products";

import { FormFields } from "../components/FormFields";



const checkout = () => {
    return (
        <>
            {/* Billing-details */}
            <div className="container mx-auto flex gap-28 pt-20">
                <div className="w-[47%] ">
                    <h2 className="text-[36px] font-medium"> Billing Details </h2>
                    <form className="w-full pt-8" action="">
                        <FormFields
                            fieldId="firstname"
                            label="First Name"
                            type="text"
                            fieldName="name"
                            placeholder="Enter name"
                            inputClass="bg-gray-200 w-full px-4 py-3  rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                        />
                        <FormFields
                            fieldId="company name"
                            label="Company Name"
                            type="text"
                            fieldName="company name"
                            inputClass="bg-gray-200 w-full px-4 py-3  rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                            placeholder="company name"
                        />
                        <FormFields
                            fieldId="street address"
                            label="street address"
                            type="text"
                            fieldName="street address"
                            placeholder="street Address"
                            inputClass="bg-gray-200 w-full px-4 py-3 rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                        />
                        <FormFields
                            fieldId="apartment floor"
                            label="Apartment, floor, etc. (optional)"
                            type="text"
                            fieldName="apartment floor"
                            placeholder="Apartment, floor, etc. "
                            inputClass="bg-gray-200 w-full px-4 py-3  rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                        />
                      
                        <FormFields
                            fieldId="town/city"
                            label="Town/City"
                            type="text"
                            fieldName="town/city"
                            placeholder="town/city"
                            inputClass="bg-gray-200 w-full px-4 py-3  rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                        />
                        
                        <FormFields
                            fieldId="phone"
                            label="Phone"
                            type="number"
                            fieldName="phone Number"
                            placeholder="phone number"
                            inputClass="bg-gray-200 w-full px-4 py-3  rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                        />
                        <FormFields
                            fieldId="email address"
                            label="Email Address"
                            type="email"
                            fieldName="email"
                            placeholder="email address"
                            inputClass="bg-gray-200 w-full px-4 py-3  rounded-sm"
                            labelClass="block text-gray-500 pt-4"
                        />
                        <div className="space-x-8">
                            <input className="mt-8 text-center" type="checkbox" id="" />
                            <label className="text-center" htmlFor="">Save this information for faster check-out next time</label>
                        </div>
                    </form>
                </div>
                <div className="w-[47%] pt-26 pr-20">
                    <div className="space-y-8">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-4">
                                <img src={Small_gamepad} alt="LCD Monitor" className="" />
                                <span className="text-[20px]">LCD Monitor </span>
                            </div>
                            <span className="text-[18px]">$650</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={Small_monitor} alt="Small-monitor" className="w-12 h-12 object-contain" />
                                <span className="text-[20px]">H1 Gamepad </span>
                            </div>
                            <span className="text-[18px]">$650</span>
                        </div>
                    </div>


                    <div className="pt-10 space-y-4">
                        <div className="flex justify-between">
                            <span className="text-[22px]">Subtotal:</span>
                            <span className="text-[18px]">$1750</span>
                        </div>
                        <div className="flex border-t-2 border-gray-400 pt-3 justify-between">
                            <span className="text-[22px]">Shipping:</span>
                            <span className="text-[18px]">Free</span>
                        </div>
                        <div className="flex border-t-2 border-gray-400 pt-3 justify-between">
                            <span className="text-[22px]">Total:</span>
                            <span className="text-[18px]">$1750</span>
                        </div>

                    </div>
                    <div className="space-y-6 pt-6">
                        <div className="flex justify-between">
                            <div className="space-x-3 flex items-center"> <input className="h-4 w-4" type="radio" />
                                <span>Bank</span></div>
                            <div className="flex">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/KakaoPay_logo.svg/2560px-KakaoPay_logo.svg.png" alt="KakaoPay" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />

                            </div>
                        </div>
                        <div className="space-x-3 flex items-center">
                            <input type="radio" className="h-4 w-4" />
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                    <div className="space-x-4 pt-5">
                        <input type="text" placeholder="coupon code" className=" border-2 rounded-sm border-gray-400 py-2 px-4" />
                        <button type="submit" className="bg-[#db4444] rounded-sm py-2  px-7 cursor-pointer  text-white ">Apply Cuopon</button>
                    </div>
                    <button type="submit" className="bg-[#db4444] rounded-sm py-2 mt-8  px-8 cursor-pointer  text-white ">Place Order</button>
                </div>
            </div>
            {/* /Billing-details */}

            <div className="container mx-auto py-18">
                {/* cards-section */}
                <div className='flex gap-5 pt-10'>
                    {
                        flashProductsData.map((items) => {
                            return (
                                <div key={items.id} className='w-[24%] group relative '>
                                    <div className="p-4 bg-gray-200">
                                        <p className='bg-[#db4444] inline px-3  py-1 rounded-sm text-white'> {items.percentage} </p>
                                        <div className=' relative bottom-5 left-54'>
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
                {/* /cards-section */}
            </div>


        </>
    )
}
export default checkout;