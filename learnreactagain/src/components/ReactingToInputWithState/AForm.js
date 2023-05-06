import {useState} from 'react'

export default function EditProfile() {
  const [firstName, setfirstName] = useState('Jane')
  const [lastName, setlastName] = useState('Jacob')
  const [isEditing, setisEditing] = useState(false)

  return (
<form onSubmit={ (e) => {
  e.preventDefault()
  setisEditing(!isEditing)
  }
  }>
      <label>
        First name: {' '}
        {isEditing? (<input value={firstName} 
                      onChange={(e)=> setfirstName(e.target.value)}/>) : (
          <b>{firstName}</b>
        )}
      </label>
      <br />
      <br />
       <label>
        Last name: {' '}
        {isEditing? (<input value={lastName} 
                      onChange={(e)=> setlastName(e.target.value)}/>) : (
          <b>{lastName}</b>
        )}
      </label>
      <br />
      <br />
      <button type="submit">
        {isEditing? 'Save': 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );

}