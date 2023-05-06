import { Profile } from "./Profile"

export default function Gallery(){
    return(
        <div>

        <h1>Notable Scientists</h1>
            <Profile 
            person={{ name:"Maria Skłodowska-Curie", imageId: "2017/03/13/21/41/scientist-2141259_960_720"}}
            size={100} profession="physicist and chemist" 
            awards=" 4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            discover = "polonium (element)"
            />

<Profile 
            person={{ name:"Maria Skłodowska-Curie", imageId: "2017/03/13/21/41/scientist-2141259_960_720"}}
            size={100} profession="physicist and chemist" 
            awards=" 4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            discover = "polonium (element)"
            />

<Profile 
            person={{ name:"Maria Skłodowska-Curie", imageId: "2017/03/13/21/41/scientist-2141259_960_720"}}
            size={100} profession="physicist and chemist" 
            awards=" 4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
            discover = "polonium (element)"
            />

        </div>
    )
}
