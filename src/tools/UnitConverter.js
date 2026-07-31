import React,{useState} from "react"
import BackHome from "../components/BackHome"

function UnitConverter(){

const [km,setKm]=useState("")
const [result,setResult]=useState("")

function convert(){

setResult(km*1000 + " meters")

}

return(

<div>
 <BackHome/>
<h2>KM to Meter</h2>

<input
value={km}
onChange={(e)=>setKm(e.target.value)}
/>

<button onClick={convert}>
Convert
</button>

<p>{result}</p>

</div>

)

}

export default UnitConverter