import { useState } from "react";

export default function Team(){
    const [teamMember , setTeamMember] = useState(0)


  function   handleState(){
const updateTeamMember = teamMember +1;
setTeamMember(updateTeamMember)
    }


    return (
        <div style={styleBro}>
            <h2> team member holo: {teamMember} </h2>
            <button onClick={handleState}>update membeeer</button>
        </div>
    )
}


const styleBro = {
    margin:"10px",
    border:"2px solid purple",
    borderRadius:"10px"
}