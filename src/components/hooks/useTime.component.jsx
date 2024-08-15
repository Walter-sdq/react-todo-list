import React, { useState, useEffect } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

       
        return () => clearInterval(timer);
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';

    return (
        <div className="clock">
            {
                hours === 0 ? 12 :
                    (hours > 12) ?
                        hours - 12 : hours
            }:{
                minutes > 9 ? minutes : `0${minutes}`
            }:{
                seconds > 9 ? seconds : `0${seconds}`
            } {ampm}
        </div>
    );
}

export default Time;
