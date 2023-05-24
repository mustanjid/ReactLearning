import { useState } from "react";

export default function DiffCompAtTheSamePostionResetState()
{
    const [isPasued, setisPasued] = useState(false)
    return(
        <>
        <div>
            {/* reset the state into its initial position */}
            {isPasued? <p>See you later!</p> : (<Counter/>)}
        </div>

        <label>
            <input type="checkbox" onClick={(e)=> setisPasued(e.target.checked)} />
            Take a break
        </label>
        </>
    )
}

function Counter({isPasued})
{
    const[score, setScore] = useState(0)
    const[hover, setHover] = useState(false)

    let className = "counter"

    if(hover)
    {
        className += "hover"
    }

    return(
        <>
       <h3>Different componet at the same position reset state</h3> 
        <div className={className} onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} >
            <h1>{score}</h1>
            <button onClick={()=>{setScore(score + 1)}}>Add One</button>
        </div>

        </>
    )
}