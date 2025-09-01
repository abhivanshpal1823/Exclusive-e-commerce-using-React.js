import { Link } from "react-router-dom";

const ProductCard = ({ items }) => {
    return (
        <>
            <div key={items.id} className='w-[24%] group relative '>
                <div className="p-4 bg-gray-200">
                    {items.percentage && (
                        <p className="bg-[#db4444] inline px-3 py-1 rounded-sm text-white">
                            {items.percentage}
                        </p>
                    )}
                    <div className=' relative bottom-5 left-54'>
                        <p className='rounded-[100%] py-2'> <i className={items.heart_icon}></i></p>
                        <p className=''> <i className={items.eye_icon}></i></p>
                    </div>
                    <div className='relative bottom-10 h-[150px] left-6'>
                        <Link to="/product-detail"><img src={items.image} alt="gamepad_img" /></Link>
                    </div>
                    {items.cart_btn_text && (
                        <Link to="/carts">
                            <div className='bg-black absolute bottom-[84px] text-center right-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>
                                <button className='py-1 text-white text-[18px] font-medium cursor-pointer'> {items.cart_btn_text} </button>
                            </div>
                        </Link>
                    )}
                </div>
                <div className=' pt-2'>
                    <p className='text-[16px] font-medium'>{items.title}</p>
                    <p className='text-[#db4444]'>{items.price} <del className='text-gray-500 mark'> {items.mark_price} </del></p>
                    <p className=''> <i className={items.rating}></i>  <i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i><i className={items.rating}></i>  <span className='text-xl font-bold text-gray-400'>({items.rating_number})</span></p>
                </div>

            </div>
        </>
    )
}
export default ProductCard;
