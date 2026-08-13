import React, { useState } from "react";
import BackHome from "../components/BackHome";
import SEO from "../components/SEO";

function AIResume() {

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState("");

  function generate() {

    setResult(`
Name: ${name}

Professional Summary:
Experienced ${job} with strong skills.

Experience:
- Worked as ${job}
- Delivered quality work
`);

  }

  return (
    <>
      <SEO
        title="AI Resume Generator | Create a Resume Online"
        description="Create a simple resume draft online by entering your name and job title. Generate a professional resume structure quickly."
        keywords="AI resume generator, resume generator, CV generator, resume builder, create resume online"
        url="https://web-tools-platform.vercel.app/ai-resume-generator"
      />

      <div>
        <BackHome />

        <h1>AI Resume Generator</h1>

        <p>
          Create a simple resume draft by entering your name and job
          title.
        </p>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Job"
          onChange={(e) => setJob(e.target.value)}
        />

        <button onClick={generate}>
          Generate
        </button>

        <pre>{result}</pre>

        <h2>Frequently Asked Questions</h2>

        <h3>What is a Resume Generator?</h3>

        <p>
          A Resume Generator helps you create a basic resume draft
          using the information you provide.
        </p>

      </div>
    </>
  );
}

export default AIResume;