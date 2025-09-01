import { Link } from 'react-router-dom';
import { TOP_MENU } from '../config/Menus';


const menus_icons = [
    {
        id: "1",
        icon: "fa-regular fa-heart text-3xl"
    },
    {
        id: "2",
        icon: "fa-solid fa-cart-shopping text-3xl",
        path: "/carts"
    },
]

const Header = () => {
    return (
        <>
            {/* navbar-section */}
            <div className='border-b border-gray-200 pb-6'>
                <div className='container mx-auto flex justify-between mt-10 items-center'>
                    <h1 className='text-3xl font-bold text-blue-950'> <Link to="/">Exclusive</Link> </h1>
                    <div className='pl-28'>
                        <ul className='flex gap-10 text-[18px] text-gray-700'>
                            {
                                TOP_MENU.map((menu) => {
                                    return (
                                        <li key={menu.id} > <Link to={menu.path || '#'}>{menu.title} </Link> </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <input className='bg-gray-100 py-1 px-4  rounded-sm shadow-md' type="text" placeholder='What are you looking for? ' />

                        <div className='flex gap-4'>
                            {
                                menus_icons.map((menuicon) => {
                                    return (
                                        <Link key={menuicon.id} to={menuicon.path}> <i className={menuicon.icon}> </i></Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* /navbar-section */}

        </>
    )
}
export default Header;

