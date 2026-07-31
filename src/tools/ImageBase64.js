import { useState } from "react"
import BackHome from "../components/BackHome"

export default function ImageToBase64() {

  const convert = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result;

      const blob = new Blob([base64], { type: "text/plain" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "image-base64.txt";
      link.click();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
        <BackHome/>

      <h2>Image to Base64</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => convert(e.target.files[0])}
      />
    </div>
  );
}