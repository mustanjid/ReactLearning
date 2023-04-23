import { useState } from "react";

export default function Form()
{
    const [person, setPerson] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com"
    });

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
          <label>
            First name:
            <input name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last name:
            <input name="lastName"
              value={person.lastName}
              onChange = {handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input name="email"
              value={person.email} onChange = {handleChange}
            />
          </label>
          <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
          </p>
        </>
    )

}