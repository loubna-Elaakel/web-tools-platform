import { PDFDocument } from "pdf-lib";
import BackHome from "../components/BackHome"

export default function MergePDF() {

  const mergePDFs = async (files) => {
    const mergedPdf = await PDFDocument.create();

    for (let file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((p) => mergedPdf.addPage(p));
    }

    const mergedBytes = await mergedPdf.save();

    // Download
    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "merged.pdf";
    link.click();
  };

  return (
    <div>
         <BackHome/>

      <h2>Merge PDF</h2>
      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={(e) => mergePDFs(e.target.files)}
      />
    </div>
  );
}