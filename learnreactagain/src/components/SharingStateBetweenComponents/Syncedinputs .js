import {useState} from 'react'

export default function SyncedInputs()
{
    const [text, setText] = useState('')

    function handleChange(e)
    {
        setText(e.target.value)
    }

    return(
        <>
        <h3>Synced Inputs</h3>
        <Input label="First Input" value={text} onChange={handleChange} />
        <br />
        <br />
        <Input label="Second Input" value={text} onChange={handleChange}/>
        </>
    )
}

function Input({label, value, onChange})
{
    return(
        <label>
            {label}
            {' '}
            <input value={value} onChange={onChange}/>
        </label>
    )
}