import { sculptureList } from "../data/data";
import {useState} from 'react'

export default function Gallery(){
    const [index, setIndex] = useState(0)

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length-1 

    function handleNextClick(){
        if(hasNext)
        {
            setIndex(index+1)
        }
    }

    function handlePrevClick(){
        if(hasPrev)
        {
            setIndex(index-1)
        }
    }

    let sculpture = sculptureList[index];

  return (
    <>

    <button onClick={handlePrevClick} disabled={!hasPrev}>
        Pre
    </button>

    <button onClick={handleNextClick} disabled={!hasNext}>
        Next
    </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}