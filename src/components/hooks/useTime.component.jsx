const Time = (props) => {
    const currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        ampm = hours >= 12 ? 'pm' : 'am';
        
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

            {console.log(currentTime)}
        </div>
    )
}

export default Time;