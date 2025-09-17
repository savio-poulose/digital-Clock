import React,{useEffect,useState} from "react";

function DigitalClock(){

    const[time, setTime] = useState(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    // console.log(time)

    useEffect(() =>{    
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }))
        },1000)

        return () => clearInterval(interval);


    },[])

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{time}</span>
            </div>
        </div>
    )

}

export default DigitalClock;