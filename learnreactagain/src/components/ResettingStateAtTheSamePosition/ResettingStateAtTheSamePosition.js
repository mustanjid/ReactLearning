// React preserves state of a component while it stays at the same position
// But sometimes, you may want to reset a component’s state.
import { useState } from "react";

export default function Scoreboard()
{
    const [isPlayerA, setisPlayerA] = useState(true)
    return(
        <>
        <h3>Resetting state at the same position</h3>
        <h4>Render the component in different position to set state in different manner</h4>
        {/* Render the component in different position to set state in different manner */}
        <div>
        {isPlayerA && <Counter person="Taylor"/>}
        {!isPlayerA && <Counter person="Sarah" />}
        {/* <div>
            {isPlayerA ? (<Counter person="Taylor" />):
            (<Counter person="Sarah" />)
        } */}
        </div>
        <br />
        <button onClick={()=>{setisPlayerA(!isPlayerA)}}>
            Next Player!
        </button>
        
        </>
    )
}

function Counter({person})
{
    const [score, setScore] = useState(0)
    
    let className = 'counter'

    return(
        <div className={className}>
            <h4>{person}'s score</h4>
            {score}
            <button onClick={()=> setScore(score + 1)}>
                Add One
            </button>
        </div>
    )
}