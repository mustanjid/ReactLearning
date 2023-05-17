import { useState } from "react";
import Panel from "../Parent/Panel";

export default function Accordion()
{
    const[activeIndex, setactiveIndex] = useState(0)
    return(
        <>
        <h3>Sharing state between two components</h3>
        <Panel title="About" isActive={activeIndex === 0} onShow={()=>setactiveIndex(0)}>  
        With a population of about 2 million, Almaty is Kazakhstan's l</Panel>
        <Panel title="Etymology" isActive={activeIndex === 1} onShow={()=>setactiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh
        </Panel>
        </>
    )
}