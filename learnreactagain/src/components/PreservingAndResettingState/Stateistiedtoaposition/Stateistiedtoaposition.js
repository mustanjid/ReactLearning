// React associates each piece of state it’s holding with the 
// correct component by where that component sits in the UI tree.

import {useState} from 'react'

export default function StateIsTiedToAPosition()
{
    const[showB, setShowB] = useState(true)
    const counter = <Counter />

    return(
        <div>
             <h2>Preserving and Resetting State</h2>
        <h3>State is tied to a position in the UI tree</h3>
            {/* this two components state is independent to that component and individual */}
            {/* These are two separate counters because each is rendered at its own position in the tree. */}
            {counter}
            {showB && counter}
            <br />
            {/* stop rendering the second counter, its state disappears completely */}
            <label>
                <input type='checkbox'
                checked={showB}
                onClick={e=>{setShowB(e.target.checked)}} />
                Render the second counter
            </label>
        </div>
    )
}

function Counter()
{
    const[score, setScore] = useState(0)
    const[hover, setHover] = useState(false)

    let className = 'counter'
    if(hover)
    {
        className += 'hover'
    }

    return(
        <>
        <div className={className} 
        onPointerEnter={()=>{setHover(true)}}
        onPointerLeave={()=>setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={()=>{setScore(score + 1)}}>
                Add One
            </button>
        </div>
        </>
    )
}