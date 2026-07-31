import React,{useState} from "react"
import BackHome from "../components/BackHome"

function AIResume(){

const [name,setName]=useState("")
const [job,setJob]=useState("")
const [result,setResult]=useState("")

function generate(){

setResult(`
Name: ${name}

Professional Summary:
Experienced ${job} with strong skills.

Experience:
- Worked as ${job}
- Delivered quality work
`)

}

return(

<div>
 <BackHome/>

<h2>AI Resume Generator</h2>

<input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
<input placeholder="Job" onChange={(e)=>setJob(e.target.value)} />

<button onClick={generate}>Generate</button>

<pre>{result}</pre>

</div>

)

}

export default AIResume