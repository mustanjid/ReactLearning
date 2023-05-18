// Arrays are mutable in js but it must be used as unimmutable manner in react
// most used array methods - spread(...), concat, filter, slice, map

// Adding to an arry

import { useState } from "react";
let nextId = 0;
export default function List(){
    const[ name, setName ] = useState('')
    const[artists, setArtists] = useState([])

    return (
        <>
          <h1>Inspiring sculptors:</h1>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={ () => {
            setArtists(
                [
                ...artists,
                {id: nextId++, name:name},
            ]
            )
          }}>Add</button>
         <ul>
{artists.map(artist => (
  <li key={artist.id}>
    {artist.name}{' '}
    <button onClick={() => {
      setArtists(
        artists.filter(a =>
          a.id !== artist.id
        )
      );
    }}>
      Delete
    </button>
  </li>
))}
</ul>
        </>
}