import React, { useState } from "react";
import BackHome from "../components/BackHome";
import SEO from "../components/SEO";

function AIEmail() {

  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  function generate() {
    setResult(`Hello,\n\nRegarding ${topic}...\n\nBest regards`);
  }

  return (
    <>
      <SEO
        title="AI Email Writer | Generate Emails Online"
        description="Create a simple professional email from a topic with our free online email writing tool."
        keywords="AI email writer, email generator, email writing tool, professional email generator"
        url="https://web-tools-platform.vercel.app/ai-email"
      />

      <div>
        <BackHome />

        <h1>AI Email Writer</h1>

        <p>
          Generate a simple email from your topic with our online
          email writing tool.
        </p>

        <input
          placeholder="Enter your email topic..."
          onChange={(e) => setTopic(e.target.value)}
        />

        <button onClick={generate}>
          Generate
        </button>

        <pre>{result}</pre>

        <h2>Frequently Asked Questions</h2>

        <h3>What can I use the Email Writer for?</h3>

        <p>
          You can use it to create a simple email draft based on a
          topic or message you provide.
        </p>

      </div>
    </>
  );
}

export default AIEmail;