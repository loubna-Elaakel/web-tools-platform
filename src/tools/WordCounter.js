import { useState } from "react";
import BackHome from "../components/BackHome"


function WordCounter() {

  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;

  return (
    <div>
        <BackHome/>

      <h2>Word Counter</h2>
      
      <p>Count words and characters instantly.</p>

      <textarea
        rows="6"
        placeholder="Write your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Words: {words}</p>
      <p>Characters: {characters}</p>
    </div>
  );
}

export default WordCounter;