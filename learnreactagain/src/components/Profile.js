import Avatar from './Avatar'
import { getImageUrl } from "./utils";

function Bio(props){
    return(
        <div>
                 <ul>
        <li>
          <b>Profession: </b> 
          {props.profession}
        </li>
        <li>
          <b>Awards: </b> 
          {props.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {props.discover}
        </li>
      </ul>
        </div>
    )
}

export function Profile(props){
    return(
        <>
        <div>
        <section className="profile">
        <h2>{props.person.name}</h2>
        <img 
        src={ getImageUrl(props.person) }
        alt={props.person.name}
        width = {props.size}
        height = {props.size}
        />

        <Bio 
        profession={props.profession} awards={props.awards}
        discover={props.discover}
        />
        </section>
        </div>  
        </>
    )
}
