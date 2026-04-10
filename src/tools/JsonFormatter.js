import { useState } from "react";
import BackHome from "../components/BackHome"


function JsonFormatter(){

const [input,setInput] = useState("");
const [output,setOutput] = useState("");
const [error,setError] = useState("");

function formatJSON(){

try{

const parsed = JSON.parse(input);

const formatted = JSON.stringify(parsed,null,2);

setOutput(formatted);

setError("");

}catch{

setOutput("");

setError("Invalid JSON");

}

}

return(

<div style={{padding:"30px"}}>
<BackHome/>
<h2>JSON Formatter</h2>
<p>Format and validate JSON code instantly.</p>


<textarea
rows="8"
placeholder="Paste JSON here..."
value={input}
onChange={(e)=>setInput(e.target.value)}
/>

<br/><br/>

<button onClick={formatJSON}>
Format JSON
</button>

<br/><br/>

{error && (
<p style={{color:"red"}}>
{error}
</p>
)}

<pre>{output}</pre>

</div>

);

}

export default JsonFormatter;