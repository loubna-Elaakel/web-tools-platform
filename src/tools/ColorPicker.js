import React,{useState} from "react"
import BackHome from "../components/BackHome"

function ColorPicker(){

const [color,setColor]=useState("#000000")

return(

<div>
 <BackHome/>
<h2>Color Picker</h2>

<input
type="color"
value={color}
onChange={(e)=>setColor(e.target.value)}
/>

<p>{color}</p>

<div style={{
width:"100px",
height:"100px",
background:color
}}></div>

</div>

)

}

export default ColorPicker