import React, { useState } from "react"
import BackHome from "../components/BackHome"

function ImageToBase64(){

const [base64, setBase64] = useState("")
const [imagePreview, setImagePreview] = useState("")

const handleImage = (e) => {

const file = e.target.files[0]

if(!file) return

const reader = new FileReader()

reader.readAsDataURL(file)

reader.onload = () => {

setBase64(reader.result)
setImagePreview(reader.result)

}

}

const copyBase64 = () => {

navigator.clipboard.writeText(base64)

alert("Base64 copied!")

}

return(

<div style={{padding:"40px",maxWidth:"700px",margin:"auto"}}>
 <BackHome/>
<h2>Image To Base64</h2>

<input type="file" accept="image/*" onChange={handleImage}/>

{imagePreview && (

<div style={{marginTop:"20px"}}>

<img 
src={imagePreview}
alt="preview"
style={{width:"200px",borderRadius:"10px"}}
/>

</div>

)}

{base64 && (

<div style={{marginTop:"20px"}}>

<textarea
value={base64}
readOnly
rows="8"
style={{
width:"100%",
padding:"10px",
borderRadius:"6px"
}}
/>

<br/><br/>

<button onClick={copyBase64}>
Copy Base64
</button>

</div>

)}

</div>

)

}

export default ImageToBase64