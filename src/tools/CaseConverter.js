import { useState } from "react"
import BackHome from "../components/BackHome"

function CaseConverter(){

const [text,setText] = useState("")

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>Case Converter</h2>

<p>Convert text to uppercase or lowercase.</p>

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Write your text here"
style={{width:"100%",height:"120px"}}
/>

<div style={{marginTop:"20px"}}>

<button onClick={()=>setText(text.toUpperCase())}>
UPPERCASE
</button>

<button onClick={()=>setText(text.toLowerCase())}>
lowercase
</button>

<button onClick={()=>setText(text.charAt(0).toUpperCase()+text.slice(1))}>
Capitalize
</button>

</div>

</div>

)

}

export default CaseConverter