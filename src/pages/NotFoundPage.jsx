import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="pt-10 ">
                    <ul className="text-xl font-medium text-gray-700">
                        <li>
                            <Link to="/"> Back to Home /</Link>
                        </li>
                    </ul>
                </div>
                <div className="container mx-auto  text-center py-30 space-x-12">
                    <h2 className="text-4xl text-gray-600 font-semibold text-center "> <span className="text-4xl font-semibold" >404</span> Not Found Page </h2>
                </div>
            </div>
        </>
    )
}
export default NotFoundPage;