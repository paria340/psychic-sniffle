import {useState, useEffect} from 'react'
function AccountTimer() {
    const [seconds, setSeconds] = useState(0)
    //once the component has mounted to dom we will initialize timer which will update seconds state every single second

    useEffect(() => {
        const secondsInterval = setInterval(() => {
            console.log('tick')
            setSeconds((seconds) => {
                return seconds + 1
            })
        }, 1000)

        return() => {
            clearInterval(secondsInterval)
        }
    }, []) 
    return(
        <p>You've been looking at these recipes for {seconds}</p>
    )
}

export default AccountTimer;

//after a component is rendered do I need to do anything that is going to effect the logic within the component
//in order to control the asynchronous of state updater function you can pass a callback function
//dont need state variable in dependency array so it's left empty