import React, { useState } from "react";
import BackHome from "../components/BackHome";
import SEO from "../components/SEO";

function AIParaphraser() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function generate() {
    setResult("Improved: " + text);
  }

  return (
    <>
      <SEO
        title="AI Paraphraser | Rewrite Text Online"
        description="Rewrite and improve your text online with our simple paraphrasing tool. Enter your text and generate an improved version."
        keywords="AI paraphraser, paraphrasing tool, rewrite text, text rewriter, online paraphraser"
        url="https://web-tools-platform.vercel.app/ai-paraphraser"
      />

      <div>
        <BackHome />

        <h1>AI Paraphraser</h1>

        <p>
          Rewrite and improve your text quickly with our online
          paraphrasing tool.
        </p>

        <textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        />

        <button onClick={generate}>
          Generate
        </button>

        <p>{result}</p>

        <h2>Frequently Asked Questions</h2>

        <h3>What is a paraphrasing tool?</h3>

        <p>
          A paraphrasing tool helps rewrite text into a different form
          while keeping the original idea.
        </p>

      </div>
    </>
  );
}

export default AIParaphraser;