"use client" // Related to NextJS (Thursday / Fridat)
import {useState} from 'react'

export default function Counter({initialValue}) {
    // I am defining a dynamic variable/state called number
    // The initial value of the state = 0 
    // If I want to change the value of the state, I will use setNumber method
    const [number,setNumber] = useState(initialValue);
    const [message, setMessage] = useState("");

    const incrementNumber = () => {
        setNumber(number+1); // number = number + 1 
        setMessage("")
    }
    
    const decrementNumber = () => {
        if (number == 0){
            setMessage("Number cannot be less than 0")
        }
        else {
        setNumber(number-1);
        }
    }
    const resetNumber = () => {
        setNumber(0);
        setMessage("");
    }

  return (
    <div>
        <h2>Counter</h2>
        <p>{number}</p>
        <p className='bg-red'>{message}</p>
        {/* When the button is clicked, call the increment number method */}
        <button onClick={incrementNumber}>Increment</button>
        {/* Complete the decrement method */}
        {/*When user try to press decrement when the number is 0, 
        show a message "number cannot be less than 0"*/}
        <button onClick={decrementNumber}>Decrement</button>
        {/* Complete the reset method, set it back to 0 */}
        <button onClick={resetNumber}>Reset</button>
        </div>
    
  )
}
