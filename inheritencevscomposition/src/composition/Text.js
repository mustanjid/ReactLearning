export default function Text ({addEmoji, addBracket}) {
    let text = 'I am Js'
    
    if(addEmoji){
        text = addEmoji(text, "😀")
    }

    if(addBracket){
        text = addEmoji(text, "😀")
    }
    return <div>{addEmoji? addEmoji(text, "😀"): text}</div>
}