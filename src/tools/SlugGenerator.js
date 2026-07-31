import React,{useState} from "react"
import BackHome from "../components/BackHome"

function SlugGenerator(){

const [text,setText]=useState("")
const [slug,setSlug]=useState("")

function generate(){

const s = text
.toLowerCase()
.replace(/[^a-z0-9 ]/g,"")
.replace(/\s+/g,"-")

setSlug(s)

}

return(

<div>
 <BackHome/>
<h2>Slug Generator</h2>

<input
placeholder="Enter text..."
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<button onClick={generate}>
Generate
</button>

<p>{slug}</p>

</div>

)

}

export default SlugGenerator