import React,{useState} from "react"
import BackHome from "../components/BackHome"

function ImageResize(){

const [img,setImg]=useState(null)

function handle(e){
setImg(URL.createObjectURL(e.target.files[0]))
}

return(

<div>
<BackHome/>

<h2>Image Resize</h2>

<input type="file" onChange={handle} />

{img && <img src={img} width="200" />}

</div>

)

}

export default ImageResize