import Gamepad from "../assets/images/gamepad.png";
import Keyboard from "../assets/images/keyboard_img.png";
import Led_img from "../assets/images/Led_img.png";
import Chair_img from "../assets/images/chair_img.png";
import Phone_icon from "../assets/images/cellPhone_icon.png";
import Computer_icon from "../assets/images/computer_icon.png";
import SmartWatch_icon from "../assets/images/SmartWatch_icon.png";
import Headphone_icon from "../assets/images/headphone_icon.png";
import Gamepad_icon from "../assets/images/gamepad_icon.png";
import North_coart from "../assets/images/north_coart.png";
import Beg from "../assets/images/beg_img.png";
import Cpu_cooler from "../assets/images/Cpu_cooler_img.png";
import book_self from "../assets/images/book_self_img.png";
import Dog_food from "../assets/images/dog_food.png";
import Camera_image from "../assets/images/Camera_image.png";
import Laptop_img from "../assets/images/Laptop_img.png";
import Curology_product from "../assets/images/curology_product_img.png";
import Car_img from "../assets/images/Car_img.png";
import Shose_img from "../assets/images/shose_img.png";
import Usb_gamepad from "../assets/images/usb_gamepad_img.png";
import Jacket_img from "../assets/images/jacket_img.png";
import Delivery_icon from "../assets/images/Delivery_icon.png"
import Services_icon from "../assets/images/services_icon.png";
import Money_icon from "../assets/images/money_back_icon.png";
import Product_img from "../assets/images/product_detail1.png";
import Tom_img from "../assets/images/tom_img.png";
import Will_img from "../assets/images/will_img.png";
import Emma_img from "../assets/images/emma_img.png";
import Saller_icon from "../assets/images/sallers_icon.png";
import Customer_icon from "../assets/images/customer_icon.png"
import Anual_icon from "../assets/images/anual_gross_icon.png"
import Jacket from "../assets/images/jacket_img.png";
import Laptop from "../assets/images/Laptop_img.png"
import { defaultProduct, socialMediaIcons, defaultSellingProductData } from "./DefaultData";



export const asideData = [
    {
        id: 1,
        asidebar_link: "Woman’s Fashion"
    },
    {
        id: 2,
        asidebar_link: "Men’s Fashion"
    },
    {
        id: 3,
         asidebar_link: "Electronics"
    },
    {
        id: 4,
        asidebar_link: "Home & Lifestyle"
    },
    {
        id: 5,
        asidebar_link: "Medicine"
    },
    {
        id: 6,
        asidebar_link: "Sports & Outdoor"
    },
    {
        id: 7,
        asidebar_link: "Baby’s & Toys"
    },
    {
        id: 8,
        asidebar_link: "Groceries & Pets"
    },
    {
        id: 9,
        asidebar_link: "Health & Beauty"
    },

]

export const arrowIcons = [
    {
        id: 1,
        icon: "fa-solid fa-arrow-left",
    },
    {
        id: 2,
        icon: "fa-solid fa-arrow-right",
    },
];

export const flashProductsData = [
    {
        id: 1,
        ...defaultProduct,
        percentage: " -40% ",
        image: Gamepad,
        title: "HAVIT HV-G92 Gamepad",
        price: "$120",
        mark_price: "$160",
        rating_number: "88",
        path: "/carts",
    },
    {
        id: 2,
        ...defaultProduct,
        percentage: " -40% ",
        image: Keyboard,
        title: "AK-900 Wired Keyboard",
        price: "$960",
        mark_price: "$1160",
        rating_number: "88",
    },
    {
        id: 3,
        ...defaultProduct,
        percentage: " -40% ",
        image: Led_img,
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        mark_price: "$400",
        rating_number: "99",
    },
    {
        id: 4,
        ...defaultProduct,
        percentage: " -40% ",
        image: Chair_img,
        title: "IPS LCD Gaming Monitor",
        price: "$375",
        mark_price: "$400",
        rating_number: "99",
    },

]

export const browseCategoryData = [
    {
        id: 1,
        icon: Phone_icon,
        name: "Phone"
    },
    {
        id: 2,
        icon: Computer_icon,
        name: "Computer"
    },
    {
        id: 3,
        icon: SmartWatch_icon,
        name: "Smartwatch"
    },
    {
        id: 4,
        icon: Computer_icon,
        name: "Camera",
    },
    {
        id: 5,
        icon: Headphone_icon,
        name: "Headphone",
    },
    {
        id: 6,
        icon: Gamepad_icon,
        name: "Gamepad",
    }
]

export const sellingProductData = [
    {
        id: 1,
        ...defaultSellingProductData,
        image: North_coart,
        title: "The north coat",
        price: "$260",
        mark_price: "$360",
        rating_number: "65",
    },
    {
        id: 2,
        ...defaultSellingProductData,
        image: Beg,
        title: "Gucci duffle bag",
        price: "$960",
        mark_price: "$1160",
        rating_number: "65",
    },
    {
        id: 3,
        ...defaultSellingProductData,
        image: Cpu_cooler,
        title: "RGB liquid CPU Cooler",
        price: "$160",
        mark_price: "$170",
        rating_number: "65",
    },
    {
        id: 4,
        ...defaultSellingProductData,
        image: book_self,
        title: "Small BookSelf",
        price: "$360",
        rating_number: "65",
    },
]

export const exploreProductsData = [
    {
        id: 1,
        ...defaultProduct,
        image: Dog_food,
        title: "Breed Dry Dog Food",
        price: "$100",
        rating_number: "35",
    },
    {
        id: 2,
        ...defaultProduct,
        image: Camera_image,
        title: "CANON EOS DSLR Camera",
        price: "$360",
        rating_number: "95",
    },
    {
        id: 3,
        ...defaultProduct,
        image: Laptop_img,
        title: "ASUS FHD Gaming Laptop",
        price: "$700",
        rating_number: "325",
    },
    {
        id: 4,
        ...defaultProduct,
        image: Curology_product,
        title: "Curology Product Set ",
        price: "$500",
        rating_number: "145",
    },
    {
        id: 5,
        percentage: " -40% ",
        ...defaultProduct,
        image: Car_img,
        title: "Kids Electric Car ",
        price: "$960",
        rating_number: "65",
    },
    {
        id: 6,
        percentage: " -40% ",
        ...defaultProduct,
        image: Shose_img,
        title: "Jr. Zoom Soccer Cleats ",
        price: "$1160",
        rating_number: "35",
    },
    {
        id: 7,
        ...defaultProduct,
        percentage: " -40% ",
        image: Usb_gamepad,
        title: " GP11 Shooter USB Gamepad ",
        price: "$660",
        rating_number: "55",
    },
    {
        id: 8,
        ...defaultProduct,
        percentage: " -40% ",
        image: Jacket_img,
        title: " Quilted Satin Jacket",
        price: "$660",
        rating_number: "55",
    },

]

export const deliveryData = [
    {
        id: 1,
        icon: Delivery_icon,
        title: "FREE AND FAST DELIVERY",
        paragraph: "Free delivery for all orders over $140"
    },
    {
        id: 2,
        icon: Services_icon,
        title: "24/7 CUSTOMER SERVICE",
        paragraph: "Friendly 24/7 customer support"
    },
    {
        id: 3,
        icon: Money_icon,
        title: "MONEY BACK GUARANTEE",
        paragraph: "We reurn money within 30 days"
    },
]

export const productsSmallImg = [
    {
        image: Product_img,
        id: 1
    },
    {
        image: Product_img,
        id: 2,
    },
    {
        image: Product_img,
        id: 3
    },
    {
        image: Product_img,
        id: 4
    },
]

export const productSize = ["XS", "S", "M", "XL"]

export const DeliveryStatus = [
    {
        icon: "fa-regular fa-truck text-2xl",
        title: "Free Delivery",
        status: "Enter your postal code for Delivery Availability"
    },
    {
        icon: "fa-solid fa-arrow-rotate-left text-2xl",
        title: " Return Delivery",
        status: "Free 30 Days Delivery Returns. Details "
    },
]

export const employees = [
    {
        id: 1,
        img: Tom_img,
        name: "Tom Cruise",
        post: "Founder & Chairman",
        ...socialMediaIcons,
    },
    {
        id: 2,
        img: Emma_img,
        name: "Emma Watson",
        post: "Managing Director",
        ...socialMediaIcons,
    },
    {
        id: 3,
        img: Will_img,
        name: "Will Smith",
        post: "Product Designer",
        ...socialMediaIcons,
    },
]

export const sallingIncome = [
    {
        id: 1,
        icons: Saller_icon,
        price: "10.5k ",
        status: "Sallers active our site"
    },
    {
        id: 2,
        icons: Saller_icon,
        price: "10.5k ",
        status: "Sallers active our site"
    },
    {
        id: 3,
        icons: Customer_icon,
        price: "45.5k ",
        status: "Customer active in our site"
    },
    {
        id: 4,
        icons: Anual_icon,
        price: "25k ",
        status: "Anual gross sale in our site"
    },
]

const defaultWishListData = {
    discount_parcent: "-35%",
    icon: "fa-regular fa-trash-can text-2xl",
    cart_btn_icon: "fa-solid fa-cart-shopping",
    cart_btn: "Add To Cart",
}

export const wishlistCartsData = [
    {
        id: 1,
        ...defaultWishListData,
        carts_image: Beg,
        title: "Gucci duffle bag",
        price: "$960",
        del_price: "$1160",
        path: "/product-detail"
    },
    {
        id: 2,
        ...defaultWishListData,
        carts_image: Cpu_cooler,
        title: "RGB liquid CPU Cooler",
        price: "$1960",
    },
    {
        id: 3,
        ...defaultWishListData,
        carts_image: Usb_gamepad,
        title: "GP11 Shooter USB Gamepad",
        price: "$550",
    },
    {
        id: 5,
        ...defaultWishListData,
        carts_image: Jacket,
        title: "Quilted Satin Jacket",
        price: "$750",
    },
]

const defaultJustForCartsData = {
    discount_parcent: "-35%",
    icon: "fa-regular fa-eye text-2xl",
    cart_btn: "Add To Cart",
    rating: "fa-regular fa-star",
    cart_btn_icon: "fa-solid fa-cart-shopping",

}

export const justForCartsData = [
    {
        id: 1,
        ...defaultJustForCartsData,
        carts_image: Laptop,
        title: "ASUS FHD Gaming Laptop",
        price: "$960",
        del_price: "$1160",
        number: 65
    },
    {
        id: 2,
        ...defaultJustForCartsData,
        carts_image: Led_img,
        title: "HAVIT HV-G92 Gamepad",
        price: "$1160",
        number: 65
    },
    {
        id: 3,
        ...defaultJustForCartsData,
        carts_image: Gamepad,
        title: "IPS LCD Gaming Monitor",
        price: "$560",
        number: 65
    },
    {
        id: 4,
        ...defaultJustForCartsData,
        carts_image: Keyboard,
        title: "AK-900 Wired Keyboard",
        price: "$200",
        number: 65
    },
]

export const CartData = ["Product", "Price", "Quantity", "Subtotal"]
