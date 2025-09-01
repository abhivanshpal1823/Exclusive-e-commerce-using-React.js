import { useEffect, useState } from "react";


const AccountDropdown = () => {

    const name_List = ['Apple', 'Banana', 'Grapesh', 'Guava', 'Orange', 'Papaya'];
    const [fruit, setFruit] = useState("Fruits")


    const [name, setName] = useState("priyanshu")

    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((time) => time + 1);
        }, 2000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const update = setInterval(() => {
            setName("Abhivansh Pal");
            // console.log(name)
        }, 4000)
    }, [name])


    useEffect(() => {
        const timmer = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * name_List.length);
            setFruit(name_List[randomIndex])
            console.log(fruit)
        }, 4000);

        return () => clearInterval(timmer)

    }, [])

    return (
        <>
            <div className="container mx-auto py-12">
                <p className="text-[20px] pb-4 text-center">Update Time :  {time} </p>
                <p className="text-gray-700 pt-6 text-[22px] text-center"> Fruits Name :- <span className="text-red-400 px-6 py-1.5 rounded-2xl bg-gray-700">{fruit}</span></p>
                <p className="text-2xl"> this is my name <span className="text-3xl text-amber-600">{name}...</span>
                </p>
            </div>
        </>
    )
}
export default AccountDropdown;