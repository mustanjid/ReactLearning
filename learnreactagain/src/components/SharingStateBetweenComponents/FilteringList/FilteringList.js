import {foods, filterItems} from './Data'
import { useState } from 'react'

export default function FilteredList()
{
    const[query, setQuery] = useState('')
    const result = filterItems(foods, query)

    function handleChange(e){
        setQuery(e.target.value)
    }

    return(
        <>
        <h3>Filtering a list</h3>
        <Searchbar value={query} onChange={handleChange}/>
        <hr />
        <List items={result} />
        </>
    )
}

function Searchbar({value, onChange})
{
    return(
        <label>
            Search: {" "}
            <br />
            <input value={value} onChange={onChange} />
        </label>
    )
}

function List({items})
{
    return(
        <table>
        <tbody>
          {items.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}