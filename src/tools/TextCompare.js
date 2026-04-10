import React,{useState} from "react"
import BackHome from "../components/BackHome"

function TextCompare(){

const [text1,setText1]=useState("")
const [text2,setText2]=useState("")

const isSame = text1 === text2

return(

<div>
 <BackHome/>
<h2>Text Compare Tool</h2>

<textarea
placeholder="Text 1"
value={text1}
onChange={(e)=>setText1(e.target.value)}
/>

<textarea
placeholder="Text 2"
value={text2}
onChange={(e)=>setText2(e.target.value)}
/>

<h3>
{isSame ? "✅ Same Text" : "❌ Different Text"}
</h3>

</div>

)

}

export default TextCompare