import React,{useState} from "react"
import BackHome from "../components/BackHome"

function PasswordStrength(){

const [password,setPassword]=useState("")
const [strength,setStrength]=useState("")

const checkPassword=(value)=>{

setPassword(value)

if(value.length<6){
setStrength("Weak")
}
else if(value.length<10){
setStrength("Medium")
}
else{
setStrength("Strong")
}

}

return(

<div>
 <BackHome/>
<h2>Password Strength Checker</h2>

<input
type="password"
value={password}
onChange={(e)=>checkPassword(e.target.value)}
/>

<p>Password: {password}</p>

<p>Strength: {strength}</p>

</div>

)

}

export default PasswordStrength