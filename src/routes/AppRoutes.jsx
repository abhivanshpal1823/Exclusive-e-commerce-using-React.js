import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Carts, Login, About, Contact, NotFoundPage, Signup, Wishlist, ProductDetailsPage, Checkout, Account_dropdown, Account } from "../pages";
import LoginForm from "../pages/LoginForm";
import { MENU_PATH } from "../config/Menus";




export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: MENU_PATH.HOME,
                index: true,
                element: <Home />,
            },
            {
                path: MENU_PATH.ABOUT,
                element: <About />,
            },
            {
                path: MENU_PATH.LOGIN,
                element: <Login />,
            },
            {
                path: MENU_PATH.CARTS,
                element: <Carts />,
            },
            {
                path: MENU_PATH.CONTACT,
                element: <Contact />,
            },
            {
                path: MENU_PATH.SIGNUP,
                element: <Signup />,
            },
            {
                path: MENU_PATH.WISHLIST,
                element: <Wishlist />
            },
            {
                path: MENU_PATH.PRODUCT_DETAILS,
                element: <ProductDetailsPage />
            },
            {
                path: "/LoginForm",
                element: <LoginForm />
            },
            {
                path: MENU_PATH.CHECKOUT,
                element: <Checkout />
            },
            {
                path: MENU_PATH.ACCOUNT,
                element: <Account />
            },
            {
                path: MENU_PATH.ACCOUNT_DROPDOWN,
                element: <Account_dropdown />
            },
        ],
    },
    {
        path: MENU_PATH.NOT_FOUND_PAGE,
        element: <NotFoundPage />,
    },
])
