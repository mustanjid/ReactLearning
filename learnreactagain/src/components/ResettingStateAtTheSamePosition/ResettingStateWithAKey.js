import { useState } from "react";

// React preserves state of a component while it stays at the same position
// But sometimes, you may want to reset a component’s state.
// resetting a state with key is much more easier

export default function ResettingAStateWithAKey()
{
    const [isPlayerA, setisPlayerA] = useState(true)
    return(
        <>
        <div>
        <h3>Resetting state at the same position</h3>
        <h4>Resetting the state with a key</h4>
        <h5>Remember that keys are not globally unique. They only specify the position within the parent.</h5>
        {/* Render the component in different position as of setting with a different key */}
        {isPlayerA? (<Counter key="Taylor" person="Taylor"/>) :
            (<Counter key="Sarah" person="Sarah" />)
        }
        <br />
        <button onClick={()=>{setisPlayerA(!isPlayerA)}}>
            Next Player!
        </button>
        </div>
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