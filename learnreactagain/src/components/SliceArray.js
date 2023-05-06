import { useState } from "react";

let initalCounter = [0, 0, 0]

export default function CounterList(){
    const [counters, setCounter] = useState(initalCounter)

    function handleIncrementClick(index){
        const nextCounter = counters.map((c, i) => {
            if(i === index)
            {
                return c+ 1
            }
            else{
                return c;
            }
        })
        setCounter(nextCounter)
    }

return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );

}