import { getImageUrl } from "./utils";

export default function Avatar(props){
    return(
        <>
        <h2>{props.person.name}</h2>
        <img 
        src={ getImageUrl(props.person) }
        alt={props.person.name}
        width = {props.size}
        height = {props.size}
        />
        </>
    )
}