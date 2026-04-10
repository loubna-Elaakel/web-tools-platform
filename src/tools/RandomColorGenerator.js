import { useState } from "react"
import BackHome from "../components/BackHome"

function RandomColorGenerator(){

const [color,setColor] = useState("#ffffff")

function generate(){

const letters="0123456789ABCDEF"
let newColor="#"

for(let i=0;i<6;i++){
newColor+=letters[Math.floor(Math.random()*16)]
}

setColor(newColor)

}

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>Random Color Generator</h2>

<p>Generate random HEX colors instantly.</p>

<button onClick={generate}>
Generate Color
</button>

<div
style={{
width:"200px",
height:"100px",
background:color,
marginTop:"20px"
}}
></div>

<p>{color}</p>

</div>

)

}

export default RandomColorGenerator