import { useState } from "react";

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];

export default function Menu(){
    const [items, setItems] = useState(initialItems)
    const [selectedId, setselectedID] = useState(0)

    const selectedItem = items.find( item => item.id === selectedId)

    function handleChangeItem(id, e)
    {
        setItems( items.map( item => {
            if(item.id === id)
            {
                return{
                    ...item,
                    title: e.target.value,
                }
            }else{
                return item;
            }
        }))
    }

    return(
        <>
            <h3>Avoiding duplication in State</h3>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            <input value={item.title} onChange={(e)=> handleChangeItem(item.id, e) } />
                            {' '}
                            <button onClick={()=> {setselectedID(item.id)}}>Choose</button>
                        </li>  
                    ))
                }
            </ul>
            <p>You picked selected item:{selectedItem.title} </p>
        </>
    )
}