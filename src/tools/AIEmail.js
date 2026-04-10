import React,{useState} from "react"
import BackHome from "../components/BackHome"

function AIEmail(){

const [topic,setTopic]=useState("")
const [result,setResult]=useState("")

function generate(){
setResult(`Hello,\n\nRegarding ${topic}...\n\nBest regards`)
}

return(

<div>
 <BackHome/>

<h2>AI Email</h2>

<input onChange={(e)=>setTopic(e.target.value)} />

<button onClick={generate}>Generate</button>

<pre>{result}</pre>

</div>

)

}

export default AIEmail