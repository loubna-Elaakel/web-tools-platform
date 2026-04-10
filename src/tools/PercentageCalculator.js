import { useState } from "react"
import BackHome from "../components/BackHome"

function PercentageCalculator(){

const [percent,setPercent] = useState("")
const [number,setNumber] = useState("")
const [result,setResult] = useState("")

function calculate(){

setResult((percent/100)*number)

}

return(

<div style={{padding:"40px"}}>

<BackHome/>

<h2>Percentage Calculator</h2>

<p>Calculate percentages quickly.</p>

<input
type="number"
placeholder="Percentage"
onChange={(e)=>setPercent(e.target.value)}
/>

<input
type="number"
placeholder="Number"
onChange={(e)=>setNumber(e.target.value)}
/>

<button onClick={calculate}>
Calculate
</button>

<h3>{result}</h3>

</div>

)

}

export default PercentageCalculator