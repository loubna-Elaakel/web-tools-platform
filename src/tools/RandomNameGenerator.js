import { useState } from "react"
import BackHome from "../components/BackHome"

function RandomNameGenerator(){

const names = ["Lina","Adam","Sara","Youssef","Nora","Samir","Omar","Amina"]

const [name,setName] = useState("")

function generate(){

const random = names[Math.floor(Math.random()*names.length)]

setName(random)

}

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>Random Name Generator</h2>

<p>Generate random names online.</p>

<button onClick={generate}>
Generate Name
</button>

<h3>{name}</h3>

</div>

)

}

export default RandomNameGenerator