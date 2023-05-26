import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];

export default function Messenger()
{
    const[to, setTo] = useState(contacts[0])
    return(
        <div>
            <ContactList selectContact={to} contacts={contacts} 
            onSelect={contact=> setTo(contact)} />
            <Chat key={to.id} contact={to} />
        </div>
    )
}