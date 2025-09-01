
import { Link } from "react-router";

const Account = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between py-18">
                    <ul className=" space-x-3">
                        <Link to="/" className="text-gray-600"> Home /</Link>
                        <Link to="/myAccount">My Account</Link>
                    </ul>

                    <p>welcome! <span className="text-[#db4444]">Md Rimel</span> </p>

                </div>
                {/* saidbar */}
                <div className="flex gap-16">
                    <aside className="w-[26%] ">
                        <div className="">
                            <h2 className="font-medium"> Manage My Account</h2>
                            <ul className="pl-8 pt-2 text-gray-500 ">
                                <li className="hover:text-[#db4444]"> <Link>My Profile</Link> </li>
                                <li className="hover:text-[#db4444]"><Link>Address Book</Link> </li>
                                <li className="hover:text-[#db4444]"> <Link>My Payment Opetions</Link> </li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <h2 className="font-medium"> My Ordre</h2>
                            <ul className="text-gray-500 py-4 pl-8 ">
                                <li className="hover:text-[#db4444]"> <Link> My Returns </Link> </li>
                                <li className="hover:text-[#db4444]"> <Link> My Cancellations </Link> </li>
                            </ul>
                        </div>
                        <h2 className="font-medium"> My WishList</h2>

                    </aside>
                    {/* saidbar */}
                    <div className="border-1 border-gray-500 rounded-sm w-[74%]">
                        <div className="py-8 px-8">
                            <h2 className="text-[#db4444] text-[20px] font-medium"> Edit Your Profile</h2>

                            <div className="w-[74%]">
                                <form >
                                  
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Account;