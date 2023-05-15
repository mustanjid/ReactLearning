import { useState } from "react";
import Form from "./statestructure";

export default function FeedBackForm()
{
    const [text, setText] = useState('')
    const [status, setStatus] = useState('typing')

    async function handleSubmit(e)
    {
        e.preventDefault();
        setStatus('sending')
        try{
            await sendMessage(text)
            setStatus('sent')
        } catch{
            setStatus('typing')
        }
    }

    const isSending = status === 'sending'
    const isSent = status === 'sent'

    if(isSent)
    {
        return <h1>Thanks for Feedback!</h1>
    }

    return(
        <>
        <form onSubmit={handleSubmit} type='submit'>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea disabled={isSending} value={text} onChange={ e => setText(e.target.value)} />
            <br />
            <button disabled={text.length === 0 || status === 'sent'} type="submit">
                Send
            </button>
            {isSending && <p>Sending...</p>}
        </form>

        </>
    )

    function sendMessage(text){
        return new Promise( resolve => {
            setTimeout(resolve, 2000)
        })
    }
}