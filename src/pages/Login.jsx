import {  useState } from "react";
import Form_side_img from "../assets/images/Form_side_img.png"
import { FormFields } from "../components/FormFields";



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState({ email: "", password: "" });

    console.log('Email :', email);
    console.log('Password : ', password);

    const userEmail = "priyanshu@gmail.com";
    const userPassword = "123456";

    const message = {
        userName: "Please enter username ",
        password: "please enter password"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = { email: " ", password: " " }
        if (userEmail !== email) {
            newError.email = message.userName
        }
        if (userPassword !== password) {
            newError.password = message.password
        }
        setError(newError);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <>
            <div className="">
                {/* form-section */}
                <div className=" flex gap-18 items-center pb-28">
                    <div className="pt-20">
                        <img className="w-full" src={Form_side_img} alt="Form_side_img" />
                    </div>
                    <div className="w-[30%] pl-18">
                        <h2 className="text-[36px] font-medium">Log in to Exclusive</h2>
                        <p className="text-[16px]">Enter your details below</p>
                        <form className="pt-12" onSubmit={handleSubmit} >

                            <FormFields
                                type="text"
                                placeholder="Email or Phone Number"
                                onChange={handleEmailChange}
                                inputClass="border-b-2 pt-10 border-gray-400 focus:outline-none w-[100%] "
                            />
                            {
                                error.email && (<div className="text-red-600 pt-2 text-[14px]">{error.email}</div>)
                            }
                            <FormFields
                                type="password"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                inputClass="border-b-2 border-gray-400 pt-10 focus:outline-none w-[100%] "
                            />
                            {
                                error.password && (<div className="text-red-600 text-[14px]">{error.password}</div>)
                            }
                            <button
                                type="submit"
                                className="w-full bg-[#db4444] text-white py-2 rounded-sm mt-4"
                            >
                                Login
                            </button>
                        </form>

                    </div>
                </div>
                {/* /form-section */}

            </div>
        </>
    )
}
export default Login;