import React,{useState} from "react"
import BackHome from "../components/BackHome"

function AIProduct(){

const [name,setName]=useState("")
const [result,setResult]=useState("")

function generate(){
setResult(`${name} is a high-quality product designed for performance.`)
}

return(

<div>
 <BackHome/>

<h2>Product Description</h2>

<input onChange={(e)=>setName(e.target.value)} />

<button onClick={generate}>Generate</button>

<p>{result}</p>

</div>

)

}

export default AIProduct