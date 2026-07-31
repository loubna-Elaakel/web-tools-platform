import { useState } from "react"
import BackHome from "../components/BackHome"

function MarkdownPreview(){

const [text,setText] = useState("")

return(

<div className="tool-page">

<BackHome/>

<h2>Markdown Preview</h2>

<textarea
placeholder="Write markdown"
onChange={(e)=>setText(e.target.value)}
/>

<div className="preview">
{text}
</div>

</div>

)

}

export default MarkdownPreview