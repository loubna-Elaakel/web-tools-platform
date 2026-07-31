import imageCompression from "browser-image-compression";
import BackHome from "../components/BackHome"

export default function CompressImage() {

  const compress = async (file) => {
    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 800,
    };

    const compressedFile = await imageCompression(file, options);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(compressedFile);
    link.download = "compressed.jpg";
    link.click();
  };

  return (
    <div>
         <BackHome/>

      <h2>Compress Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => compress(e.target.files[0])}
      />
    </div>
  );
}