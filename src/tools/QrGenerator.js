import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import BackHome from "../components/BackHome"


function QrGenerator(){

const [text,setText] = useState("");

function downloadQR(){

const canvas = document.querySelector("canvas");

const url = canvas.toDataURL("image/png");

const link = document.createElement("a");

link.href = url;
link.download = "qr-code.png";

link.click();

}

return(

<div style={{padding:"30px"}}>
<BackHome/>

<h2>QR Code Generator</h2>

<p>Generate QR codes for URLs or text instantly.</p>

<input
type="text"
placeholder="Enter text or URL"
value={text}
onChange={(e)=>setText(e.target.value)}
/>

<br/><br/>

{text && <QRCodeCanvas value={text} size={200}/>}

<br/><br/>

{text && (
<button onClick={downloadQR}>
Download QR Code
</button>
)}

</div>

);

}

export default QrGenerator;