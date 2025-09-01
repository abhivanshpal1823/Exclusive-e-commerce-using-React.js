
import { useState } from "react";
import Form_side_img from "../assets/images/Form_side_img.png";
import { FormFields } from "../components/FormFields";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        name,
        email,
        password
    })

    const validateForm = () => {
        let isValid = true;
        const newError = {};

        if (!name.trim()) {
            newError.name = "name is required "
            isValid = false
        }
        if (!email.trim()) {
            newError.email = "email is required"
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            newError.email = "please enter your currect email"
        }
        if (!password.trim()) {
            newError.password = "password is required"
            isValid = false;
        } else if (password.length < 6) {
            newError.password = "password should we at least 6 charters long";
            isValid = false
        }
        setError(newError)
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm()
        if (isFormValid) {
            const formData = {
                name,
                email,
                password
            }
            console.log("Form Data", formData)
        }
    }

    return (
        <>
            <div className="container">
                {/* form-section */}
                <div className="flex gap-18 items-center pb-28">
                    <div className="pt-20 w-[60%]">
                        <img className="w-full " src={Form_side_img} alt="Form_side_img" />
                    </div>
                    <div className="w-[40%] pl-18">
                        <h2 className="text-[36px] font-medium">Create an account</h2>
                        <p className="text-[16px]">Enter your details below</p>

                        <form className="pt-12" onSubmit={handleSubmit} >
                            <div>
                                <FormFields
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Name"
                                    inputClass="border-b-2 border-gray-400 focus:outline-none w-[100%]"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {error.name && <span className="text-red-600"> {error.name}</span>}
                            </div>
                            <div>
                                <FormFields
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email or Phone Number"
                                    inputClass="border-b-2 pt-10 border-gray-400 focus:outline-none w-[100%]"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error.email && <span className="text-red-600"> {error.email}</span>}
                            </div>
                            <div>
                                <FormFields
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    inputClass="border-b-2 border-gray-400 pt-10 focus:outline-none w-[100%]"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error.password && <span className="text-red-600 text-[14px]"> {error.password} </span>}
                            </div>

                            <div className="bg-[#db4444] text-center rounded-sm mt-10">
                                <button
                                    className="text-white py-2 cursor-pointer"
                                    type="submit">
                                    Create Account
                                </button>
                            </div>
                        </form>

                        <div className="border-2 border-gray-400 text-center rounded-sm mt-5 cursor-pointer">
                            <button className="text-gray-500 py-2 cursor-pointer">
                                Sign Up With Google
                            </button>
                        </div>
                        <p className="text-gray-500 text-center pt-3">
                            Already have an account?{" "}
                            <a className="text-blue-700 underline" href="/login">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
                {/* /form-section */}
            </div>
        </>
    );
};

export default Signup;
