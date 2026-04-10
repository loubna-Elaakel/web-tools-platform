import { useState } from "react"
import BackHome from "../components/BackHome"

function TextReverse(){

const [text,setText] = useState("")
const [result,setResult] = useState("")

function reverse(){

const reversed = text.split("").reverse().join("")

setResult(reversed)

}

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>Text Reverse</h2>

<p>Reverse text instantly online.</p>

<textarea
onChange={(e)=>setText(e.target.value)}
style={{width:"100%",height:"120px"}}
/>

<button onClick={reverse}>
Reverse Text
</button>

<textarea
value={result}
readOnly
style={{width:"100%",height:"120px"}}
/>

</div>

)

}

export default TextReverse