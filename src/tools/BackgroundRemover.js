import React,{useState} from "react"
import BackHome from "../components/BackHome"

function BackgroundRemover(){

const [preview,setPreview]=useState(null)

const upload=(e)=>{
const file=e.target.files[0]

if(file){
setPreview(URL.createObjectURL(file))
}
}

return(

<div className="tool-page">
 <BackHome/>
<h2>Remove Background</h2>

<input
type="file"
accept="image/*"
onChange={upload}
/>

{preview && (

<img
src={preview}
alt="preview"
style={{width:"250px"}}
/>

)}

</div>

)

}

export default BackgroundRemover