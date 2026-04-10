import React,{useState} from "react"
import BackHome from "../components/BackHome"

function AIParaphraser(){

const [text,setText]=useState("")
const [result,setResult]=useState("")

function generate(){
setResult("Improved: " + text)
}

return(

<div>
 <BackHome/>

<h2>Paraphraser</h2>

<textarea onChange={(e)=>setText(e.target.value)} />

<button onClick={generate}>Generate</button>

<p>{result}</p>

</div>

)

}

export default AIParaphraser