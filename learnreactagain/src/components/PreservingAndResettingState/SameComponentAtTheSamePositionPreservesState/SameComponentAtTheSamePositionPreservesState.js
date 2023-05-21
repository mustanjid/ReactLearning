import { useState } from "react";

export default function SameComponentAtTheSameCompostionPreserveState()
{
    const [isFancy, setIsFancy] = useState(false)
    return(
        <>
        <div>
            {isFancy? (<Counter isFancy={true} />) : (<Counter isFancy={false}/>)}
        </div>

        <label>
            <input type="checkbox" onClick={(e)=> setIsFancy(e.target.checked)} />
        </label>
        </>
    )
}

function Counter({isFancy})
{
    const[score, setScore] = useState(0)
    const[hover, setHover] = useState(false)

    let className = "counter"
    if(hover)
    {
        className += "hover"
    }

    if(isFancy)
    {
        className += "fancy"
    }

    return(
        <div className={className} onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)} >
            <h1>{score}</h1>
            <button onClick={()=>{setScore(score + 1)}}>Add One</button>
        </div>
    )
}