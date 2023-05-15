import { useState } from "react";
import {initialTravelPlan} from "./Place"

export default function Travelplan()
{
    const [plan, setPlan] = useState(initialTravelPlan)

    function handleComplete(parentId, childId)
    {
        // Create a new version of the parent place
        const parent = plan[parentId]
         // that doesn't include this child ID.
        const nexParent = {
            ...parent,
            childIds: parent.childIds.filter(id => id !== childId)
        }

         // Update the root state object...
        setPlan({
            ...plan,
            // ...so that it has the updated parent.
            [parentId]: nexParent
        })
    }

    const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );

}


function PlaceTree({id, parentId, placesById, onComplete})
{
    const place = placesById(id)
    const childIds = place.childIds;

    return(
        <li>
            {place.title}
            <button onClick={()=> onComplete(parentId, id)}>Complete</button>
            {childIds.lenght > 0 && 
             <ol>
                {childIds.map(childId=> 
                    <PlaceTree
                    key={childId}
                    id={childId}
                    parentId={id}
                    placesById={placesById}
                    onComplete={onComplete}
                    />

                )}
             </ol>
            
            }
        </li>
    )
}