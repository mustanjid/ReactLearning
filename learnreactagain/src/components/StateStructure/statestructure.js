import {useState} from 'react'

export default function Form(){
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState('')

    const fullName = firstName + ' ' + lastName;

    function handleFirstName(e){
        setFirstName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }

    return(
        <>
            <h1>Lets check you in:</h1>
            <label>
                First Name:{' '}
                <input value={firstName} onChange={handleFirstName}/>
            </label>
            <br />

            <label>
                Last Name:{' '}
                <input value={lastName} onChange={handleLastName}/>
            </label>
            <br />

            <p>Your ticket will be issued to: {fullName}</p>
        
        </>
    )
}