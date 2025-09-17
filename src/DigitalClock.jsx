import React,{useEffect,useState} from "react";

function DigitalClock(){

    const[time, setTime] = useState(new Date().toLocaleTimeString());
    // console.log(time)

    useEffect(() =>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
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