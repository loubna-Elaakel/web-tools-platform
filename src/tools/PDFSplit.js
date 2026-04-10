import React,{useState} from "react"
import BackHome from "../components/BackHome"

function PDFSplit(){

const [file,setFile]=useState(null)

return(

<div>
<BackHome/>

<h2>PDF Split</h2>

<input type="file" onChange={(e)=>setFile(e.target.files[0])} />

<p>{file ? file.name : "No file"}</p>

</div>

)

}

export default PDFSplit