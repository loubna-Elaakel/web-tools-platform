import { useState } from "react"
import BackHome from "../components/BackHome"

function UrlEncoder(){

const [text,setText] = useState("")
const [result,setResult] = useState("")

function encodeURL(){
setResult(encodeURIComponent(text))
}

function decodeURL(){
setResult(decodeURIComponent(text))
}

return(

<div className="tool-page">

<BackHome/>

<h2>URL Encoder / Decoder</h2>

<textarea
placeholder="Enter URL here"
onChange={(e)=>setText(e.target.value)}
/>

<button onClick={encodeURL}>Encode</button>
<button onClick={decodeURL}>Decode</button>

<textarea value={result} readOnly/>

</div>

)

}

export default UrlEncoder