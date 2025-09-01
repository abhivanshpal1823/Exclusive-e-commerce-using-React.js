import { useEffect, useState } from "react";



const Countdown = () => {

    const [days, setDays] = useState(0);
    const [hours, setHoures] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "November, 7, 2025";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHoures(Math.floor(time / (1000 * 60 * 60) % 24));
        setMinutes(Math.floor((time / 1000 * 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    },)

    return (
        <>
       
            <div className='flex gap-3'>
                <p className='text-[12px] font-semibold'> Day <br /> <span className='text-[32px] font-bold'> {days < 10 ? "0" + days : days} <span className='text-[#e07575] text-[30px]'>:</span> </span> </p>
                <p className='text-[12px] font-semibold'> Hour <br /> <span className='text-[32px] font-bold'> {hours < 10 ? "0" + hours : hours} <span className='text-[#e07575] text-[30px]'>:</span> </span> </p>
                <p className='text-[12px] font-semibold'> Minutes <br /> <span className='text-[32px] font-bold'> {minutes < 10 ? "0" + minutes : minutes} <span className='text-[#e07575] text-[30px]'>:</span> </span> </p>
                <p className='text-[12px] font-semibold'> Second <br /> <span className='text-[32px] font-bold'> {seconds < 10 ? "0" + seconds : seconds}  </span> </p>
            </div>
          
        </>
    )
}

export default Countdown;