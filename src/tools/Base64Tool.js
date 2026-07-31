import { useState } from "react"
import BackHome from "../components/BackHome"

function Base64Tool(){

const [text,setText] = useState("")
const [result,setResult] = useState("")

function encode(){

setResult(btoa(text))

}

function decode(){

try{

setResult(atob(text))

}catch{

setResult("Invalid Base64")

}

}

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>Base64 Encoder / Decoder</h2>

<p>Encode and decode Base64 strings online.</p>

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
style={{width:"100%",height:"120px"}}
/>

<div style={{marginTop:"20px"}}>

<button onClick={encode}>
Encode
</button>

<button onClick={decode}>
Decode
</button>

</div>

<p>{result}</p>

</div>

)

}

export default Base64Tool