import React, { useState } from "react";
import BackHome from "../components/BackHome";
import SEO from "../components/SEO";

function AIProduct() {

  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function generate() {
    setResult(
      `${name} is a high-quality product designed for performance.`
    );
  }

  return (
    <>
      <SEO
        title="AI Product Description Generator | Write Product Descriptions"
        description="Generate a simple product description online by entering your product name. Create product content quickly and easily."
        keywords="product description generator, AI product description, product description writer, product content generator"
        url="https://web-tools-platform.vercel.app/ai-product"
      />

      <div>
        <BackHome />

        <h1>Product Description Generator</h1>

        <p>
          Generate a simple product description by entering your
          product name.
        </p>

        <input
          placeholder="Enter product name..."
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={generate}>
          Generate
        </button>

        <p>{result}</p>

        <h2>Frequently Asked Questions</h2>

        <h3>What is a product description generator?</h3>

        <p>
          A product description generator creates a short description
          based on the product name you provide.
        </p>

      </div>
    </>
  );
}

export default AIProduct;