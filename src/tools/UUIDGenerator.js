import { useState } from "react"
import BackHome from "../components/BackHome"

function UUIDGenerator(){

const [uuid,setUuid] = useState("")

function generate(){

const id = crypto.randomUUID()

setUuid(id)

}

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>UUID Generator</h2>

 <p>Generate unique identifiers (UUID) online.</p>
 
<button onClick={generate}>
Generate UUID
</button>

<p>{uuid}</p>

</div>

)

}

export default UUIDGenerator