import React, { useState } from "react";
import BackHome from "../components/BackHome";
import SEO from "../components/SEO";

function BackgroundRemover() {

  const [preview, setPreview] = useState(null);

  const upload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <SEO
        title="Background Remover | Upload and Preview Images"
        description="Upload an image online and preview it instantly with our simple image background tool."
        keywords="background remover, image background tool, remove image background, image preview"
        url="https://web-tools-platform.vercel.app/background-remover"
      />

      <div className="tool-page">
        <BackHome />

        <h1>Background Remover</h1>

        <p>
          Upload an image and preview it instantly using our online
          image background tool.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={upload}
        />

        {preview && (
          <img
            src={preview}
            alt="Uploaded image preview"
            style={{ width: "250px" }}
          />
        )}

        <h2>Frequently Asked Questions</h2>

        <h3>How can I upload an image?</h3>

        <p>
          Click the file selection button and choose an image from
          your device. The selected image will appear as a preview.
        </p>

      </div>
    </>
  );
}

export default BackgroundRemover;