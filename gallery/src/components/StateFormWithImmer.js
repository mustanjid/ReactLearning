import {useImmer} from 'use-immer'

export default function Form(){
    const[person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        },
})

function handleChange(e){
    updatePerson(draft=>{
        draft.name = e.target.value;
    })
}

function handleTitleChange(e){
    updatePerson(draft=>{
        draft.artwork.title = e.target.value;
    })
}

return (
    <>
      <label>
        Name:
        <input
          value={person.name}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
  
}