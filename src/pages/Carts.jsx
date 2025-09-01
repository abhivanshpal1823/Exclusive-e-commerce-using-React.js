import Led_monotor from "../assets/images/Led_monitor.png";
import Small_gamepes from "../assets/images/small_gamepad.png"
import { CartData } from "../data/products";


const cartsProductsData = [
    {
        id: 1,
        img: Led_monotor,
        product_name: "LCD Monitor",
        product_price: "$650",
        product_quality: "Quantity",
        product_subtotal: "$650",
    },
    {
        id: 2,
        img: Small_gamepes,
        product_name: "H1 Gamepad",
        product_price: "$550",
        product_quality: "Quantity",
        product_subtotal: "$1100",
    },
]

const Carts = () => {
    return (
        <>
            <div className="w-[100%]">
                {/* cart-update-section */}
                <div className="container mx-auto  mt-20 space-y-10">
                    <div className="bg-white shadow-lg/10 flex justify-evenly  py-6  border-1 border-gray-200">
                        {
                            CartData.map((items) => (
                                <p key={items.id} className="w-1/4 flex justify-evenly">{items}</p>

                            ))
                        }
                    </div>

                    {
                        cartsProductsData.map((data) => (
                            <div className="bg-white shadow-lg/10 items-center   text-center py-6  border-1 border-gray-200">
                                <div className="flex items-center  pl-22  mx-auto justify-around ">
                                    <img className="" src={data.img} alt="Led img" />
                                    <span className="space-x-4"> {data.product_name}</span>
                                    <p className="w-1/4">{data.product_price}</p>
                                    <p className="w-1/4">{data.product_quality}</p>
                                    <p className="w-1/4">{data.product_subtotal} </p>
                                </div>
                            </div>
                        ))
                    }

                    <div className="flex justify-between">
                        <button className="border-1 border-gray-500 px-8 py-2">Return To Shop</button>
                        <button className="border-1 border-gray-500 px-8">Update Cart</button>
                    </div>

                </div>
                {/* /cart-update-section */}

                {/* coupon-section */}
                <div className="w-[100%] mt-15 mb-18">
                    <div className="container flex gap-19  mx-auto">
                        <div className="space-x-5 w-1/2">
                            <input type="text" placeholder="Coupon Code " className="border-1 border-gray-600 px-4 py-2" />
                            <button className="bg-[#db4444] px-10 text-white rounded-sm py-3">Apply Coupon</button>
                        </div>
                        <div className="border-1 p-6 w-1/2">
                            <h2 className="text-[20px] font-semibold"> Cart Total</h2>
                            <div className="flex justify-between pt-6 border-b-1 border-gray-400 pb-4">
                                <p className="text-[18px]">Subtotal:</p>
                                <p>$1750</p>
                            </div>
                            <div className="flex justify-between pt-6 border-b-1 border-gray-400 pb-4">
                                <p className="text-[18px]">Shipping::</p>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between pt-6 pb-4">
                                <p className="text-[18px]">Total:</p>
                                <p>$1750</p>
                            </div>
                            <div className="text-center pt-5">
                                <button className="px-10 py-4 text-white bg-[#db4444]  text-center rounded-sm">
                                    Procees to checkout
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
                {/* coupon-section */}

            </div>
        </>
    )
}
export default Carts;