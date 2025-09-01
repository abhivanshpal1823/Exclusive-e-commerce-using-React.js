import { useState } from "react";
import { FormFields } from "../components/FormFields";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const validateForm = () => {
        let isValid = true;
        const newError = {};

        if (!email.trim()) {
            newError.email = "email is required"
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            newError.email = "please enter your currect email"
        }

        if (!password.trim()) {
            newError.password = "password is required ";
            isValid = false;
        } else if (password.length < 6) {
            newError.password = "password should we at least 6 charters long"
        }
        setError(newError)
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const submitedData = {
                email,
                password
            }
            console.log("Form Data", submitedData)
        }
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="w-[30%] my-10 mx-auto p-10 bg-gray-100">
                    <h2 className="text-center text-2xl underline underline-offset-6 text-blue-900"> Login Form </h2>
                    <form onSubmit={handleSubmit} className="pt-6">
                        <FormFields
                            label="Email"
                            fieldId="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fieldName="email"
                            placeholder="email"
                            inputClass="block   border-1 border-gray-500 rounded-sm py-1.5 px-3 w-full"
                            labelClass="text-blue-950 block "
                        />
                        {error.email && <span className="text-red-600 block "> {error.email} </span>}

                        <FormFields
                            label="Password"
                            fieldId="password"
                            type="password"
                            value={password}
                            fieldName="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            inputClass="block border-1 border-gray-500 rounded-sm py-1.5 px-3 w-full"
                            labelClass="text-blue-950 pt-5 "
                        />
                        {error.password && <span className="text-red-600"> {error.password}</span>}

                        <div className="pt-5">
                            <button type="submit" className="border-1 border-gray-500 px-10 py-1 bg-blue-800  text-white text-[18px] cursor-pointer" >Login</button>

                        </div>
                    </form>

                </div>


            </div>
        </>
    )
}
export default LoginForm;